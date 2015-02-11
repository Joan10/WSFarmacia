
$(document).ready(function () {

    
    //Acció en pitjar el botó nova noticia
    $('#boto_nouMedicament').on('click', function (event) {
        $("#cos_pagina").load("nouMedicament.html");
    });

    
    
    function pintaMedicaments(resp){
        console.log(resp);
    }
    text = "medicamentos@@LTIM@@lista";
    soapDBWSFarmacia_function(text,pintaMedicaments);
    

    
    
});




