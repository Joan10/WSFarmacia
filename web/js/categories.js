$(document).ready(function () {
    function pintaMedicaments(resp) {

        var templateBegin = "<table class='taula_dades sortable' id='table1' border='1' cellpadding='2' cellspacing='2'><thead><tr><th>Nom del Medicament</th> <th>Categoria</th><th>Quantitat</th><th class='sorttable_nosort'> </th></tr></thead><tbody>";
        var template = "<tr><td>joan</td><td>C1</td><td>4</td></tr>";
        var templateEnd = "</tbody></table>";

        var medicaments = resp.split("@@LTIMNL@@");
        var components;
        var medicament = "";

        $("#taulaCategories").hide();
        $("#taulaCategories").append(templateBegin);
        for (i = 0; i < medicaments.length; i++) {
            components = medicaments[i].split("@@LTIM@@");
            //console.log(medicaments[i]);
            medicament = "";

            medicament = template.replace("joan", components[4]);
            medicament = medicament.replace("C1", components[1]);
            medicament = medicament.replace("4", components[6]);

            for (j = 0; j < components.length; j++) {
                //console.log(components[j]);
                medicaments[components[0]]
            }
            $("#table1").append(medicament);
        }
        $("#table1").append(templateEnd);
        $("#taulaCategories").fadeIn(100);
    }
    text = "medicamentos@@LTIM@@lista";
    soapDBWSFarmacia_function(text, pintaMedicaments);

});