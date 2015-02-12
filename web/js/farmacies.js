$(document).ready(function () {

    $('#boto_novafarmacia').on('click', function (event) {
        $("#cos_pagina").load("nova_farmacia.html");
    });

    $('#formulariNovaFarmacia').submit(function () {
        var $form = $(this),
                campNomFarmacia = $form.find("input[name='nomFarmacia']").val(),
                campPsswdFarmacia = $form.find("input[name='psswdFarmacia']").val();
        doAltaFa(campNomFarmacia, campPsswdFarmacia);
        window.location("farmacies.html");
    });

    $('#boto_novaentrada_cancela').on('click', function (event) {
        window.location = "farmacies.html"
    });


    function pintaFarmacies(resp) {

        var templateBegin = "<table class='taula_dades sortable' id='table1' border='1' cellpadding='2' cellspacing='2'><thead><tr><th>Identificador</th><th>Nom</th><th>Password</th><th class='sorttable_nosort'> </th></tr></thead><tbody>";
        var template = "<tr><td>joan</td><td>C1</td><td>password</td></tr>";
        var templateEnd = "</tbody></table>";

        var medicaments = resp.split("@@LTIMNL@@");
        var components;
        var medicament = "";

        $("#taulaFarmacies").hide();
        $("#taulaFarmacies").append(templateBegin);
        for (i = 0; i < medicaments.length; i++) {
            components = medicaments[i].split("@@LTIM@@");
            console.log(medicaments[i]);
            medicament = "";

            medicament = template.replace("joan", components[0]);
            medicament = medicament.replace("C1", components[1]);
            medicament = medicament.replace("password", components[2]);

            /*for (j = 0; j < components.length; j++) {
                console.log(components[j]);
                medicaments[components[0]]
            }*/
            $("#table1").append(medicament);
        }
        $("#table1").append(templateEnd);
        $("#taulaFarmacies").fadeIn(100);
    }
    text = "farmacias@@LTIM@@lista";
    soapDBWSFarmacia_function(text, pintaFarmacies);

});