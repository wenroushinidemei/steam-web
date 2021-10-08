let carousel = document.querySelector(".carousel");
let gameList = []
function show(game) {
    let price
    if (game.price[0] == '[') {
        price = JSON.parse(game.price);
    } else {
        price = game.price;
    }
    // game.imgurls[0]=='['?JSON.parse(game.imgurls)[0]:game.imgurls[0]
    carousel.innerHTML = `
    <div class="left leftImg" style="background-image: url(${JSON.parse(game.imgurls)[0]})" data-id="${game.id}" ></div>
    <div class="right">
        <div class="game_name">${game.gameName}</div>
        <div class="screenshots">
            <img class="rightImgs" src="${JSON.parse(game.imgurls)[0]}">
            <img class="rightImgs" src="${JSON.parse(game.imgurls)[1]}">
            <img class="rightImgs" src="${JSON.parse(game.imgurls)[2]}">
            <img class="rightImgs" src="${JSON.parse(game.imgurls)[3]}">
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
    // console.log(gameList[index1]);
    show(gameList[index1])
    // 将所有li进行遍历，将此时唯一的带有focus类名的li中类名消除。
    Array.from(this.parentNode.children).every(li => li.className == 'focus' ? li.className = '' : true)
    // 当前点击给予类名。
    this.className = "focus";
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
let indexf = 0;
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
    let imgAll
    if (gameList[indexf].imgurls[0] == '[') {
        imgAll = JSON.parse(gameList[indexf].imgurls)
    } else {
        imgAll = [gameList[indexf].imgurls]
    }
    for (let i = 0; i < rightImgs.length; i++) {
        rightImgs[i].onmouseover = function () {
            leftImg.style.backgroundImage = `url(${imgAll[i]})`
        }
    }

    //点击图片跳转页面(只能从第二张开始)
    let gameId = 0;
    let firstImg = document.querySelector('.carousel .leftImg');
    // console.log(firstImg);
    firstImg.addEventListener('click', jump);
   
    
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




//今日推荐
let gameList3 = [];
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
let appBox = document.querySelector(".box_newshops .box_app");

function showpart3(game) {
    let voteInfo = JSON.parse(game.userComments);
    let authorName = JSON.parse(game.userNickname)
    let description = JSON.parse(game.content).top;
    let userAvatar = JSON.parse(game.userAvatar);
    let price3 = JSON.parse(game.price)
    appBox.innerHTML = `
    <div class="left_img">
        <img src="${game.imgurls}" data-id="${game.id}">
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
    changeDesc(game);
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

    // console.log(gameList3.length);//总共11条数据

    if (index4 == gameList3.length - 1) {
        index4 = 0;
    }
    showpart3(gameList3[index4]);
    todaylis[index4].style.backgroundColor = 'hsla(202, 60%, 100%, 0.4)';

     //点击图片跳转页面(只能从第二张开始)
     let gameId = 0;
     let thirdImg = document.querySelector('.left_img img');
    //  console.log(thirdImg);
     thirdImg.addEventListener('click', jump);
}, 3000)

let todayleftArrow = document.querySelector(".box_newshops .arrow_left");
let todayrightArrow = document.querySelector(".box_newshops .arrow_right");
todayleftArrow.onclick = function () {
    todaylis[index4].style.backgroundColor = 'hsla(202, 60%, 100%, 0.2)';
    index4--;
    if (index4 == -1) {
        index4 = 9;
    }
    showpart3(gameList3[index4]);
    try {
        todaylis[index4].style.backgroundColor = 'hsla(202, 60%, 100%, 0.4)';
    } catch {
        console.log(todaylis, index4)
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

//点击切换评测
function changeDesc(game) {
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".box_app .change-page .next");
    // let rightCol = document.querySelector('.box_app .right_col');
    let description = document.querySelector('.box_app .box_review .description')
    let authorImg = document.querySelector('.author_block img');
    let authorName = document.querySelector('.author_block .author_name');
    let hours = document.querySelector('.author_block .hours');
    let voteInfo = document.querySelector('.author_block .vote_info');
    let desc = document.querySelector('.change-page .desc');
    // console.log(prev, next, rightCol, description);

    // let i = 0;
    prev.onclick = function () {
        let i = JSON.parse(game.content).top.length;
        i--;
        if (i == -1) {
            i = JSON.parse(game.content).top.length;
        }
        // console.log(game);
        // console.log(JSON.parse(game.userComments));
        description.innerHTML = JSON.parse(game.content).top[i];
        authorImg.innerHTML = JSON.parse(game.userAvatar)[i];
        authorName.innerHTML = JSON.parse(game.userNickname)[i];
        hours.innerHTML = JSON.parse(game.userComments).time[i];
        voteInfo.innerHTML = JSON.parse(game.userComments).count[i];
        desc.innerHTML = JSON.parse(game.userComments).bot[i];

    }

    next.onclick = function () {
        let i = 0;
        i++;
        if (i == JSON.parse(game.content).top.length) {
            i = 0;
        }
        description.innerHTML = JSON.parse(game.content).top[i];
        authorImg.innerHTML = JSON.parse(game.userAvatar)[i];
        authorName.innerHTML = JSON.parse(game.userNickname)[i];
        hours.innerHTML = JSON.parse(game.userComments).time[i];
        voteInfo.innerHTML = JSON.parse(game.userComments).count[i];
        desc.innerHTML = JSON.parse(game.userComments).bot[i];


    }
}




//特别优惠
let gameList4 = [];
axios({
    method: 'Get',
    url: '/gameModule',
    baseURL: 'http://steam.web:80/',
    params: {
        module: 'specialOffer'
    }
}).then(res => {
    // console.log(res.data)
    // console.log(JSON.parse(res.data[0].imgurls));

    gameList4 = res.data;
    showpart4([gameList4[0], gameList4[1], gameList4[2], gameList4[3]]);

}).catch(err => {
    console.log(err)
})
let specialFoucs = document.querySelector('.box_special .box_content .foucs');
function showpart4(game) {
    // console.log(game);
    // console.log(specialFoucs);
    // console.log(typeof game[2].time);//string

    specialFoucs.innerHTML = `
    <div class="left">
        <img src="${JSON.parse(game[0].imgurls)}" alt="" data-id="${game[0].id}" >
        <div class="spotlight_content">
            <h2>疯狂周三</h2>
            <div class="spotlight_time">${game[0].time}</div>
            <div class="spotlight_price">
                <div class="discount_pct">${JSON.parse(game[0].price)[0]}</div>
                <div class="discount_prices">
                    <div class="pass_price">${JSON.parse(game[0].price)[1]}</div>
                    <div class="now_price">${JSON.parse(game[0].price)[2]}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="middle">
        <img src="${JSON.parse(game[1].imgurls)}" alt="" data-id="${game[1].id}" >
        <div class="spotlight_content">
            <h2>疯狂周三</h2>
            <div class="spotlight_time">${game[1].time}</div>
            <div class="spotlight_price">
                <div class="discount_pct">${JSON.parse(game[1].price)[0]}</div>
                <div class="discount_prices">
                    <div class="pass_price">${JSON.parse(game[1].price)[1]}</div>
                    <div class="now_price">${JSON.parse(game[1].price)[2]}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="right">
        <div class="right_top">
            <img src="${JSON.parse(game[2].imgurls)}" alt="" data-id="${game[2].id}">
            <div class="dailydeal_desc">
                <div>今日特惠!</div>
                <div class="ttip">23:11:19</div>
            </div>
            <div class="right_spotlight_price">
                <div class="discount_pct">${JSON.parse(game[2].price)[0]}</div>
                <div class="discount_prices">
                    <div class="pass_price">${JSON.parse(game[2].price)[1]}</div>
                    <div class="now_price">${JSON.parse(game[2].price)[2]}</div>
                </div>
            </div>
        </div>
        <div class="right_buttom">
            <img src="${JSON.parse(game[3].imgurls)}" alt="" data-id="${game[3].id}">
            <div class="dailydeal_desc">
                <div>今日特惠!</div>
                <div class="ttip">23:23:23</div>
            </div>
            <div class="right_spotlight_price">
                <div class="discount_pct">${JSON.parse(game[3].price)[0]}</div>
                <div class="discount_prices">
                    <div class="pass_price">${JSON.parse(game[3].price)[1]}</div>
                    <div class="now_price">${JSON.parse(game[3].price)[2]}</div>
                </div>
            </div>
        </div>
    </div>
    `
}
let index5 = 0;
let speciallis = document.querySelectorAll('.special_thumbs li')
speciallis.forEach(speciallis => speciallis.addEventListener('click', specialClick))

setInterval(() => {
    speciallis[index5].style.backgroundColor = 'hsla(202, 60%, 100%, 0.2)';
    index5+=4;

    if (index5 == gameList4.length - 1) {
        index5 = 0;
    }
    showpart4([gameList4[index5],gameList4[index5+1],gameList4[index5+2],gameList4[index5+3]]);
    speciallis[index5].style.backgroundColor = 'hsla(202, 60%, 100%, 0.4)';

     //点击图片跳转页面(只能从第二张开始)
     let gameId = 0;
     let secondImg1 = document.querySelector('.left img');
     let secondImg2 = document.querySelector(".middle img");
     let secondImg3 = document.querySelector('.right .right_buttom img');
     let secondImg4 = document.querySelector('.right .right_buttom img')
     console.log(secondImg1,secondImg2,secondImg3,secondImg4);
     secondImg1.addEventListener('click', jump);
    
}, 3000)

// 监听li的点击事件
function specialClick(event) {
    // 全局游戏序号通过自定义属性来需改。
    index5 = this.dataset.index;
    showpart4(gameList4[index1])
    // 将所有li进行遍历，将此时唯一的带有focus类名的li中类名消除。
    // console.log(this);
    Array.from(this.parentNode.children).every(speciallis => speciallis.className == 'focus' ? speciallis.className = '' : true)
    // 当前点击给予类名。
    this.className = "focus";
}




//跳转页面函数
function jump(event) {
    // console.log(this);
    console.log(12343567);
    // gameId = this.dataset.id;
    // console.log(gameId);
    // location.href = `http://192.168.6.14:80/public/page/game.html?id=${gameId}`;

}