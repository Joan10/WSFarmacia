
$(document).ready(function () {

    $("#formulariNouMedicament").submit(function () {
       // alert("Formulari d'enviament de dades al servidor mysql");
        var $form = $(this),
                campTipus = $form.find("select[name='tipusMedicament']").val(),
                campDescripcio = $form.find("input[name='descripcio']").val(),
                campNom = $form.find("input[name='nom']").val(),
                campCodi = $form.find("input[name='codi']").val(),
                campStock = $form.find("input[name='stock']").val();
        /*alert(campTipus);
        alert(campDescripcio);
        alert(campNom);
        alert(campCodi);
        alert(campStock);*/
        

        /*doAltaFa(campTitol, campCos);

        */
       
        doAltaMe();
       
        return false;
    }
    );
    
    $('#boto_nouMedicamnet_cancela').on('click', function () {
        $("#cos_pagina").load("farmacia.html"); 
    });
    
});