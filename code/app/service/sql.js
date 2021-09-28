const Service = require('egg').Service

class SqlService extends Service {
    //1
    // 'https://media.st.dl.pinyuncloud.com/steam/apps/730/ss_d196d945c6170e9cadaf67a6dea675bd5fa7a046.600x338.jpg',
    // 'https://media.st.dl.pinyuncloud.com/steam/apps/730/ss_2b9e362287b509bb3864fa7bad654fe1fda0f7ed.600x338.jpg',
    // 'https://media.st.dl.pinyuncloud.com/steam/apps/730/ss_118cb022b9a43f70d2e5a2df7427f29088b6b191.600x338.jpg',
    // 'https://media.st.dl.pinyuncloud.com/steam/apps/730/ss_8c9cce9a9dde7b9c020837dcbd4615efe6f77d66.600x338.jpg',  
    // let gameName = 'CS:GO Riptide';
    // let state = '现已推出';
    // let price = '免费';

    //2
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/771300/ss_a39f019c1620b1d173967ac8c7f5d9c9cb445a00.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/271590/ss_1487c2c7ddd9a1ae6b55f7e50d5d63ada6915921.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/771300/ss_b6029ebf7f934c995179e91d37c911d04d875704.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/271590/ss_e929649b2b98ad76795d92d8489470bc5dbffddb.600x338.jpg',
    // ]
    // let gameName = 'Grand Theft Auto V：豪华版';
    // let state = '现已推出';
    // let price = '¥ 58.46';
    //3
    //     let img = [
    //         'https://media.st.dl.pinyuncloud.com/steam/apps/413420/ss_981ffc83d3679799be78315cf98b133df11e94ec.600x338.jpg',
    //         'https://media.st.dl.pinyuncloud.com/steam/apps/567640/ss_9bc7644e4aa89a36eda2d50d18da94be9fcb1e32.600x338.jpg',
    //         'https://media.st.dl.pinyuncloud.com/steam/apps/413410/ss_3111fac0ca3749fd394ac7b4a6b1fd2fbeb1f0a3.600x338.jpg',
    //         'https://media.st.dl.pinyuncloud.com/steam/apps/413420/ss_cffb6efcf228987f59e7a728fbe0c5bbbd15591e.600x338.jpg',

    //    ]
    // let gameName = 'Danganronpa 1/2/V3';
    // let state = '现已推出';
    // let price = ['-25%','-75%','¥ 336.00','¥ 85.68'];
    //4
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/578080/ss_de28db240ee8646b1dd883a141b4832271a150e7.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/578080/ss_11e51d12d854712ed7c83e69f1b21d246ab018b3.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/578080/ss_c49417566f70eec8bf0ddbb2956b235d91504a09.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/578080/ss_abadb3bfc951cd05150901ff65386e3129c6011a.600x338.jpg',
    //    ]
    // let gameName = 'PUBG: BATTLEGROUNDS';
    // let state = '现已推出';
    // let price = '¥ 98.00';
    //5
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1222680/ss_720840b2cb26c38d0e4ad32085afb5f46b2bb6c6.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1222680/ss_4127c58a6a10124b4ba28375ec937a977aba37fc.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1222680/ss_1f752c037d7cbab2e1658f36d5c76d11e91e4fec.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1222680/ss_4127c58a6a10124b4ba28375ec937a977aba37fc.600x338.jpg',
    // ]
    // let gameName = '《Need for Speed™ Heat';
    // let state = '现已推出';
    // let price = ['-86%','¥ 288.00','¥ 40.32'];
    //6
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1644960/ss_e019ab65ce02ddf9fa7d9f3eef18fd7e70c01171.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1644960/ss_d0ce716c24b5d4ebe318512138b1e0f8445e7683.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1644960/ss_c33826ad63621440fc6384e89dcbbca28f84f125.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1644960/ss_54cf4ed3eeedb9bd496717af00574957e3d4cfe5.600x338.jpg'
    // ]
    // let gameName = 'NBA 2K22';
    // let state = '现已推出';
    // let price = '¥ 199.00';
    //7
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1426210/ss_fdac523e3ea4d2f32a44449bb8c224857563bd7d.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1426210/ss_3e59753eefaba9a7704a18e902b48e8d38e95e0b.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1426210/ss_6e987a0678b013bfd0073a9ac4703e1f04ca4dea.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1426210/ss_4a62bc8fa398fc5b2094a6225dc5ecff9485f824.600x338.jpg',

    // ]
    //8
    // let gameName = '双人成行';
    // let state = '现已推出';
    // let price = '¥ 198.00';
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1097150/ss_842550ceda20f2a8af6427ca9dc6eee1295954d4.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1097150/ss_242e6f5aa36e166864002ed976ed0293dfe49011.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1097150/ss_0a473faac9e9e998e70da2cef144c65103e75257.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1097150/ss_16ede24dcde0913541c82dd406fa9cf660dd1f06.600x338.jpg',
    //  ]
    //  let gameName = '糖豆人：终极淘汰赛';
    //  let state = '现已推出';
    //  let price = ['-50%','¥ 58.00','¥ 29.00'];
    //9
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1097150/ss_16ede24dcde0913541c82dd406fa9cf660dd1f06.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1293830/ss_d2046bdb2f6acdf9b88c3c168e9eaec38495f063.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1293830/ss_e872c3153b246b4f595d7106976c6e63d4185c45.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1293830/ss_e88792a0331f460d913ac05203f7c1b12112b14c.600x338.jpg',

    // ]
    //10
    // let gameName = '极限竞速：地平线 4';
    // let state = '现已推出';
    // let price = ['¥ 188.00', '¥ 94.00'];
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1222140/ss_9c900def2b1d9a003b7d3e202ea2a7556a36e081.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1222140/ss_b1e2a185bea13cccfc662e1286912bcd6f4ee798.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1222140/ss_9e6c271b6d11b1d0f35da336fb57b35fed0079d1.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1222140/ss_fbc13a0d5b5b784c053042eb4ea09a30de069b3a.600x338.jpg',

    //  ]
    //  let gameName = '底特律：化身为人';
    //  let state = '现已推出';
    //  let price = ['-50%', '¥ 128.00','¥ 64.00'];
    //
    //11
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/594570/ss_bc3c20d9ff976a7c21896176b8a6a024b4314162.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/594570/ss_25005f9028374d9e65149cea78be864968c0a1dc.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/594570/ss_48c4d7b7c0ae11978b6f29fe58c3006802ee9651.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/594570/ss_3e3316d3846e2c3b4ce352291200a457f9317471.600x338.jpg',
    // ]
    // let gameName = 'Total War: WARHAMMER II';
    // let state = 'Mortal Empires Update Now Available';
    // let price = ['-66%', '¥ 268.00', '¥ 91.12'];
    //12
    //     let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/413420/ss_981ffc83d3679799be78315cf98b133df11e94ec.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1203220/ss_ca5451eff8bb830fa8db1ed19d8cf9a8a0d77a71.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1203220/ss_86dd1d7c3da6c3f7613cb75d56ecef2487b4d5a3.600x338.jpg',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1203220/ss_06b5f6c1f31c3519e51a45f9101da47e161e40c0.600x338.jpg',
    // ]
    // let gameName = '永劫无间';
    // let state = '现已推出';
    // let price = '￥ 98.00';

    //specialOffer
    //1第一部分
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/spotlights/26395560545494e397b37975/spotlight_image_english.jpg?t=1632262599',

    // ]
    // let preferential = '周末特惠';
    // let time = '优惠截止时间：9 月 28 日 上午 1:00';
    // let price = ['-25%','¥ 118.00','¥ 88.50'];
    //let model = 'specialOffer'
    //2
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/spotlights/5f4a6106d822fb57f1c8142e/spotlight_image_english.jpg',
    // ]
    // let preferential = '周末特惠';
    // let time = '优惠截止时间：9 月 28 日 上午 1:00';
    // let price = ['-50%','¥ 188.00','¥ 94.00'];
    //let model = 'specialOffer'
    //3
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/563840/header.jpg',
    // ]

    // let preferential = '今日特惠！';
    // let time = "times.getHours()+':'+times.getMinutes()+':'+times.getSeconds()";
    // let price = ['-71%','¥ 78.00','¥ 23.00'];;
    // let model = 'specialOffer'
    //4
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/473950/header.jpg',
    // ]

    // let preferential = '今日特惠！';
    // let time = "times.getHours()+':'+times.getMinutes()+':'+times.getSeconds()";
    // let price = ['-40%','¥ 70.00','¥ 42.00'];
    //let model = 'specialOffer'

    //第二部分
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/spotlights/966555d736ddd969570f212d/spotlight_image_english.jpg',
    // ]

    // let preferential = '周末特惠！';
    // let time = "优惠截止时间：9 月 28 日 上午 1:00";
    // let price = ['-30%','¥ 116.00','¥ 81.00'];
    // let model = 'specialOffer'
    //7
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/spotlights/adb0590ca9dd27de00bafd77/spotlight_image_schinese.jpg',
    // ]

    // let preferential = '周末特惠！';
    // let time = "";
    // let price = [''];
    // let model = 'specialOffer'
    //8
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/spotlights/bb43a8d752c99691c9458ae3/spotlight_image_schinese.jpg',
    // ]
    // let preferential = '周末特惠！';
    // let time = " 优惠截止时间：10 月 5 日 上午 1:00";
    // let price = ['-40%','¥ 349.00','¥ 209.00'];
    // let model = 'specialOffer'


    //第三部分
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/spotlights/509bbe504c934e1b9e4cf4e0/spotlight_image_schinese.jpg',
    // ]

    // let preferential = '发行商周末！';
    // let time = "";
    // let price = ['最高可省 -90%'];
    // let model = 'specialOffer'
    //
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1222680/header.jpg',
    // ]

    // let preferential = '';
    // let time = "";
    // let price = ['-86%','¥ 288.00','¥ 40.32'];
    // let model = 'specialOffer'
    //
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1097150/header.jpg',
    // ]
    // let preferential = '';
    // let time = "";
    //  let price = ['-50%','¥ 58.00','¥ 29.00'];
    // let model = 'specialOffer'
    //
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1222140/header_schinese.jpg',
    // ]
    // let preferential = '';
    // let time = "";
    // let price = ['-50%', '¥ 188.00', '¥ 94.00'];
    // let model = 'specialOffer'
    //
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/594570/header.jpg',
    // ]
    // let preferential = '';
    // let time = "";
    // let price = ['-66%%', '¥ 268.00', '¥ 91.12'];
    // let model = 'specialOffer'
    //第四部分
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1325200/header.jpg',
    // ]
    // let preferential = '';
    // let time = "";
    // let price = ['-20%','¥ 249.00','¥ 199.00'];
    // let model = 'specialOffer'
    //
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/364360/header.jpg',
    // ]
    // let preferential = '';
    // let time = "";
    // let price = ['-75%','¥ 268.00','¥ 67.00'];
    // let model = 'specialOffer'
    //
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/567640/header.jpg',
    // ]
    // let preferential = '';
    // let time = "";
    // let price = ['-66%','¥ 200.00','¥¥ 68.00'];
    // let model = 'specialOffer'
    //
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/subs/510898/header_ratio_schinese.jpg',
    // ]
    // let preferential = '';
    // let time = "";
    // let price = ['-40%','¥ 429.00','¥ 257.00'];
    // let model = 'specialOffer'
    //
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/563840/header.jpg',
    // ]
    // let preferential = '';
    // let time = "";
    // let price = ['-71%','¥ 78.00','¥ 23.00'];
    // let model = 'specialOffer'

    //newProducts
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1685720/header_292x136.jpg?t=1629970549',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1549970/header_292x136.jpg?t=1630265413',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1203220/header_292x136.jpg?t=1632317911',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1685721/header_292x136.jpg?t=1628686897'
    // ]
    // let preferential = '';
    // let time = "";
    // let price = ['¥ 22.00','¥ 158.00','¥ 98.00','¥ 22.00'];
    // let model = 'newProducts'
    //
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1003590/header_292x136.jpg?t=1629881521',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1623660/header_292x136.jpg?t=1631635284',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1135300/header_292x136.jpg?t=1632394987',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1466640/header_292x136.jpg?t=1631549729'
    // ]
    // let preferential = '';
    // let time = "";
    // let price = ['¥ 166.00','¥ 158.00','免费开玩','¥ 69.96.00'];
    // let model = 'newProducts'
    // let img = [
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1097200/header_292x136.jpg?t=1629747305',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1541840/header_292x136_schinese.jpg?t=1632283807',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1123050/header_292x136.jpg?t=1631642988',
    //     'https://media.st.dl.pinyuncloud.com/steam/apps/1489630/header_292x136.jpg?t=1629526922'
    // ]
    // let preferential = '';
    // let time = "";
    // let price = ['¥ 84.00','¥ 158.00',['-20%','¥ 85.00','68.00'],'¥ 138.00'];
    // let model = 'newProducts'
    //

    //TodayRrecommendation
    //第一部分
    //let img = 'https://media.st.dl.pinyuncloud.com/steam/apps/1426210/capsule_sm_120.jpg';
    //     let content ={
    //         top:['建议找个女孩子一起玩，最好是女朋友。哈哈哈，就算不是，游戏结束之前，也能成为女朋友','"好玩的游戏是：和男朋友一起玩，即使在进度一半时分手了，仍然想以朋友的身份合作通关这个游戏 游戏中May和Cody的感情逐渐修复 游戏外我们的关系也完成了转变 这是我玩过的最棒的游戏！"'],
    //         bot:['阅读整篇评测','阅读整篇评测'],
    //     };
    //  let userAvatar = ['https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/4d/4df427233ef7bb946bfb7a72b55ecf593c3153b8.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/8e/8e63a0b82dbaf43aeaed22763b3fd2e7c9015106.jpg'];
    //  let userNickname =['mamazidaren','ChunyuSama'];
    //  let userComments ={
    //                     time:['评测时已游玩 28.0 小时','评测时已游玩 20.9 小时'],
    //                     count:['有 7 人觉得这篇评测有价值','有 3 人觉得这篇评测有价值'],
    //                     bot:['2 篇评测之 1','2 篇评测之 2']
    //                 }
    //第二部分
    // let img = 'https://media.st.dl.pinyuncloud.com/steam/apps/699130/capsule_sm_120.jpg';
    // let content ={
    //     top:['"先吐槽点和游戏玩法无关的东西。 这回登陆Steam的《僵尸世界大战：劫后余生》如果你已经在EPIC买过或者白嫖过的话，那么本作我觉得买的必要其实不大。 新增加的内容有两章新的地图和第一人称视角，至于其他新增的职业或者鼠群特感，在原版上都可以体验到。..."','丧尸兄弟们，食堂开饭了 《僵尸世界大战》是根据2013年同名电影《僵尸世界大战》所改编的一款生存恐怖类射击冒险游戏，早于2019年在PS4、XboxOne以及Epic平台上发售，时隔两年终于等于了steam。 此次登陆steam的版本为最新的劫后余生，相较于原版，支'],
    //     bot:['阅读整篇评测','阅读整篇评测'],
    // };
    // let userAvatar = ['https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/df/df31b75b28c41110c8d4b361546c21e0b1efac44.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/34/34dd493823107654824a07ae2b60fe43304e65ca.jpg'];
    // let userNickname =['Mr.Lucky Pants','moupflouer&'];
    // let userComments ={
    //                 time:['评测时已游玩 11.7 小时','评测时已游玩 3.1 小时'],
    //                 count:['有 9 人觉得这篇评测有价值','有 4 人觉得这篇评测有价值'],
    //                 bot:['2 篇评测之 1','2 篇评测之 2']
    //             }
    //第三部分
    // let img = 'https://media.st.dl.pinyuncloud.com/steam/apps/1641450/capsule_sm_120_schinese.jpg';
    // let content ={
    //     top:['"让人上头的“动作”游戏..."','"支持国产游戏，内容挺好玩还挺上头，就是内容有点短，肝了一天通关了"'],
    //     bot:['阅读整篇评测','阅读整篇评测'],
    // };
    // let userAvatar = ['https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/98/982fad5e7cebc1ce8aa8f291fc30e9fc8bce4fa9.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/2c/2c7e9535152dfbcc49b3c36af40a21f4b7fb904a.jpg'];
    // let userNickname =['Kamiriya','玄玄'];
    // let userComments ={
    //                 time:['评测时已游玩 13.9 小时','评测时已游玩 3.3 小时'],
    //                 count:['有 28 人觉得这篇评测有价值','有 1 人觉得这篇评测有价值'],
    //                 bot:['2 篇评测之 1','2 篇评测之 2']
    //             }
    //第四部分
    // let img = 'https://media.st.dl.pinyuncloud.com/steam/apps/567640/capsule_sm_120.jpg';
    // let content ={
    //     top:['"推理的热潮，头脑的风暴 弹丸论破现在已经出了4部游戏，对于这么晚才正式接触此游戏的我来说，真的是一种惊喜。经历了25小时的奋战，总算是达成了一周目，在这个冗长的过程之中，着实的收益不少。游戏虽然讲述的是学院内自相残杀的故事，但深入看却是从人','"游戏很好但是游戏指示都是按照手柄来的对键盘玩家真的很不友好：（"'],
    //     bot:['阅读整篇评测','阅读整篇评测'],
    // };
    // let userAvatar = ['https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/98/982fad5e7cebc1ce8aa8f291fc30e9fc8bce4fa9.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/6d/6d1d7699c42066a3d5143ef94fef3e7d0438c57c.jpg'];
    // let userNickname =['Kamiriya','电脑玩家卡莎儿'];
    // let userComments ={
    //                 time:['评测时已游玩 25.4 小时','评测时已游玩 7.0 小时'],
    //                 count:['有 35 人觉得这篇评测有价值','有 3 人觉得这篇评测有价值'],
    //                 bot:['2 篇评测之 1','2 篇评测之 2']
    //             }
    //第五部分
    // let img = 'https://media.st.dl.pinyuncloud.com/steam/apps/1210320/capsule_sm_120.jpg';
    // let content ={
    //     top:['"我淦，玩到8小时才发现，可以通过配方书直接调药剂，之前一直纯手撸"','"没想到还挺肝的，不过挺有意思的，种植草药的功能希望早点更新出来，前期是真的很缺草药和蘑菇。"','"喜欢炼药、魔法题材的人一定能从中获得极好的沉浸式体验，且不说这个炼药过程可视化的创意点，在自定义方面我认为做得很棒。体验过demo版的我宛如《开挂药师的奇幻世界悠闲生活》里的主角，了解各种药水所在的位置，深谙快速发展的秘诀，熟练地与各色人物讨','"我觉得主角多少有点问题，我都快玩破产了，他还有心情撩妹，我服了"','"我比较期待的就是能复原哈利波特影视里的魔法药制作过程以及制作的物品器械书架书籍什么的各种分类"','"魔药本是一件很复杂的事情，太硬核又容易失去探索的乐趣 上次给我留下印象最深的是天国拯救里的硬核制药 而这款游戏则做的很有创意（探索收集向玩家狂喜 除了知道矿石可以用来穿墙，地图上的旋涡其实也是有作用的，靠近以后颜色变深代表激活了旋涡效果，此时鼓风'],
    //     bot:['阅读整篇评测','阅读整篇评测','阅读整篇评测','阅读整篇评测','阅读整篇评测','阅读整篇评测'],
    // };
    // let userAvatar = ['https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/75/752eb38c3b0bc6f74708ec2c3d44d00bda41edde.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/39/39fe6e41f5bef0a4927e97322afbb358f8cf831a.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/e8/e8c7139c813869bf238fa2edf026dae7e20cd529.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/25/258744dba3593c6bc1b2ceb3c67fc106b3301c69.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/5f/5fd92902adef96a45519b879e05ef07b7624c38d.jpg'];
    // let userNickname =['ghost','三色三步高','深海气体','炒鸡冒','塞拉斯蒂亚.龙丽斯','BRlight'];
    // let userComments ={
    //                 time:['评测时已游玩 8.9 小时','评测时已游玩 12.4 小时','评测时已游玩 25.9 小时','评测时已游玩 3.1小时','评测时已游玩 10.1 小时','评测时已游玩 9.7 小时'],
    //                 count:['有 16 人觉得这篇评测有价值','有 4 人觉得这篇评测有价值','有 5 人觉得这篇评测有价值','有 4 人觉得这篇评测有价值','有 3 人觉得这篇评测有价值','有 1 人觉得这篇评测有价值'],
    //                 bot:['6 篇评测之 1','6 篇评测之 2','6 篇评测之 3','6 篇评测之 4','6 篇评测之 5','6 篇评测之 6']
    //             }
    //第六部分
    //   let img = 'https://media.st.dl.pinyuncloud.com/steam/apps/1174180/capsule_sm_120.jpg';
    // let content ={
    //     top:['"这不简单是一款游戏，而是件华丽的游戏艺术品"','"I love this very much."','"细节满满，玩这款游戏不能急，把它当成一种生活。线上模式比较肝，但大多数玩家都是比较友好"'],
    //     bot:['阅读整篇评测','阅读整篇评测','阅读整篇评测'],
    // };
    // let userAvatar = ['https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/4f/4f880f3fec62e026adbe16cb2b2fe121013f4df1.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/95/950f9f3147d4c8530a5072825d01c34ee3f1afa1.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/64/64bbb4ab1e8312f6653eb97de044510729a1055b.jpg'];
    // let userNickname =['Lil Pasha','Sax Ripper','红烧狮子头'];
    // let userComments ={
    //                 time:['评测时已游玩 8.9 小时','评测时已游玩 12.4 小时','评测时已游玩 24.0小时'],
    //                 count:['有 16 人觉得这篇评测有价值','有 4 人觉得这篇评测有价值','有 1 人觉得这篇评测有价值'],
    //                 bot:['3 篇评测之 1','3 篇评测之 2','3 篇评测之 3']
    //             }
    //第七部分
    // let content ={
    //     top:['"=======大小======= ✓百兆小游戏 ☐ 1-5 G ☐ 5-10 G ☐ 10-20 G ☐20-30 G ☐ 30-50 G ☐ 50-100 G ☐ 100-200 G ☐ GMOD =======图像======= ☐ 像素党秒天秒地！ ☐ 无法和现实区分 ☐ 赏心悦目 ☐ 很美丽 ✓ 一般 ☐ 不怎么样 ☐ 别盯着看太久 ☐ 画图.exe','"I love this very much."','"确实很有意思，就是一群傻逼，你他妈不玩就别进啊，别你妈玩到一半退出去行吗"'],
    //     bot:['阅读整篇评测','阅读整篇评测'],
    // };
    // let userAvatar = ['https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/d1/d1ccffe219ba0414cbcffa2633a7eccff972e284.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/35/35eb986ddec52be02c02300665ccebfaa534171a.jpg'];
    // let userNickname =['外卖小鸽','大鼻嘎'];
    // let userComments ={
    //                 time:['评测时已游玩 26.0 小时','评测时已游玩 5.2 小时'],
    //                 count:['有 2 人觉得这篇评测有价值','有 2 人觉得这篇评测有价值'],
    //                 bot:['2 篇评测之 1','2 篇评测之 2']
    //             }
    //第八部分
    // let img = 'https://media.st.dl.pinyuncloud.com/steam/apps/1325200/capsule_sm_120.jpg';
    // let content ={
    //     top:['"舍友给我口了两个学期，我才答应他买来玩玩"','"一切故事都要从epic送仁王1开始说起，当我知道仁王可以联机的时候毫不犹豫地拉上好兄弟一起愉快的play，游戏刚开始很难但是我们很开心，免费的毕竟都是香的，我们一边嫖着e宝一边又给g胖递钱活脱脱的渣男。后来仁王通关了我还想肝二三周目的时候迎来了我的生'],
    //     bot:['阅读整篇评测','阅读整篇评测'],
    // };
    // let userAvatar = ['https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/79/79d3fe5839617eb83a9661071ed021dd56ac8a5b.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/09/09cb76e3412d3d4fc2553937a6d3caa4952bb01f.jpg'];
    // let userNickname =['浪酒灬闲茶','可与语人无二三'];
    // let userComments ={
    //                 time:['评测时已游玩 24.3 小时','评测时已游玩 29.7 小时'],
    //                 count:['有 3 人觉得这篇评测有价值','有 2 人觉得这篇评测有价值'],
    //                 bot:['2 篇评测之 1','2 篇评测之 2']
    //             }
    //第九部分
    // let img = 'https://media.st.dl.pinyuncloud.com/steam/apps/594570/capsule_sm_120.jpg';
    // let content ={
    //     top:['"游戏时间快900小时没摸过帝国的我忠诚吗"','"“全面战争”这个系列算是开发商CA的一大知名品牌。从“幕府”到“中世纪”、从 “三国”到“战锤”，CA以“全面战争”这类游戏形式开发了各种不同时代背景下的回合制战略+即时战术指挥类的游戏。 而《全战：战锤2》在全战系列中有着其独特的一点，它并非以实际历史为'],
    //     bot:['阅读整篇评测','阅读整篇评测'],
    // };
    // let userAvatar = ['https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/5f/5f415c671f7c1348c25d7cb935945cfe9633fc2e.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/e4/e40a921f12fa0e2365044c5c6a5fba0d3567a668.jpg'];
    // let userNickname =['Madaocm','Yurinrin'];
    // let userComments ={
    //                 time:['评测时已游玩 891.8 小时','评测时已游玩 15.9 小时'],
    //                 count:['有 3 人觉得这篇评测有价值','有 1 人觉得这篇评测有价值'],
    //                 bot:['2 篇评测之 1','2 篇评测之 2']
    //             }
    //第十部分
    //let img = 'https://media.st.dl.pinyuncloud.com/steam/apps/1672970/capsule_sm_120.jpg';
    // let content ={
    //     top:['"史蒂夫勇闯地下城，列表空空只身大战boss。不用创造不用手刨，只得持长剑教他做人。 Mojang的再度出发，我的世界+光影mod+暗黑破坏者的“缝合怪”你会喜欢吗？..."','"游戏不错，不过有创意工坊的话就有灵魂了( 顺便多个远程同乐"'],
    //     bot:['阅读整篇评测','阅读整篇评测'],
    // };
    // let userAvatar = ['https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/6e/6e9530d3c2e306485c4ac50d8923030ee5b1238a.jpg','https://media.st.dl.pinyuncloud.com/steamcommunity/public/images/avatars/14/14f74372907051b9a0e563d24bff6a706339b979.jpg'];
    // let userNickname =['Yuzu','daxinzho'];
    // let userComments ={
    //                 time:['评测时已游玩 4.5 小时','评测时已游玩 3.4 小时'],
    //                 count:['有 13 人觉得这篇评测有价值','有 3 人觉得这篇评测有价值'],
    //                 bot:['2 篇评测之 1','2 篇评测之 2']
    //             }
    //let result = await this.app.mysql.insert('indexGame', { imgurls:img, userAvatar: JSON.stringify(userAvatar), content:JSON.stringify(content), userComments: JSON.stringify(userComments),  userNickname: JSON.stringify(userNickname), model: model });
    //VRGame
    //  let img = ['https://media.st.dl.pinyuncloud.com/steam/apps/846470/header_292x136.jpg','https://media.st.dl.pinyuncloud.com/steam/apps/667970/header_292x136.jpg?t=1616777837','https://media.st.dl.pinyuncloud.com/steam/apps/751440/header_292x136_schinese.jpg?t=1623743912','https://media.st.dl.pinyuncloud.com/steam/apps/752480/header_292x136.jpg?t=1626975333'];
    //  let price = ['¥ 90.00','¥ 88.00','¥ 278.00',['-25%','¥ 90.00','¥ 67.50']];

    //  let model = 'VRGame'
    //  let result = await this.app.mysql.insert('indexGame', { imgurls:JSON.stringify(img), price:JSON.stringify(price), model: model });
    //
    //popularGoods
    //第一部分
    // let imgurls = ['https://media.st.dl.pinyuncloud.com/steam/apps/1611300/capsule_184x69.jpg?t=1632652180',
     //                       'https://store.st.dl.pinyuncloud.com/public/images/v6/icon_platform_win_dark.png?v=3',
    //                     'https://media.st.dl.pinyuncloud.com/steam/apps/1611300/ss_f6b62e531333a959296c898233957d4e6aac12aa.600x338.jpg',
    //                     'https://media.st.dl.pinyuncloud.com/steam/apps/1611300/ss_2b136864189c30ad538b393a77642784d69ecee5.600x338.jpg',
    //                     'https://media.st.dl.pinyuncloud.com/steam/apps/1611300/ss_d3a584609650d9227a99caff0626a38fee3139fb.600x338.jpg',
    //                     'https://media.st.dl.pinyuncloud.com/steam/apps/1611300/ss_f383e132f113d09c3eed976854aa8414c6b3bdd8.600x338.jpg',
    //                     ];
    //     let gameName = ['Happy Guy',];
    //     let price = ['-30%','¥ 15.00','¥ 10.50'];
    //     let content = ['色情内容',', 解谜',', 裸露',', 动漫','指向点击'];
    //     let userComments = ['总体用户评测：','多半好评',' (108)'];
    //第二部分
    // let imgurls = [ 'https://media.st.dl.pinyuncloud.com/steam/apps/959880/capsule_184x69_schinese.jpg?t=1632763987',
//     'https://store.st.dl.pinyuncloud.com/public/images/v6/icon_platform_win_dark.png?v=3',
//     'https://media.st.dl.pinyuncloud.com/steam/apps/959880/ss_ad67b7bbc68bfd02c8f02bb1c7ac44be1941426d.600x338.jpg',
//     'https://media.st.dl.pinyuncloud.com/steam/apps/959880/ss_4e2201b371cc1154b9ac898a32344fa992eb0e23.600x338.jpg',
//     'https://media.st.dl.pinyuncloud.com/steam/apps/959880/ss_0045afe36e4007f6e811e3ad474ca44e030f0560.600x338.jpg',
//     'https://media.st.dl.pinyuncloud.com/steam/apps/959880/ss_2aef75e53015a126220ca4de311e6217b8f3caa2.600x338.jpg',
// ];
// let gameName = ['Dungeon Town'];
// let price = ['-10%','¥ 69.00','¥ 62.10'];
// let content = ['角色扮演',', 独立',', 冒险',', 色情内容'];
// let userComments = ['总体用户评测：','特别好评',' (59)'];
// let model = 'popularGoods';
    async insert() {
        let imgurls = [ 'https://media.st.dl.pinyuncloud.com/steam/apps/1481400/capsule_184x69.jpg?t=1632782673',
                        'https://store.st.dl.pinyuncloud.com/public/images/v6/icon_platform_win_dark.png?v=3',
                        'https://media.st.dl.pinyuncloud.com/steam/apps/1481400/ss_9a2245c7324f216345cfc063d9de6f7cfa844ced.600x338.jpg',
                        'https://media.st.dl.pinyuncloud.com/steam/apps/1481400/ss_5b4ab53250f7f5d796368e7faf86c69a2f05eeec.600x338.jpg',
                        'https://media.st.dl.pinyuncloud.com/steam/apps/1481400/ss_8ecc891edc26ee50696fd6c030db6e33f0cb24bb.600x338.jpg',
                        'https://media.st.dl.pinyuncloud.com/steam/apps/959880/ss_2aef75e53015a126220ca4de311e6217b8f3caa2.600x338.jpg',
                    ];
        let gameName = ['Dungeon Town'];
        let price = ['-10%','¥ 69.00','¥ 62.10'];
        let content = ['角色扮演',', 独立',', 冒险',', 色情内容'];
        let userComments = ['总体用户评测：','特别好评',' (59)'];
        let model = 'popularGoods';
        let result = await this.app.mysql.insert('indexGame', { imgurls: JSON.stringify(imgurls), price: JSON.stringify(price), gameName: JSON.stringify(gameName), content: JSON.stringify(content), price: JSON.stringify(price), userComments: JSON.stringify(userComments), model: model });
    }

}

module.exports = SqlService