
$(document).ready(function () {
    //Guardam les quantitats màximes de cada medicament aquí per controlar la sortida
    var quant_maxim = {};
    
    
    $("#formulariNovaSortida").submit(function () {
        var ok=false;
        nodelist = $("#arbre_medicaments").jstree('get_selected')[0];
        if ($("#"+nodelist).hasClass("jstree-leaf")) {

            var $form = $(this),
                    campQuantitat = $form.find("input[name='quantity']").val(),
                    campDataSortida = $form.find("input[name='dataSortida']").val(),
                    campFarmacia = $form.find("select[name='lab_farms']").val();

            node = nodelist.split("_")[1];
            campFarm = campFarmacia.split("_")[1];
            //console.log(" Q: "+campQuantitat + " farm: "+ campFarm + " node: "+ node);     
            
            if (parseInt(campQuantitat) <= quant_maxim[node]){
                //Només realitzam la transacció si tenim estoc suficient.
                 
                function confirma(resp0){
                    //Aquesta funció s'executarà quan s'hagi realitzat correctament la funció d'afegir la sortida.
                    //Confirmarà i restarà al magatzem.
                    if (resp0 == "OK"){
                        //Restam al magatzem
                        var count = -1*parseInt(campQuantitat);
                        text = "medicamentos@@LTIM@@sumaenalmacen@@LTIM@@"+$("#"+nodelist).attr("name")+"@@LTIM@@"+count.toString();

                        soapDBWSFarmacia_noalert(text);

                        alert("Operació realitzada correctament");
                        $("#cos_pagina").load("nova_sortida.html"); 
                    }else{
                        alert("Hi ha hagut algun problema amb la operació.\nComprova que els camps siguin correctes.");
                    }
                }
                campFarm="2"
                text = "salidas@@LTIM@@alta@@LTIM@@"+campFarm+"@@LTIM@@"+node+"@@LTIM@@"+campQuantitat+"@@LTIM@@"+campDataSortida;
                soapDBWSFarmacia_function(text,confirma);
                
                return false;
            }else{
                alert("Atenció: No podeu treure més elements dels existents!")
                return false;
            }
        }
    }
    );
    
    $('#boto_novasortida_cancela').on('click', function (event) {
        window.location = "sortides.html";

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
                    resultat=resultat+template_med.replace("labmediid",medicament[0]);
                   // console.log(resultat);
                    resultat=resultat.replace(/labnom_med/g,medicament[4]);
                    resultat=resultat.replace(/labquant_med/g,medicament[6]);
                    //console.log(resultat);
                    quant_maxim[medicament[0]] = medicament[6];
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
    
    
    function pinta_farmacies(resp){
        var farms = resp.split("@@LTIMNL@@");
        template = "<option id=\"optfarmid_laboptfarmid\" value=\"optfarmnom_laboptfarmid\">laboptfarmnom</option>"
        resultat="";
        
        for (i=0; i<farms.length; i++){
            var farm = farms[i].split("@@LTIM@@");
            console.log(farm[0]);
            console.log(farm[1]);
            buff="";
            buff=template.replace(/laboptfarmid/g, farm[0]);
            buff=buff.replace(/laboptfarmnom/g, farm[1]);
            resultat+=buff;
            
        }
        
        $("#lab_farms").html(resultat)
        
    }
    
    
    text = "categorias@@LTIM@@lista";
    soapDBWSFarmacia_function(text, pinta_categories);
    
    
    text = "farmacias@@LTIM@@lista";
    soapDBWSFarmacia_function(text, pinta_farmacies);
        
});

