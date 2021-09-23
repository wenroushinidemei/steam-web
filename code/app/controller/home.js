const Controller  = require('egg').Controller;

class HomeController extends Controller{
    async show(){
        console.log("有人向服务器根路由发出get请求")
        this.ctx.body="hi man"
    }
}

module.exports = HomeController;