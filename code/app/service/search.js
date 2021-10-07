const Service = require('egg').Service;
// 负责和数据库进行查询的service层模块
class SearchService extends Service {
    // 查询游戏时具有各种组合限制
    async game(config) {
        console.log(config)
        let list = await this.app.mysql.select('indexgame',{
            where: config
        })
        // let list = await this.app.mysql.query('SELECT * FROM indexgame WHERE gamename like "%?%";',)

        return list;
    }
}
module.exports = SearchService;