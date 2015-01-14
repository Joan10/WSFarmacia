
$(document).ready(function () {
//Acció en pitjar el botó nova entrada
    $('#boto_novaentrada').on('click', function (event) {
        //$("#cos_pagina").load("nova_noticia.html");
        $("#cos_pagina").hide();
        $("#cos_pagina2").load("nova_noticia.html");
    });

});