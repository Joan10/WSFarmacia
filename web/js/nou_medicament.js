$(document).ready(function () {
    $("#formulari_nou_medicament").submit(function () {
        var $form = $(this),
                campNom = $form.find("input[name='nom']").val(),
                campDescripcio = $form.find("textarea[name='descripcio']").val(),
                campCategoria = $form.find("select[name='categoria']").val(),
                campCodiMedicament = $form.find("input[name='codiMedicament']").val(),
                campQuantitatMedicament = $form.find("input[name='quantitatMedicament']").val();
        alert(campNom);
        alert(campDescripcio);
        alert(campCategoria);
        alert(campCodiMedicament);
        alert(campQuantitatMedicament);
        doAltaMe(campCodiMedicament, campNom, campCategoria, campDescripcio, campQuantitatMedicament);
        return false;
    });
    
    function pintaCategories(resp){
        
        var template ="<option>novaOpcio</option>";
       
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
    soapDBWSFarmacia_function(text,pintaCategories);
});