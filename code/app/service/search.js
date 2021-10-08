const Service = require('egg').Service;
// 负责和数据库进行查询的service层模块
class SearchService extends Service {
    // 查询游戏时具有各种组合限制
    async game(config) {
        console.log(config)
        // 组装sql语句用于多个like查询。
        let sql = 'SELECT * FROM indexgame'
        if (JSON.stringify(config) !== '{}') {
            sql += ' WHERE '
            for (let key of Object.keys(config)) {
                console.log(key)
                sql += `${key} like "%${config[key]}%"`
            }
        }
        let list = await this.app.mysql.query(sql)
        return list;
    }
}
module.exports = SearchService;