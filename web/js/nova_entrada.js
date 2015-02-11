
$(document).ready(function () {

    
    
    $("#formulariNovaEntrada").submit(function () {
        nodelist = $("#arbre_medicaments").jstree('get_selected')[0];
        if ($("#"+nodelist).hasClass("jstree-leaf")) {

            var $form = $(this),
                    campQuantitat = $form.find("input[name='quantity']").val(),
                    campDataEntrada = $form.find("input[name='dataEntrada']").val(),
                    campFarmacia = $form.find("select[name='lab_farms']").val();

            node = nodelist.split("_")[1];
            campFarm = campFarmacia.split("_")[1];
            console.log(" Q: "+campQuantitat + " farm: "+ campFarm + " node: "+ node);     
            //doAltaNo(campCos,campDataInici,campDataFi);
            text = "entradas@@LTIM@@alta@@LTIM@@"+node+"@@LTIM@@"+campQuantitat+"@@LTIM@@"+campDataEntrada;
            
            soapDBWSFarmacia(text);
            window.location.replace("entrades.html");
            return false;
        }
    }
    );
    
    $('#boto_novaentrada_cancela').on('click', function (event) {
        window.location = "entrades.html";

    });

    function pinta_categories(resp){
        var cats = resp.split("@@LTIMNL@@");
        
        template0_cat="<li><a id=\"idcat_labidcat\">nom_cat</a><ul>"
        template_med="<li class=\"fulla\" id=\"mediid_labmediid\" data-jstree='{\"icon\":\"images/tree_file.png\"}' >labnom_med</li>"
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
                    resultat=resultat.replace("labnom_med",medicament[4]);
                    //console.log(resultat);
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

