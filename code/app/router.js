module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.show);
    // 用户登录请求
    router.get('/login', controller.login.login);
    // 不管具体部分，直接请求，携带上对的键名就能得到对应信息。
    // 从数据库查询模块中的游戏信息集合
    router.get('/gameModule', controller.game.selects);
    // 从数据库查询单个游戏信息
    router.get('/game', controller.game.select);

    router.get('/test', controller.home.test);
}