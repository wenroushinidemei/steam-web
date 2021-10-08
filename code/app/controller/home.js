const Controller  = require('egg').Controller;

class HomeController extends Controller{
    async show(){
        console.log("有人向服务器根路由发出get请求")
<<<<<<< HEAD
        this.ctx.body="hi man"
       
        let  result = await this.app.mysql.get('indexGame',{module:'popularGoods'})
         console.log(result)
               
           
=======
        this.ctx.body="hi man";

        let  rewsult = await this.app.mysql.get('indexGame',{model:a})
        console.log(rewsult);

        
>>>>>>> 479b07ddc18c02d23fcf383f6deec6d1d3cc6f39
    }
    async test(){
        let res = await this.ctx.service.testli.all();
        this.ctx.body = res;
    }
}

module.exports = HomeController;