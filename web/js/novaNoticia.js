
$(document).ready(function () {
    $("#formulariNovaNoticia").submit(function () {
       // alert("Formulari d'enviament de dades al servidor mysql");
        var $form = $(this),
                campTitol = $form.find("input[name='titol']").val(),
                campCos = $form.find("textarea[name='cos']").val();
       // alert("La nova farmàcia s'anomena " + campTitol);
        //alert("I es troba al carrer " + campCos);
        doAltaFa(campTitol, campCos);
        //Recarregam la pàgina anterior dinàmicament
        $("#cos_pagina").load("nova_noticia.html"); 
        return false;
    }
    );

    $("#formulariEditaNoticia").submit(function () {
       // alert("Formulari d'enviament de dades al servidor mysql");
        var $form = $(this),
                campTitol = $form.find("input[name='titol']").val(),
                campCos = $form.find("textarea[name='cos']").val();
       // alert("La nova farmàcia s'anomena " + campTitol);
        //alert("I es troba al carrer " + campCos);
        doAltaFa(campTitol, campCos);
        //Recarregam la pàgina anterior dinàmicament
        $("#cos_pagina").load("nova_noticia.html"); 
        return false;
    }
    );


    $('#boto_novanoticia_cancela').on('click', function (event) {
        $("#cos_pagina").load("farmacia.html"); 
    });
});
