const Controller = require('egg').Controller;
// 负责向数据库获取游戏信息，返回给前端请求。
class GameController extends Controller{
    // 处理模块的游戏信息查询需求
    async selects(){
        const {ctx}= this.ctx;
        let res = await ctx.service.select.moduleGame(ctx.query.module);
        // 游戏数组
        ctx.body = res;
    }
    // 处理单独的游戏信息查询需求
    async select(){
        const {ctx}= this.ctx;
        let res = await ctx.service.select.game(ctx.query.id);
        // 游戏对象
        ctx.body = res;
    }
}

module.exports =GameController;