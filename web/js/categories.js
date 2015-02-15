$(document).ready(function () {
    function pintaCategories(resp) {

        var templateBegin = "<table class='taula_dades sortable' id='table2' border='1' cellpadding='2' cellspacing='2'><thead><tr><th>Categoria</th><th>Descripcio</th><th class='sorttable_nosort'>Imatge</th><th class='sorttable_nosort'> </th></tr></thead><tbody>";
        var template = "<tr><td>C1</td><td>4</td> <td>   <img src=\"files/images/lab_img_link\" alt=\"Imatge del medicament\" width=\"64\"> </td><td width=25><input id='idBorrar' type=image src='images/delete_button_sm.png' class='link2' width='17' height='17'></td></tr>";
        var templateEnd = "</tbody></table>";

        var medicaments = resp.split("@@LTIMNL@@");
        var components;
        var medicament = "";

        $("#taulaCategoriesMed").hide();
        $("#taulaCategoriesMed").append(templateBegin);
        for (i = 0; i < medicaments.length; i++) {
            components = medicaments[i].split("@@LTIM@@");
            //console.log(medicaments[i]);
            medicament = "";

            medicament = template.replace("C1", components[1]);
            medicament = medicament.replace("4", components[2]);
            medicament = medicament.replace("idBorrar", components[1]);
            medicament = medicament.replace("lab_img_link", components[3]);


            $("#table2").append(medicament);
        }
        $("#table2").append(templateEnd);
        $("#taulaCategoriesMed").fadeIn(100);
         
        $('.link2').click(function () {
            var url = $(this).attr('id');
            
            doBajaCa(url);
            alert('La categoria a eliminar es: '+url);
            $("#cos_pagina").load("categories.html");
        });
    }
    text = "categorias@@LTIM@@lista";
    
    
    soapDBWSFarmacia_function(text, pintaCategories);
    
    return false;
});