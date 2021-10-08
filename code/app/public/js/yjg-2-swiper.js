let rightr=document.querySelector('.yjg-logoright-2')
    let leftl=document.querySelector('.yjg-logoleft-2')
    let divv=document.querySelectorAll('.yjg-carousel-2 .ww-2')
    console.log(divv);
    let indexx=0;
    leftl.onclick=function(){
        divv[indexx].style.opacity='0';
        indexx--;
        if(indexx==-1){
            indexx=2;
        }
        divv[indexx].style.opacity='1'
    }

    rightr.onclick=function(){
        divv[indexx].style.opacity='0';
        indexx++;
        if(indexx==divv.length){
            indexx=0;
        }
        divv[indexx].style.opacity='1'
    }
