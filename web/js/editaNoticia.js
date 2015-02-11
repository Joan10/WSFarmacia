$(document).ready(function () {

    var text,idnoticia;
    //Introduïm les dades de la notícia passada
    text = "noticias@@LTIM@@consulta@@LTIM@@" + id_edita;
//    soapDBWSFarmacia(text, "noti1", pinta_noticies());
    function pinta_cos(resp) {
        cos = resp.split("@@LTIM@@");
        idnoticia = cos[0];
        $("#editaTitolNoticia").val(idnoticia);
        $("#editaCosNoticia").html(cos[1]);
    }
    soapDBWSFarmacia_function(text, pinta_cos);

    $("#formulariEditaNoticia").submit(function () {
        // alert("Formulari d'enviament de dades al servidor mysql");
        var $form = $(this),
                campCos = $form.find("textarea[name='cos']").val();
        doModificacionNo(idnoticia, campCos);
        //Recarregam la pàgina anterior dinàmicament
        $("#cos_pagina").replace("farmacia.html");
        return false;
    }
    );


    $('#boto_editanoticia_cancela').on('click', function () {
        window.location.replace("farmacia.html");
    });

});