$(document).ready(function () {
    alert("S'ha carregat 'nou_medicament.html'");
    $("#formulari_nou_medicament").submit(function () {
        alert('formulari del nou medicament');
        var $form = $(this),
                campNom = $form.find("input[name='nom']").val(),
                campDescripcio = $form.find("textarea[name='descripcio']").val(),
                campCategoria = $form.find("select[name='categoria']").val();
        alert(campNom);
        alert(campDescripcio);
        alert(campCategoria);
        doAltaMe();
        return false;
    });
});