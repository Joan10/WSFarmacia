
$(document).ready(function () {


    //Acció en pitjar el botó nova noticia
    $('#boto_nouMedicament').on('click', function (event) {
        $("#cos_pagina").load("nouMedicament.html");
    });

    //Acció en pitjar el botó de cancel·la dins nova noticia
    $('#boto_novanoticia_cancela').on('click', function (event) {
        window.location.replace("farmacia.html");
    });
    
    
});




