const Controller = require('egg').Controller;
// 负责登录验证。
class LoginController extends Controller {
    async test() {
        let res = await this.ctx.service.testli.all();
        this.ctx.body = res;
    }
    // 正常登录
    async login() {
        const { ctx } = this;
        console.log(ctx.request.body.account, ctx.request.body.password)
        let res = await ctx.service.select.user(ctx.request.body.account, ctx.request.body.password);
        if (res == null) {
            // 未注册
            ctx.body = {
                code: 602,
            };
        } else if (res) {
            // 返回登录成功信息,并将信息在客户端持久化，禁止修改（待加密处理）
            // ctx.cookies.set('account', ctx.request.body.account, {
            //     maxAge: 100000,
            //     path:'/',
            //     httpOnly: false,
            //     signed: false,
            //     encrypt: false,
            //     // domain: 'steam.web',
            // });
            // ctx.cookies.set('password', ctx.request.body.password, {
            //     maxAge: 100000,
            //     path:'/',
            //     httpOnly: false,
            //     signed: false,
            //     encrypt: false,
            //     // domain: 'steam.web',
            //     domain: '192.168.6.14:80'
            // });
            res.cookies = {
                account:ctx.request.body.account,
                password:ctx.request.body.password
            }
            ctx.body = {
                code: 600,
                msg: res,
            };
        } else {
            // 账号或密码错误
            this.ctx.body = {
                'code': 601,
                'msg': res,
            };
        }
    }
}

module.exports = LoginController;