

$(document).ready(function () {
   
   var text,resp;
   
    function pinta_noticies(resp){        
        document.getElementById("noti1").innerHTML=resp;
    }
    text = "noticias@@LTIM@@lista";
//    soapDBWSFarmacia(text, "noti1", pinta_noticies());
    soapDBWSFarmacia_function(text,pinta_noticies);
   
   
    
    /*arrayParametres = [];
    //alert('prova');

    llistatNoticies.search.replace('LTIMNL', '').split('@@').forEach(function (val) {
        split = val.split("=");
        alert(split);
        $.each(split, function (indice, valor) {
            arrayParametres.push(valor);
        });
    });*/
});