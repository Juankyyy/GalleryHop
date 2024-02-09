
var Translater = new Translater();


for (var i = 0; i < btns.children.length; i++) {
    var  str = btns.children[i].outerHTML;
    if(str){
        str = str.match(/onclick=\"setlang\(\'(.*?)\'\,/);
        if(str.length>1 && str[1] === Translater.lang_name){
            btns.childNodes[i].className = 'btn active'
        }else{
            btns.childNodes[i].className = 'btn'
        }
    }
}

function setlang(name){
    Translater.setLang(name);
}
