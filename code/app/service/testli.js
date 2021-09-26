const Service = require('egg').Service;
// 负责和数据库进行查询的service层模块
class TestService extends Service {
    // 查询模块内的游戏信息集合(注意数组)
    async all() {
        const list = await this.app.mysql.select('indexGame');
        console.log(list);
        return  list
    }
}
module.exports = TestService;