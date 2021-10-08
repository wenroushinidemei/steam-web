// 点击显示隐藏语言列表 
let lanuage:HTMLElement = document.getElementById("lanuage");
let select:HTMLCollectionOf<Element> = document.getElementsByClassName(".select");
lanuage.onclick = function ():void {
    console.log(1)
    event.preventDefault()
    let langlist:Element = document.querySelector(".lanuage>.select")
    document.onclick = function ():void {
        if (event.target == lanuage) {
            if (langlist.classList[1] == "select-show") {
                langlist.classList.remove("select-show")
            } else {
                langlist.classList.add("select-show")
            }
        } else
            langlist.classList.remove("select-show")
    }
}
//登录提示
let flag:boolean = false;

let contentBox:Element = document.querySelector(".content-lwx");
let flagContent:boolean= false;
let clos:Element = document.querySelector(".close");
clos.onclick =():void=> {
    flagContent = !flagContent;
    contentBox.style.display = "none";
}


let account:HTMLElement = document.getElementById("account");
let password:HTMLElement = document.getElementById("password");
let btn:HTMLElement = document.getElementById("btn-login");
btn.onclick = function ():void {
    if (account.value != '' && password.value != '') {
        // console.dir(account.value);
        // console.dir(password.value);
        axios({ //单个字符串必须是url绝对地址，否则就是请求参数的对象。
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
        }).then(res => {
            console.log(res)
            if (res.data.code != 600) {
                let tipbox:Element = document.querySelector(".tipbox")
                console.log(tipbox.classList)
                tipbox.classList.add("tipbox-show")
                // document.cookie=`account=${account.value}`
            } else {
                flagContent = !flagContent;
                if (flagContent) {
                    contentBox.style.display = "block";
                }
            }
        }).catch(err => {
            console.log(err);
        })
    } else {
        console.log('没写账户或密码！')
    }
}