
$(document).ready(function () {
    $("#formulariNovaNoticia").submit(function () {
        alert("Formulari d'enviament de dades al servidor mysql");
        var $form = $(this),
                campTitol = $form.find("input[name='titol']").val(),
                campCos = $form.find("textarea[name='cos']").val();
        alert("La nova farmàcia s'anomena " + campTitol);
        alert("I es troba al carrer " + campCos);
        doAltaFa(campTitol, campCos);
        return false;
    }
    );
    $('#boto_novanoticia_cancela').on('click', function (event) {
        location.reload();
    });
});