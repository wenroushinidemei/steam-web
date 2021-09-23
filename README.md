# steam-web
力求制作以假乱真的steam官网。

# css开发规范
1. 使用scss预编译插件开发项目样式，使用scss嵌套开发模式，根部class或id携带自己名：class = 'box_you'》.box_you input{...}
2. css样式书写规范（先写display、position再写盒子模型样式、弹性布局、再写动画），尽量遵守，方便互相查看和差错：
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
<div><button></button></div>
<div><lu><li>....</lu></div>
<div><image></image></div>
6.经常备注，开头携带自己名字
<!-- 李由：通过css动画产生点击效果... -->
