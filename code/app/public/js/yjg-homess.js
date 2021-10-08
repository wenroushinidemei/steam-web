let item=[{img:'https://media.st.dl.pinyuncloud.com/steam/apps/959880/capsule_184x69_schinese.jpg?t=1632542426',price:'123'},{img:'https://media.st.dl.pinyuncloud.com/steam/apps/1481400/capsule_184x69.jpg?t=1632584722',price:'789'},{img:'https://media.st.dl.pinyuncloud.com/steam/apps/959880/capsule_184x69_schinese.jpg?t=1632542426',price:'456'}]
// for(let i=0;i<item.length;i++){
//     let card=document.createElement('div');
//     card.className='content-2'
//     card.innerHTML=`<div class="content-2">
//     <div class="small-Left"><img src="${item[i].img}" alt=""></div>
//     <div class="small-Right">
//         <div class="small-1">
//             <div class="small-s-top">Dungtown</div>
//             <div class="small-s-bottom">
//                 <div>图标</div>
//                 <div>
//                     <span>1</span>
//                     <span>2</span>
//                     <span>3</span>
//                     <span>4</span>
//                 </div>
//             </div>
//         </div>
//         <div class="small-2">
//             <div class="rebate">-10%</div>
//             <div class="price-1">
//                 <div class="line">¥ 69.00</div>
//                 <div>¥ 62.00</div>
//             </div>
//         </div>
//     </div>
// </div>`
// let dataa=document.querySelector('.content-Left')

// dataa.append(card)
// }


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

 let head1=document.querySelector(' .show-Header .head-1')
 let head2=document.querySelector(' .show-Header .head-2')
 let head3=document.querySelector(' .show-Header .head-3')
 let head4=document.querySelector(' .show-Header .head-4')
let contentall=document.querySelectorAll('.content-Left')
console.log(contentall);
var falg=true;
head1.onclick=function(){
    falg=!falg;
    if(falg){
        contentall[0].style.display='block'
    }

   else{
    contentall[1].style.display='none'
    contentall[2].style.display='none'
    contentall[3].style.display='none'
   }
     
}

head2.onclick=function(){
    falg=!falg
    if(falg){
        contentall[1].style.display='block'
    }

   else{
    contentall[0].style.display='none'
    contentall[2].style.display='none'
    contentall[3].style.display='none'
   }
     
}

head3.onclick=function(){
    falg=!falg
    if(falg){
        contentall[2].style.display='block'
    }

   else{
    contentall[0].style.display='none'
    contentall[1].style.display='none'
    contentall[3].style.display='none'
   }
     
}

head4.onclick=function(){
    falg=!falg
    if(falg){
        contentall[3].style.display='block'
    }

   else{
    contentall[0].style.display='none'
    contentall[1].style.display='none'
    contentall[2].style.display='none'
   }
     
}







axios({
    method:'Get',
    url:'/gameModule',
    baseURL:'http://steam.web:80/',
    params:{
        module:'popularGoods'
    }
}).then(res=>{
console.log(res.data);
console.log(res.data[0].content[2]);
for(let i=0;i<res.data.length;i++){
    
    let card=document.createElement('div');
    card.className='content-2'
    card.innerHTML=`<div class="content-2">
    <div class="small-Left"><img src="${JSON.parse( res.data[i].imgurls
        )[0]}" alt=""></div>
    <div class="small-Right">
        <div class="small-1">
            <div class="small-s-top">${res.data[i].gameName}</div>
            <div class="small-s-bottom">
                <div><img src="${JSON.parse( res.data[i].imgurls
                    )[1]}" alt=""></div>
                <div>
                    <span>${res.data[i].content}</span>
                   
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
// let dataa=document.querySelector('.content-Left')
let dataa1=document.querySelector('#name1');
console.log(dataa1);
dataa1.append(card);

// dataa.append(card)
}



for(let i=0;i<res.data.length;i++){
    
    let card=document.createElement('div');
    card.className='content-2'
    card.innerHTML=`<div class="content-2">
    <div class="small-Left"><img src="${JSON.parse( res.data[i].imgurls
        )[0]}" alt=""></div>
    <div class="small-Right">
        <div class="small-1">
            <div class="small-s-top">${res.data[i].gameName}</div>
            <div class="small-s-bottom">
                <div><img src="${JSON.parse( res.data[i].imgurls
                    )[1]}" alt=""></div>
                <div>
                    <span>${res.data[i].content}</span>
                   
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
// let dataa1=document.querySelector('#name1');

// dataa1.append(card);

dataa.append(card)
}


for(let i=0;i<res.data.length;i++){
    
    let card=document.createElement('div');
    card.className='content-2'
    card.innerHTML=`<div class="content-2">
    <div class="small-Left"><img src="${JSON.parse( res.data[i].imgurls
        )[0]}" alt=""></div>
    <div class="small-Right">
        <div class="small-1">
            <div class="small-s-top">${res.data[i].gameName}</div>
            <div class="small-s-bottom">
                <div><img src="${JSON.parse( res.data[i].imgurls
                    )[1]}" alt=""></div>
                <div>
                    <span>${res.data[i].content}</span>
                   
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

let dataa2=document.querySelector('#name2');

dataa2.append(card);
}


for(let i=0;i<res.data.length-1;i++){
    
    let card=document.createElement('div');
    card.className='content-2'
    card.innerHTML=`<div class="content-2">
    <div class="small-Left"><img src="${JSON.parse( res.data[i].imgurls
        )[0]}" alt=""></div>
    <div class="small-Right">
        <div class="small-1">
            <div class="small-s-top">${res.data[i].gameName}</div>
            <div class="small-s-bottom">
                <div><img src="${JSON.parse( res.data[i].imgurls
                    )[1]}" alt=""></div>
                <div>
                    <span>${res.data[i].content}</span>
                   
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

let dataa3=document.querySelector('#name3');

dataa3.append(card);
}



}).catch(err=>{
    console.log(请求失败);
})




