const Controller = require('egg').Controller;
// 负责登录验证。
class LoginController extends Controller {
    // 正常登录
    async login() {
        const { ctx } = this.ctx;
        let res = await ctx.service.select.user(ctx.query.account,ctx.query.password);
        if (res == null) {
            // 未注册
            ctx.body = {
                code: 602,
                msg: res,
            };
        } else if (res) {
            // 返回登录成功信息
            ctx.body = {
                code: 600,
                msg: res,
            };
        } else {
            // 账号或密码错误
            ctx.body = {
                code: 601,
                msg: res,
            };
        }
    }
    
}

module.exports = LoginController;