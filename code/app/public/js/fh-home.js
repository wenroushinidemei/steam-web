let carouselItems = document.querySelector(".carousel_items");
console.log(carouselItems);


function show(game) {
    let imgs = JSON.parse(game.imgurls)
    carouselItems.innerHTML = `
    <div class="left">
        <div style="background-image: url(${imgs[0]})></div>
    </div>
    <div class="right">
        <div class="game_name">啦啦啦啦啦</div>
        <div class="screenshots">
            <img class="first" src="${imgs[0]}" />
            <img class="second" src="${imgs[1]}" />
            <img class="third" src="${imgs[2]}" />
            <img class="four" src="${imgs[3]}" />
        </div>
        <div class="reason">
            <h2 class="main_default">现已推出</h2>
            <h2 class="hotshop">热销商品</h2>
        </div>
        <div class="box_bottom">
            <div class="price">￥64.00</div>
            <img src="" class="pic_windows">
        </div>
    </div>
    `
}


axios({
    method: 'Get',
    url: '/gameModule',
    baseURL: 'http://steam.web:80/',
    params: {
        module: 'selectionAndRecommendation'
    }
}).then(res => {
    console.log(res.data)
    // console.log(JSON.parse(res.data[0].imgurls));
    for (let i = 0; i < res.data.length; i++) {
        show(res.data[i]);
        
    }
    
}).catch(err => {
    console.log(err)
})
