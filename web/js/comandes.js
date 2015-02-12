var ID_FARMACIA = "2";
$(document).ready(function () {
                             
    function pinta_comandes(resp) {
        //Funció que pinta les comandes.
        var template = "<tr><td>idcomanda</td><td id=\"medi_idcomanda\">idmed</td><td>quantitat</td><td>dataihora</td><td id=\"farmacia_idcomanda\">idfarm</td></tr>" 
        var comandes = resp.split("@@LTIMNL@@");
        var comanda="";

        function trad_medicament(resp0, id){
            /* Aquesta funció s'encarrega de pintar els medicaments
             * amb id igual al passat dins del vector id.
             * 
             * En aquest cas resp0 serà la resposta i id serà un array
             * amb dos components: id[0] és l'id de l'element de la taula on es
             * guardarà el resultat i id[1] és l'id del medicament.
             * 
             * Aquesta funció existeix perquè no tenim manera de treure
             * el nom d'un medicament donada la seva ID sense modificar el ws.
            */
            var medi = resp0.split("@@LTIMNL@@");
            var el_taula = id[0];
            var id_medi = id[1];
            for (i=0; i<medi.length; i++){
                //Recorrem tots els medicaments fins que en trobem un amb
                //el mateix identificador que hem passat. Llavors el pintam
                components0 = medi[i].split("@@LTIM@@");
                if (id_medi == components0[0]) {
                    $("#medi_"+el_taula).html(components0[4]);
                    return;
                }
            }
        }

        
        
        for (i = 0; i < comandes.length; i++) {
            components = comandes[i].split("@@LTIM@@");
            if ( ID_FARMACIA == components[4] ) {
                //Per totes les comandes feim dues peticions: Una per traduir la id de farmàcia al seu nom i un
                //altre pel mateix amb els medicaments.


                textmed = "medicamentos@@LTIM@@lista";
                soapDBWSFarmacia_function_param(textmed, trad_medicament, [ components[0], components[1] ]);

                //Preparam l'HTML per cada comanda
                comanda = template.replace(/idcomanda/g, components[0]);
                comanda = comanda.replace(/idmed/g, components[1]);
                comanda = comanda.replace("dataihora", components[2]);
                comanda = comanda.replace("quantitat", components[3]);
                comanda = comanda.replace(/idfarm/g, components[4]);

                $("#body_comandes").append(comanda);
                $("#body_comandes").hide();
                $("#body_comandes").fadeIn(300);
            }
        }
    }    
    text = "salidas@@LTIM@@lista";
//    soapDBWSFarmacia(text, "noti1", pinta_noticies());
    soapDBWSFarmacia_function(text, pinta_comandes);
    
    //Acció en pitjar el botó nova comanda
    $('#boto_novacomanda').on('click', function(event) {
            $("#cos_pagina").load("nova_comanda.html"); 
    });
    
});
