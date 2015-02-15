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
    
    $("#formulariNovaCategoria").submit(function () {
        var $form = $(this),
                campCategoria = $form.find("input[name='categoria']").val(),
                campDescripcio = $form.find("textarea[name='descripcio']").val();
                campImatge = $form.find("input[id='files']").val();
        $("#cos_pagina").load("categories.html");        
        doAltaCa(campCategoria, campDescripcio,campImatge);
        return false;
    });
});
