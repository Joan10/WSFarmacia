
$(document).ready(function () {

        if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    //Si estam en Firefox no apareix el placeholder als camps de Data, per tant afegim
    //un text explicant el format d'entrada de les dates
        {
            $("#data_entrada").attr("placeholder","Format AAAA-MM-DDThh:mm");
        }
    
    $("#formulariNovaEntrada").submit(function () {
        nodelist = $("#arbre_medicaments").jstree('get_selected')[0];
        if ($("#"+nodelist).hasClass("jstree-leaf")) {

            var $form = $(this),
                    campQuantitat = $form.find("input[name='quantity']").val(),
                    campDataEntrada = $form.find("input[name='dataEntrada']").val(),

            node = nodelist.split("_")[1];  


            function confirma(resp0){
                //Aquesta funció s'executarà quan s'hagi realitzat correctament la funció d'afegir l'entrada.
                //Confirmarà i restarà al magatzem.
                if (resp0 == "OK"){
                    //Sumam al magatzem
                    text = "medicamentos@@LTIM@@sumaenalmacen@@LTIM@@"+$("#"+nodelist).attr("name")+"@@LTIM@@"+campQuantitat;
                    soapDBWSFarmacia_noalert(text);

                    alert("Operació realitzada correctament");
                    $("#cos_pagina").load("nova_entrada.html"); 
                }else{
                    alert("Hi ha hagut algun problema amb la operació.\nComprova que els camps siguin correctes.");
                }
            }
                     
            //Afegim l'entrada
            text = "entradas@@LTIM@@alta@@LTIM@@"+node+"@@LTIM@@"+campQuantitat+"@@LTIM@@"+campDataEntrada;
            soapDBWSFarmacia_function(text, confirma);
            
            return false;

        }
        return false;
    }
    );
    
    $('#boto_novaentrada_cancela').on('click', function (event) {
        window.location = "entrades.html";

    });

    function pinta_categories(resp){
        var cats = resp.split("@@LTIMNL@@");
        
        template0_cat="<li><a id=\"idcat_labidcat\">nom_cat</a><ul>"
        template_med="<li class=\"fulla\" name=\"labnom_med\" id=\"mediid_labmediid\" data-jstree='{\"icon\":\"images/tree_file.png\"}' >labnom_med - labquant_med en estoc</li>"
        templatef_cat="</ul></li>"
        
        function trad_medicament(resp0, id){
            var meds = resp0.split("@@LTIMNL@@");
            var id_cat = id[0];
            var nom_cat = id[1];
            
            resultat=template0_cat.replace("labidcat",id_cat);
            resultat=resultat.replace("nom_cat",nom_cat);
             
            for (i=0; i<meds.length; i++){
            //Per tots els medicaments miram quins corresponen a categoria passada
                medicament = meds[i].split("@@LTIM@@");
                //Comprovam que l'id de la categoria passat per paràmetre sigui igual
                //al del medicament
                
                if (id_cat == medicament[1]) {
                    // Si trobam el medicament l'afegim
                    resultat=resultat+template_med.replace("labmediid",medicament[0]);
                    resultat=resultat.replace(/labnom_med/g,medicament[4]);
                    resultat=resultat.replace(/labquant_med/g,medicament[6]);

                }
            }
            resultat+=templatef_cat;
            $("#arbre_per_substituir").append(resultat);
            $("#arbre_medicaments").jstree('refresh');
        }
        

        
        for (i=0; i<cats.length; i++){
            id = cats[i].split("@@LTIM@@")[0];
            nom = cats[i].split("@@LTIM@@")[1];
            textmed = "medicamentos@@LTIM@@lista";
            soapDBWSFarmacia_function_param(textmed, trad_medicament, [ id, nom ]);
        }
    }
 
    
    
    text = "categorias@@LTIM@@lista";
    soapDBWSFarmacia_function(text, pinta_categories);
    
    
        
});

