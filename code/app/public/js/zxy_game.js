
function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
function text() {
    let numberId = getQueryVariable('id')
    axios({
        method:'Get',
        url:'/game',
        baseURL:'http://127.0.0.1:80/',
        params:{
            id:`${numberId}`
        }
    }).then(res=>{
    console.log(res.data);
    console.log(res.data.gameName);
    let gameNames = document.querySelector('#gameName');
    let indexPic = document.querySelector('#indexPic');
    if(res.data.gameName!=null){
        gameNames.innerHTML = res.data.gameName;
        let as = JSON.parse(res.data.imgurls);
         indexPic.style.backgroundImage = `url(${as[0]})` ;
       console.log(as[0]);
      
    }
    
    }).catch(err => {
        console.log(err)
    });

}
text();

var query = window.location.search.substring(1);
console.log(query);
console.log(getQueryVariable('id'));
console.log(getQueryVariable('name'));
// getQueryStringRegExp = function(name) { 
//     var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");   

//     return reg.test(location.href) ? unescape(RegExp.$2.replace(/\+/g, " ")) : ""; 
// };
