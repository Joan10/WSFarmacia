$(document).ready(function () {

    $("#formulariNovaCategoria").submit(function () {
        var $form = $(this),
                campCategoria = $form.find("input[name='categoria']").val(),
                campDescripcio = $form.find("textarea[name='descripcio']").val();
        doAltaCa(campCategoria, campDescripcio);
        $("#cos_pagina").load("categories.html");
        return false;
    });
});