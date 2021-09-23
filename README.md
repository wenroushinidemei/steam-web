# steam-web
力求制作以假乱真的steam官网。

使用axios、egg、es6、scss等技术进行搭建。

# 项目git注意：

## 遇到报错:

fatal: unable to access 'https://github.com/wenroushinidemei/steam-web.git/': OpenSSL SSL_read: Connection was reset, errno 10054

打开你下载的Git Bash，在开始菜单里，然后输入：git config --global http.sslVerify "false" 回车执行即可解决！

fatal: unable to access 'https://github.com/wenroushinidemei/steam-web.git/': Failed to connect to github.com port 443: Timed out

超时报错，再次push或则pull即可。

## .gitignore：
.gitignore是git忽视配置文件，因为node_modlues没必要上传，所以我们通过.gitignore将node_modlues文件忽视了，上传和更新时会自动无视它。所以我们有时候需要npm i 一下，把配置中记录的模块都下载更新一次。

# css开发规范

1. 使用scss预编译插件开发项目样式，使用scss嵌套开发模式，根部class或id携带自己名：
    class = 'box_you'》.box_you input{...}
3. css样式书写规范（先写display、position再写盒子模型样式、弹性布局、再写动画），尽量遵守，方便互相查看和差错：

  display:flex;

  position:relative;

  /*xxxx*/

  margin:10px;

  font-size:12px;

  /*xxxx*/

  justify-content:center;

  /*xxxx*/

  ainimation:xxxx

3. 动画帧放到另外一个scss（css）文件夹内。
4. 具有特殊作用，或则影响范围比较大的样式，请即使备注。

# html开发规范

1. 标签严格遵守缩进。
2. 标签属性先写class和id以及name，再写type和value，最后写其他属性：
<input id = "input_box" class = "input_normal" type = "tel" value = "xxx" ...>
3. class属性命名遵守》名字_功能(或特点)的写法：li_first、li_normal
4. id少用，只用在单独且重要的标签上，用于让其被突出出来。
5. div负责布局，div内部放置功能标签：(相同或类似的标签可以放在一起，注意使用弹性布局)

  \<div>\<button\>\</button\>\</div\>

  \<div\>\<lu\>\<li\>....</lu\>\</div\>

  \<div\>\<image\>\</image\>\</div\>

6. 经常备注，开头携带自己名字

  \<!-- 李由：通过css动画产生点击效果... --\>

# js开发规范

1. 类命名大驼峰，函数和变量名小驼峰。class GameBox ； let clickFun = funtion...
2. 禁止使用var，都是使用let
3. 函数需要编写注释在函数上一行。//作为xxx点击事件的事件处理函数，向服务器发起xxx路由的get请求，xxx。
4. 注释最好单行注释，即//。
5. 严格遵守缩进规则。
6. 减少拼音命名，可以网上翻译函数的功能用作命名，通过注释我们可以快速看懂函数想要干什么。
7. 通过按住Ctrl点击函数和类名我们可以快速找打定义的位置，此时可以通过他人注释知道这个函数和类的结构和目的。





dfghjkl;