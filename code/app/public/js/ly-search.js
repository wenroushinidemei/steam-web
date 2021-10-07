let params = {
    // gameName: '',
};

let gamelist = [];
// 完成搜索功能，懒加载


(function () {
    let listBox = document.querySelector('.gameList')

    // 添加事件
    document.querySelector(".searchMsg>.set_tab").onclick = function () {
        this.className = "set_tab_click"
        this.onmouseleave = () => {
            this.className = "set_tab"
            this.onmouseleave = null
        }
    }
    let input = document.querySelector('#search_text');
    input.onfocus = function () {
        if (this.value == '输入搜索词或标签')
            this.value = ''
    }
    input.onblur = function () {
        if (this.value == '')
            this.value = '输入搜索词或标签'
    }
    let form = document.querySelector('.search_ly form');
    form.onsubmit = function () {
        console.log(event)
        event.preventDefault();
        params.gameName = input.value == '输入搜索词或标签' ? '' : input.value
        postGame(params)
    }

    // 请求封装，传入的是进行判断的条件。
    function postGame(params = {}) {
        axios({
            url: '/search',
            baseURL: 'http://steam.web:80/',
            method: 'post',
            data: params,
        }).then(res => {
            gamelist = res.data
            showlist(gamelist)
        }).catch(err => {
            console.log(err)
        });
    }
    // 首次，空条件数据
    postGame();



    // 绘制传入的游戏list
    function showlist(gamelist) {
        if (gamelist.length == 0)
            return false;
        document.querySelector('.searchMsg>div>span').innerHTML = `${gamelist.length} 个匹配的搜索结果。`
        let dom = ''
        let imgurls = [];
        let price = [];
        gamelist.forEach(game => {
            try {
                price = JSON.parse(game.price)
            } catch {
                price = [game.price]
            }
            if (price == null) {
                price = ['null'];
            }
            // console.log(price.length)
            try {
                imgurls = JSON.parse(game.imgurls)
            } catch {
                imgurls = [game.imgurls]
            }
            dom += `
            <a href="javascript:(0)">
            <div class="game_img" style="background-image: url(${imgurls[0]});"></div>
            <div class="game_name">
                <p>${game.gameName}</p>
                <p>🎁</p>
            </div>
            <div class="game_price">
            ${price[price.length - 1] == '免费' ? '免费游玩' : price[price.length - 1]}
                <!-- 折扣信息 -->
                <div class="discount">
                    <span>-50%</span>
                </div>
            </div>
            <div class="game_time">
                <span>2021 年 8 月 12 日</span>
                <!-- 评价图标 -->
                <span class="assess" style="background-image: url(../img/positive.png);"></span>
            </div>
        </a>
            `
        })
        listBox.innerHTML = dom;
    }





})();