$(document).ready(function () {

    $('#boto_novafarmacia').on('click', function (event) {
        $("#cos_pagina").load("nova_farmacia.html");
    });

    $('#formulariNovaFarmacia').submit(function () {
        var $form = $(this),
                campNomFarmacia = $form.find("input[name='nomFarmacia']").val(),
                campPsswdFarmacia = $form.find("input[name='psswdFarmacia']").val();
        doAltaFa(campNomFarmacia,campPsswdFarmacia);
        window.location("farmacies.html");
    });

    $('#boto_novaentrada_cancela').on('click', function (event) {
        window.location = "farmacies.html"
    });
    

});