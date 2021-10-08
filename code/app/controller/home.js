const Controller  = require('egg').Controller;

class HomeController extends Controller{
    async show(){
        console.log("有人向服务器根路由发出get请求")
        // let  result = await this.app.mysql.get('indexGame',{module:'popularGoods'})
        // console.log(result)
        this.ctx.body="hi man"
    }
    async test(){
        let res = await this.ctx.service.testli.all();
        console.log(ctx.cookies.get('account', {
            signed: false,
          }));
        this.ctx.body = res;
    }
}

module.exports = HomeController;