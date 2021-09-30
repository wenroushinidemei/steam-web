let params= {
    gameName:'',
}

// 完成搜索功能，懒加载
axios({
    url:'/search',
    baseURL:'http://steam.web:80/',
    method:'get',
    params:{
        gameName:'',
    }
}).then(res=>{
    console.log(res.data)
}).catch(err=>{
    console.log(err)
})