const Service = require('egg').Service;
// 负责和数据库进行查询的service层模块
class SelectService extends Service {
    // 查询模块内的游戏信息集合(注意数组)
    async moduleGame(module) {
        // let list = await this.app.mysql.get('indexgame', { module: module })
        let list = await this.app.mysql.select('indexgame',{
            where: { module: module }
        })
        return list;
    }
    // 查询模块单独的游戏信息(注意数组)
    async game(id) {
        let res = await this.app.mysql.get('indexgame', { id: id })
        return res;
    }
    // 查询用户是否注册
    async user(account,password) {
        // 是否注册
        let user = await this.app.mysql.get('user', { account: account })
        // 用户未注册
        if(!user){
            return null;
        }
        // 是否密码正确
        // let pwd_user = await this.app.mysql.get('user', { id: user.xxx })
        if(password==user.password){
            return true;
        }else{
            return false;
        }
    }
}
module.exports = SelectService;