
$(document).ready(function () {


                
                
    function pinta_sortides(resp) {
        var template = "<tr><td>idsortida</td><td id=\"medi_idsortida\">idmed</td><td>quantitat</td><td>dataihora</td><td id=\"farmacia_idsortida\">idfarm</td></tr>" 
        var sortides = resp.split("@@LTIMNL@@");
        var sortida="";
        
        function trad_farmacia(resp0, id){
            var farms = resp0.split("@@LTIMNL@@");
            var el_taula = id[0];
            var id_farm = id[1];
            for (i=0; i<farms.length; i++){
                components0 = farms[i].split("@@LTIM@@");
                if (id_farm == components0[0]) {
                  //  console.log("#farmacia_"+el_taula);
                  //  console.log(components0[1]);
                    $("#farmacia_"+el_taula).html(components0[1]);
                    return;
                }
            }
        }

        function trad_medicament(resp0, id){
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
        
        for (i = 0; i < sortides.length; i++) {
            components = sortides[i].split("@@LTIM@@");
           // console.log(sortides[i]);
            
            textfarm = "farmacias@@LTIM@@lista";
            soapDBWSFarmacia_function_param(textfarm, trad_farmacia, [ components[0], components[4] ]);

            textmed = "medicamentos@@LTIM@@lista";
            soapDBWSFarmacia_function_param(textmed, trad_medicament, [ components[0], components[1] ]);


            sortida = template.replace(/idsortida/g, components[0]);
            sortida = sortida.replace(/idmed/g, components[1]);
            sortida = sortida.replace("dataihora", components[2]);
            sortida = sortida.replace("quantitat", components[3]);
            sortida = sortida.replace(/idfarm/g, components[4]);

            $("#body_sortides").append(sortida);
            $("#body_sortides").hide();
            $("#body_sortides").fadeIn(300);
        }
    }

    text = "salidas@@LTIM@@lista";
//    soapDBWSFarmacia(text, "noti1", pinta_noticies());
    soapDBWSFarmacia_function(text, pinta_sortides);
    
    //Acció en pitjar el botó nova sortida
    $('#boto_novasortida').on('click', function(event) {
            $("#cos_pagina").load("nova_sortida.html"); 
    });
    
});
