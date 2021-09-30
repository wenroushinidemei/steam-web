let params = {
    gameName: '',
};

// // 完成搜索功能，懒加载
// axios({
//     url:'/search',
//     baseURL:'http://steam.web:80/',
//     method:'get',
//     params:{
//         gameName:'',
//     }
// }).then(res=>{
//     console.log(res.data)
// }).catch(err=>{
//     console.log(err)
// });

(function () {
    // 添加事件
    document.querySelector(".searchMsg>.set_tab").onclick = function () {
        this.className = "set_tab_click"
        this.onmouseleave=()=>{
        this.className = "set_tab"

            this.onmouseleave = null
        }
    }
})();