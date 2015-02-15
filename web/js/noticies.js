/*
 He agrupat tot el que fa referència a Notícies perquè, vist que sempre és el mateix HTML, tenir centralitzat tot el javascript per
 no repetir variables i funcions.
 */

$(document).ready(function () {

    //Acció en pitjar el botó accepta a nova noticia
    $("#formulariNovaNoticia").submit(function () {
        var $form = $(this),
                campDataInici = $form.find("input[name='dataInici']").val(),
                campDataFi = $form.find("input[name='dataFi']").val(),
                campCos = $form.find("textarea[name='cos']").val();
        doAltaNo(campCos, campDataInici, campDataFi);

        $("#cos_pagina").load("nova_noticia.html"); 
        return false;
    }
    );

    //Acció en pitjar el botó accepta a edita noticia
    /*$("#formulariEditaNoticia").submit(function () {
     // alert("Formulari d'enviament de dades al servidor mysql");
     var $form = $(this),
     campTitol = $form.find("input[name='titol']").val(),
     campCos = $form.find("textarea[name='cos']").val();
     // alert("La nova farmàcia s'anomena " + campTitol);
     //alert("I es troba al carrer " + campCos);
     doAltaFa(campTitol, campCos);
     //Recarregam la pàgina anterior dinàmicament
     alert("edita")
     window.location.replace("farmacia.html");
     return false;
     }
     );*/


    //Acció en pitjar el botó nova noticia
    $('#boto_novanoticia').on('click', function (event) {
        $("#cos_pagina").load("nova_noticia.html");
    });

    //Acció en pitjar el botó de cancel·la dins nova noticia
    $('#boto_novanoticia_cancela').on('click', function (event) {
        window.location.replace("farmacia.html");
    });


    noticies();

    function noticies() {

        $("#layout_noticies").empty();
        //$("#layout_noticies").fadeIn(30);

        var text;
        cos_noticia = ""; //Es passarà a edita.
        var noticies;
        function pinta_noticies(resp) {
            function consultaHora(fecha) {

                var template = "<div class='noticia'><div class='seccio_cos'><h4>titol_noticia</h4>cos_noticia\n\
<div style='text-align: left; width: 10%; margin-left: auto; margin-right: 0px;'>\n\
<a href='#' id='boto_editanoticia_idnoticia' onclick='edita_noticia(idnoticia)'> \n\
<img src='images/edit_button.png' alt='Edita notícia'  class='boto_med_image'></a></div></div></div>";
                /*
                 * <a href='#' \n\
                 id='boto_eliminanoticia_idnoticia' onclick='elimina_noticia(idnoticia)'>\n\
                 <img src='images/delete_button.png' alt='Esborra notícia'  class='boto_med_image'></a>
                 */

                var noticies = resp.split("@@LTIMNL@@");
                var components;
                var noticia = "";



                for (i = 0; i < noticies.length; i++) {
                    components = noticies[i].split("@@LTIM@@");
                    console.log(noticies[i]);
                    noticia = "";
                    var dataInici = components[2].split("-");
                    var diaInici = dataInici[2].split(" ");
                    var diaFiInici = diaInici[1].split(".");
                    var dataFi = components[3].split("-");
                    var diaFi = dataFi[2].split(" ");
                    var diaFiHora = diaFi[1].split(".");


                    if ((new Date(fecha).getTime() >= new Date(dataInici).getTime()) &&
                            (new Date(fecha).getTime() <= new Date(dataFi).getTime()))
                    {
                        //noticia=n0+components[0]+": "+components[2]+" - "+components[3]+n1+components[1]+n2+components[0]+n3+components[0]+n4+components[0]+n5+components[0]+n6;
                        noticia = template.replace("titol_noticia", "Número de notícia: " + components[0] + "<br>" +
                                "Data d'inici: " + diaInici[0] + "-" + dataInici[1] + "-" + dataInici[0] + " Hora:" + diaFiInici[0] + "<br>" +
                                "Data de fi: " + diaFi[0] + "-" + dataFi[1] + "-" + dataFi[0] + " Hora:" + diaFiHora[0]);
                        noticia = noticia.replace("cos_noticia", components[1]);
                        noticia = noticia.replace(/idnoticia/g, components[0]);

                        for (j = 0; j < components.length; j++) {
                            console.log(components[j]);
                            noticies[components[0]]
                        }
                        //document.getElementById("layout_noticies").innerHTML += noticia;

                        $("#layout_noticies").append(noticia);


                    }



                    //$("#layout_noticies").hide();
                    //$("#layout_noticies").fadeOut(20);

                }


                //document.getElementById("noti1").innerHTML=resp;
            }
            text = "fechahora";
            soapDBWSFarmacia_function(text, consultaHora);
        }
        text = "noticias@@LTIM@@lista";
//    soapDBWSFarmacia(text, "noti1", pinta_noticies());
        soapDBWSFarmacia_function(text, pinta_noticies);

    }
    
    setInterval(noticies, 1200000);

});


//Acció en pitjar el botó edita notícia. Li passam per paràmetre la ID de la notícia.
function edita_noticia(id_noticia)
{
    id_edita = id_noticia;
    cos_edita = $("#id_edita").attr('value');
    $("#cos_pagina").load("edita_noticia.html");
}

function elimina_noticia(id_noticia)
{
    alert(id_noticia);
}


