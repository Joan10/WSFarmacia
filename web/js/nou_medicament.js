$(document).ready(function () {
    
    
        function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object

        // files is a FileList of File objects. List some properties.
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
            readMyFile(f);
        }
    }
    document.getElementById('files').addEventListener('change', handleFileSelect, false);

            
    $("#formulari_nou_medicament").submit(function () {
        var campCategoria;
        var $form = $(this),
                campNom = $form.find("input[name='nom']").val(),
                campDescripcio = $form.find("textarea[name='descripcio']").val(),
                campCategoria = $form.find("select[name='categoria']").val(),
                campCodiMedicament = $form.find("input[name='codiMedicament']").val(),
                campQuantitatMedicament = $form.find("input[name='quantitatMedicament']").val(),
                campImatgeMedicament = $form.find("input[id='files']").val()

        //alert(campImatgeMedicament);
        /*alert(campNom);
         alert(campDescripcio);
         alert(campCategoria);
         alert(campCodiMedicament);
         alert(campQuantitatMedicament);*/

        function consultaCategoria(resp) {
            /*function donaDeAlta(respostaServidor) {
             
             alert("S'ha enregistrat el medicament correctament");
             //console.log('entra');
             }*/

            //alert(resp);
            var components;
            var resultats = resp.split("@@LTIMNL@@");
            for (i = 0; i < resultats.length; i++) {
                components = resultats[i].split("@@LTIM@@");
                //alert(components[1]);
                if (campCategoria === components[1]) {
                    campCategoria = components[0];
                    //alert('la categoria es: ' + campCategoria);
                    console.log('la categoria es: ' + campCategoria);
                }
            }
            //alert(campCategoria);

            doAltaMe(campCodiMedicament, campNom, campCategoria, campDescripcio, campQuantitatMedicament, campImatgeMedicament);
            //alert(campCategoria);




            //text = "medicamentos@@LTIM@@alta@@LTIM@@" + campCategoria + "@@LTIM@@" + campDescripcio + "@@LTIM@@" + campImatgeMedicament + "@@LTIM@@" + campNom + "@@LTIM@@" + campCodiMedicament + "@@LTIM@@" + campQuantitatMedicament;
            //alert(text);
            //console.log(text);
            //soapDBWSFarmacia_function(text, donaDeAlta);

            console.log(campCategoria);
        }
        //alert("Inici Soap");
        console.log("inici soap");
        text = "categorias@@LTIM@@lista";
        soapDBWSFarmacia_function(text, consultaCategoria);

        function final() {
            //alert('Final Soap');
            console.log('Final Soap');
            window.location = "medicaments.html";
        }

        setTimeout(final, 300);

        return false;
    });






    function pintaCategories(resp) {

        var template = "<option>novaOpcio</option>";

        var medicaments = resp.split("@@LTIMNL@@");
        var components;
        var medicament = "";

        for (i = 0; i < medicaments.length; i++) {
            components = medicaments[i].split("@@LTIM@@");
            medicament = "";
            medicament = template.replace("novaOpcio", components[1]);
            $("#selectCategories").append(medicament);
        }
    }
    text = "categorias@@LTIM@@lista";
    soapDBWSFarmacia_function(text, pintaCategories);
});