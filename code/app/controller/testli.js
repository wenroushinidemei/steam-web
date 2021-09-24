const Controller = require('egg').Controller;
// 负责向数据库获取游戏信息，返回给前端请求。
class TestController extends Controller{
    // 处理模块的游戏信息查询需求
    async index(){
        const {ctx}= this.ctx;
        // let res = await ctx.service.testli.all();
        // 游戏数组
        ctx.body = res;
    }
}

module.exports =TestController;