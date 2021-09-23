const Service = require('egg').Service;
// 负责和数据库进行查询的service层模块
class SelectService extends Service{
    // 查询模块内的游戏信息集合(注意数组)
    async moduleGame(module){
        let list = await this.app.mysql.get('indexGameOne',{module:module})
        let list2 = await this.app.mysql.get('indexGameTwo',{module:module})
        return [list,list2];
    }
    // 查询模块单独的游戏信息(注意数组)
    async game(id){
        let res = await this.app.mysql.get('indexGameOne',{ id: id })
        let res2 = await this.app.mysql.get('indexGameTwo',{ id: id })
        return [res,res2];
    }
}
module.exports = SelectService;