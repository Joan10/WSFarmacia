$(document).ready(function () {
    $("#formulari_nou_medicament").submit(function () {
        var $form = $(this),
                campNom = $form.find("input[name='nom']").val(),
                campDescripcio = $form.find("textarea[name='descripcio']").val(),
                campCategoria = $form.find("select[name='categoria']").val(),
                campCodiMedicament = $form.find("input[name='codiMedicament']").val(),
                campQuantitatMedicament = $form.find("input[name='quantitatMedicament']").val(),
                campNovaCategoria = $form.find("input[name='novaCategoria']").val();      
        if (campNovaCategoria===undefined) {
        }else
        {
            campCategoria=campNovaCategoria;
        }
        doAltaMe(campCodiMedicament, campNom, campCategoria, campDescripcio, campQuantitatMedicament);
        return false;
    });
});