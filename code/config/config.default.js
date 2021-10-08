const config = {
    cluster: {
        listen: {
            port: 80,
            hostname: 'steam.web'
        }
    },
    // cors跨域资源共享配置
    cors: {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
    // 数据库配置
    mysql: {
        // 单数据库信息配置
        client: {
            // host -- localhost 或 数据库所在ip 或 host名 
            host: '192.168.31.186',
            // 端口号
            port: '3306',
            // 用户名 ---数据库的用户名
            user: 'root',
            // 密码  ---数据库密码
            password: '214648',
            // 数据库名
            database: 'steam',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    },
    // csrf安全检测配置
    security: {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
        domainWhiteList: ['*'],
    },
    keys:'adsfsghjkl'
}

module.exports = config