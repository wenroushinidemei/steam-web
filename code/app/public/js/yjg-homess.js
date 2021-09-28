let item=[{img:'https://media.st.dl.pinyuncloud.com/steam/apps/959880/capsule_184x69_schinese.jpg?t=1632542426',price:'123'},{img:'https://media.st.dl.pinyuncloud.com/steam/apps/1481400/capsule_184x69.jpg?t=1632584722',price:'789'},{img:'https://media.st.dl.pinyuncloud.com/steam/apps/959880/capsule_184x69_schinese.jpg?t=1632542426',price:'456'}]
for(let i=0;i<item.length;i++){
    let card=document.createElement('div');
    card.className='content-2'
    card.innerHTML=`<div class="content-2">
    <div class="small-Left"><img src="${item[i].img}" alt=""></div>
    <div class="small-Right">
        <div class="small-1">
            <div class="small-s-top">Dungtown</div>
            <div class="small-s-bottom">
                <div>图标</div>
                <div>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>
            </div>
        </div>
        <div class="small-2">
            <div class="rebate">-10%</div>
            <div class="price-1">
                <div class="line">¥ 69.00</div>
                <div>¥ 62.00</div>
            </div>
        </div>
    </div>
</div>`
let dataa=document.querySelector('.content-Left')

dataa.append(card)
}



// for(let j=0;j<item.length;j++){
//     let diva=document.createElement('div');
//     diva.className='content-Right'
//     diva.innerHTML=`<div class="content-Right">
//     <div class="right-head">Dungeon Town</div>
//     <div class="right-middle">
//         <div>总体用户评测</div>
//         <span class="blude">好评数${item[j].price}</span>
//         <span>（）</span>
//     </div>

//     <div class="right-mnue">
//         <span>角色扮演</span>
//         <span>冒险</span>
//         <span>动漫</span>
//         <span>动作</span>
//     </div>
//     <div class="image-1">
//         <div class="qtt-1"></div>
//         <div class="qtt-2"></div>
//         <div class="qtt-3"></div>
//         <div class="qtt-4"></div>
//     </div>
// </div>
// </div>`
// let kda=document.querySelector('.content-Right')
// kda.append(diva)
//     }

let btn=document.querySelector('.content-Right');
let mmt=document.querySelector('.content-2')
mmt.onmouseover=function(){
    btn.style.display='block'
}
mmt.onmouseleave=function(){
    btn.style.display='none'
}
let baa=document.querySelector('.content-Right')
baa.onmouseover=function(){
    baa.style.display='block'
}



//轮播图点击事件
    let right=document.querySelector('.yjg-logoright')
    let left=document.querySelector('.yjg-logoleft')
    let div=document.querySelectorAll('.yjg-carousel .ww-1')
    let index=0;
    left.onclick=function(){
        div[index].style.opacity='0';
        index--;
        if(index==-1){
            index=2;
        }
        div[index].style.opacity='1'
    }

    right.onclick=function(){
        div[index].style.opacity='0';
        index++;
        if(index==div.length){
            index=0;
        }
        div[index].style.opacity='1'
    }


