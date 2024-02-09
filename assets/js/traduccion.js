let btn=document.getElementById("traductor")
let idioma = "es"
btn.onclick=function(){
    setlang(idioma)
    
    if(idioma == "es"){
        idioma = "default"
    }
    else{
        idioma = "es"
    }

}