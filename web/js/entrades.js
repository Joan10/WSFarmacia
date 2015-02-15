
$(document).ready(function () {


                
                
    function pinta_entrades(resp) {
        var template = "<tr><td>identrada</td><td id=\"medi_identrada\">idmed</td><td>quantitat</td><td>dataihora</td></tr>" 
        var entrades = resp.split("@@LTIMNL@@");
        var entrada="";
        

        function trad_medicament(resp0, id){
            
            /* Aquesta funció s'encarrega de pintar el nom dels medicaments
             * amb id igual al passat dins del vector id.
             * 
             * En aquest cas resp0 serà la resposta i id serà un array
             * amb dos components: id[0] és l'id de l'element de la taula on es
             * guardarà el resultat i id[1] és l'id del medicament.
             * 
             * Aquesta funció existeix perquè no tenim manera de treure
             * el nom d'un medicament donada la seva ID sense modificar el ws.
            */
           
            var farms = resp0.split("@@LTIMNL@@");
            var el_taula = id[0];
            var id_medi = id[1];
            for (i=0; i<farms.length; i++){
                components0 = farms[i].split("@@LTIM@@");
                if (id_medi == components0[0]) {
                  //  console.log("#medi_"+el_taula);
                  //  console.log(components0[3]);
                    $("#medi_"+el_taula).html(components0[4]);
                    return;
                }
            }
        }
        
        for (i = 0; i < entrades.length; i++) {
            components = entrades[i].split("@@LTIM@@");
            
            //Per totes les entrades feim la petició per traduir la id dels medicaments a nom.
            
            textmed = "medicamentos@@LTIM@@lista";
            soapDBWSFarmacia_function_param(textmed, trad_medicament, [ components[0], components[1] ]);


            entrada = template.replace(/identrada/g, components[0]);
            entrada = entrada.replace(/idmed/g, components[1]);
            entrada = entrada.replace("dataihora", components[2]);
            entrada = entrada.replace("quantitat", components[3]);

            $("#body_entrades").append(entrada);
            $("#body_entrades").hide();
            $("#body_entrades").fadeIn(300);
        }
    }

    text = "entradas@@LTIM@@lista";
    soapDBWSFarmacia_function(text, pinta_entrades);
    
    //Acció en pitjar el botó nova entrada
    $('#boto_novaentrada').on('click', function(event) {
            $("#cos_pagina").load("nova_entrada.html"); 
    });
    
});
