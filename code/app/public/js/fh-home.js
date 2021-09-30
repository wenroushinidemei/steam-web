let carousel = document.querySelector(".carousel");
let indexf = 0;
let gameList = []

function show(game) {
    // try{
    // let imgs = JSON.parse(game.imgurls)
    // }catch{
    //     console.log(game.imgurls);
    //     console.log(game);
    // }
    let imgs = JSON.parse(game.imgurls)
    let price = JSON.parse(game.price);

    carousel.innerHTML = `
    <div class="left leftImg" style="background-image: url(${imgs[1]})"></div>
    <div class="right">
        <div class="game_name">${game.gameName}</div>
        <div class="screenshots">
            <img class="rightImgs" src="${imgs[0]}">
            <img class="rightImgs" src="${imgs[1]}">
            <img class="rightImgs" src="${imgs[2]}">
            <img class="rightImgs" src="${imgs[3]}">
        </div>
        <div class="reason">
            <h2 class="main_default">${game.state}</h2>
            <h2 class="hotshop">热销商品</h2>
        </div>
        <div class="box_bottom">
            <div class="price">
            <div class="discount_pct">${price[0]}</div>
            <div class="pass">${price[1]}</div>
            <div class="now">${price[2]}</div>
            </div>
            <img src="https://store.st.dl.pinyuncloud.com/public/images/v6/icon_platform_win.png?v=3
            " class="pic_windows">
        </div>
    </div>
    `
}

let lis = document.querySelectorAll('.carousel_thumbs li');
lis.forEach(li => li.addEventListener('click', carouselClick))
let index1 = 0; //第一板块下面的li的属性
// 监听li的点击事件
function carouselClick(event) {
    // 全局游戏序号通过自定义属性来需改。
    index1 = this.dataset.index;
    show(gameList[index1])
    // 将所有li进行遍历，将此时唯一的带有focus类名的li中类名消除。
    Array.from(this.parentNode.children).every(li => li.className == 'focus' ? li.className = '' : true)
    // 当前点击给予类名。
    this.className = "focus"
}


let leftArrow = document.querySelector(".box_maincap .arrow_left");
let rightArrow = document.querySelector(".box_maincap .arrow_right");

leftArrow.onclick = function () {
    lis[indexf].style.backgroundColor = 'hsla(202, 60%, 100%, 0.2)';
    indexf--;
    if (indexf == -1) {
        indexf = 11;
    }
    show(gameList[indexf]);
    lis[indexf].style.backgroundColor = 'hsla(202, 60%, 100%, 0.4)';
}

rightArrow.onclick = function () {
    lis[indexf].style.backgroundColor = 'hsla(202, 60%, 100%, 0.2)';
    indexf++;
    if (indexf == gameList.length) {
        indexf = 0;
    }
    show(gameList[indexf]);
    lis[indexf].style.backgroundColor = 'hsla(202, 60%, 100%, 0.4)';
}


//设置定时器  图片自动轮播
setInterval(() => {
    lis[indexf].style.backgroundColor = 'hsla(202, 60%, 100%, 0.2)';
    indexf++;
    if (indexf == gameList.length) {
        indexf = 0;
    }
    show(gameList[indexf]);
    lis[indexf].style.backgroundColor = 'hsla(202, 60%, 100%, 0.4)';

    // 鼠标移动到右边的小图片，左边的大图片随着改变
    let leftImg = document.querySelector(".leftImg");
    let rightImgs = document.querySelectorAll(".screenshots .rightImgs");
    //重新获取当前记录的四张图片
    let imgAll = JSON.parse(gameList[indexf].imgurls)
    for (let i = 0; i < rightImgs.length; i++) {
        rightImgs[i].onmouseover = function () {
            leftImg.style.backgroundImage = `url(${imgAll[i]})`
        }
    }
}, 3000)

axios({
    method: 'Get',
    url: '/gameModule',
    baseURL: 'http://steam.web:80/',
    params: {
        module: 'selectionAndRecommendation'
    }
}).then(res => {
    // console.log(res.data)
    // console.log(JSON.parse(res.data[0].imgurls));

    gameList = res.data;
    show(gameList[0]);

}).catch(err => {
    console.log(err)
})





axios({
    method: 'Get',
    url: '/gameModule',
    baseURL: 'http://steam.web:80/',
    params: {
        module: 'TodayRrecommendation'
    }
}).then(res => {
    // console.log(res.data)
    // console.log(JSON.parse(res.data[0].imgurls));
    gameList3 = res.data;
    showpart3(gameList3[0]);
    
}).catch(err => {
    console.log(err)
})
let gameList3 = [];
let appBox = document.querySelector(".box_newshops .box_app");
function showpart3(game) {
    let voteInfo = JSON.parse(game.userComments);
    let authorName = JSON.parse(game.userNickname)
    let description = JSON.parse(game.content).top;
    let userAvatar = JSON.parse(game.userAvatar);
    let price3 = JSON.parse(game.price)

    appBox.innerHTML = `
    <div class="left_img">
        <img src="${game.imgurls}" >
        <div class="box_price">
            <span class="percentage">${price3[0]}</span>
            <div class="price">
                <div class="pass">${price3[1]}</div>
                <div class="now">${price3[2]}</div>
            </div>
        </div>
    </div>
    <div class="right_col">
        <div class="box_review">
            <div class="description">"${description[0]}"</div>
            <div class="view_more">
                阅读整篇评测
            </div>
            <div class="author_block">
                <img src="${userAvatar[0]}" alt="">
                <div>
                    <div class="author_name">${authorName[0]}</div>
                    <div class="hours">${voteInfo.time[0]}</div>
                    <div class="vote_info">${voteInfo.count[0]}</div>
                </div>
            </div>
        </div>
        <div class="change-page">
            <div class="prev">&lt;</div>
            <div class="desc">${voteInfo.bot[0]}</div>
            <div class="next">&gt;</div>
        </div>
    </div>
    `
}

let todaylis = document.querySelectorAll('.today_thumbs li')
todaylis.forEach(todaylis => todaylis.addEventListener('click', todayClick))

// 监听li的点击事件
function todayClick(event) {
    // 全局游戏序号通过自定义属性来需改。
    index1 = this.dataset.index;
    showpart3(gameList3[index1])
    // 将所有li进行遍历，将此时唯一的带有focus类名的li中类名消除。
    console.log(this);
    Array.from(this.parentNode.children).every(todaylis => todaylis.className == 'focus' ? todaylis.className = '' : true)
    // 当前点击给予类名。
    this.className = "focus";
}

let index4 = 0;
// 设置定时器  图片自动轮播
setInterval(() => {
    todaylis[index4].style.backgroundColor = 'hsla(202, 60%, 100%, 0.2)';
    index4++;
    console.log(gameList3.length);//总共11条数据
    if (index4 == gameList3.length-1) {
        index4 = 0;
    }
    showpart3(gameList3[index4]);
    todaylis[index4].style.backgroundColor = 'hsla(202, 60%, 100%, 0.4)';
}, 1000)


let todayleftArrow = document.querySelector(".box_newshops .arrow_left");
let todayrightArrow = document.querySelector(".box_newshops .arrow_right");
todayleftArrow.onclick = function () {
    todaylis[index4].style.backgroundColor = 'hsla(202, 60%, 100%, 0.2)';
    index4--;
    if (index4 == -1) {
        index4 = 9;
    }
    showpart3(gameList3[index4]);
    try{
        todaylis[index4].style.backgroundColor = 'hsla(202, 60%, 100%, 0.4)';
    }catch{
        console.log(todaylis,index4)
    }
}

todayrightArrow.onclick = function () {
    todaylis[index4].style.backgroundColor = 'hsla(202, 60%, 100%, 0.2)';
    index4++;
    if (index4 == gameList3.length) {
        index4 = 0;
    }
    showpart3(gameList3[index4]);
    todaylis[index4].style.backgroundColor = 'hsla(202, 60%, 100%, 0.4)';
}

let prev = document.querySelector(".prev");
let next = document.querySelector(".box_app .change-page .next");
let rightCol = document.querySelector('.box_app .right_col');
let description = document.querySelector('.box_app .box_review .description')

console.log(prev,next,rightCol,description);

// prev.onclick = function(){
//     description.innerHTML = description[1];
// }

// next.onclick = function(){
//     // description.innerHTML = description[1];
//     console.log(1234567);
// }



