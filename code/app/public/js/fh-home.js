let carousel = document.querySelector(".carousel");
// console.log(carousel);


function show(game) {
    let imgs = JSON.parse(game.imgurls)

    // console.log(game);
    let price = JSON.parse(game.price)
    // console.log(price);

    carousel.innerHTML = `
    <div class="left" style="background-image: url(${imgs[1]})"></div>
    <div class="right">
        <div class="game_name">${game.gameName}</div>
        <div class="screenshots">
            <img src="${imgs[0]}">
            <img src="${imgs[1]}">
            <img src="${imgs[2]}">
            <img src="${imgs[3]}">
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

document.querySelectorAll('.carousel_thumbs li').forEach(li => li.addEventListener('click', carouselClick))
// 监听tip的点击事件
function carouselClick(event) {
    // 全局游戏序号通过自定义属性来需改。
    index = this.dataset.index;
    show(gameList[index])
    // 将所有li进行遍历，将此时唯一的带有focus类名的li中类名消除。
    Array.from(this.parentNode.children).every(li => li.className == 'focus' ? li.className = '' : true)
    // 当前点击给予类名。
    this.className = "focus"
}


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

    let gameList = JSON.parse(res.data)

    // for (let i = 0; i < res.data.length; i++) {

    //     show(res.data[i]);

    // }
    show(gameList[0]);



}).catch(err => {
    console.log(err)
})