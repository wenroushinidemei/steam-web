// 点击显示隐藏语言列表 
var lanuage = document.getElementById("lanuage");
var select = document.getElementsByClassName(".select");
lanuage.onclick = function () {
    console.log(1);
    event.preventDefault();
    var langlist = document.querySelector(".lanuage>.select");
    document.onclick = function () {
        if (event.target == lanuage) {
            if (langlist.classList[1] == "select-show") {
                langlist.classList.remove("select-show");
            }
            else {
                langlist.classList.add("select-show");
            }
        }
        else
            langlist.classList.remove("select-show");
    };
};
//登录提示
var flag = false;
var contentBox = document.querySelector(".content-lwx");
var flagContent = false;
var clos = document.querySelector(".close");
clos.onclick = function () {
    flagContent = !flagContent;
    contentBox.style.display = "none";
};
var account = document.getElementById("account");
var password = document.getElementById("password");
var btn = document.getElementById("btn-login");
btn.onclick = function () {
    if (account.value != '' && password.value != '') {
        // console.dir(account.value);
        // console.dir(password.value);
        axios({
            url: '/login',
            method: 'post',
            baseURL: 'http://steam.web:80/',
            data: {
                account: account.value,
                password: password.value
            },
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (res) {
            console.log(res);
            if (res.data.code != 600) {
                var tipbox = document.querySelector(".tipbox");
                console.log(tipbox.classList);
                tipbox.classList.add("tipbox-show");
                // document.cookie=`account=${account.value}`
            }
            else {
                flagContent = !flagContent;
                if (flagContent) {
                    contentBox.style.display = "block";
                }
            }
        })["catch"](function (err) {
            console.log(err);
        });
    }
    else {
        console.log('没写账户或密码！');
    }
};
