const Controller = require('egg').Controller;
// 负责向数据库获取游戏信息，返回给前端请求。
class GameController extends Controller{
    // 处理模块的游戏信息查询需求
    async selects(){
        const {ctx}= this;
        let res = await ctx.service.select.moduleGame(ctx.query.module);
        // 游戏数组
        ctx.body = res;
    }
    // 处理单独的游戏信息查询需求（id的方式）
    async select(){
        const {ctx}= this;
        // let res = await ctx.service.select.game(ctx.query.id);
        // 游戏对象
        // ctx.body = res;
        ctx.body=123
    }
    // 处理查询界面的查询请求
    async search(){
        const {ctx} = this;
        // 因为筛选条件变成游戏名和一些游戏相关信息，都通过这个方式查询。
        let list = await ctx.service.search.game(ctx.request.body);
        ctx.body = list;
    }
}

module.exports =GameController;