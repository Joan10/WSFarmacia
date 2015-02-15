$(document).ready(function () {

    $('#boto_editanoticia_cancela').on('click', function () {
        window.location.replace("farmacia.html");
    });

    var text, idnoticia;

    function pinta_cos(resp) {
        cos = resp.split("@@LTIM@@");
        idnoticia = cos[0];
        //alert(cos);
        //alert(cos[2]);
        $("#editaTitolNoticia").html("Aquesta és la noticia: " + idnoticia);
        $("#dataInicial").val(cos[2]);
        $("#dataFinal").val(cos[3]);
        $("#editaCosNoticia").html(cos[1]);
    }
    text = "noticias@@LTIM@@consulta@@LTIM@@" + id_edita;
    soapDBWSFarmacia_function(text, pinta_cos);





    $("#formulariEditaNoticia").submit(function () {
        // alert("Formulari d'enviament de dades al servidor mysql");
        var $form = $(this),
                campDataInici = $form.find("input[name='dataInici']").val(),
                campDataFi = $form.find("input[name='dataFi']").val(),
                campCos = $form.find("textarea[name='cos']").val();
        doModificacionNo(idnoticia, campCos, campDataInici, campDataFi);

        //Recarregam la pàgina anterior dinàmicament
        function recarregar() {
            window.location.replace("farmacia.html");
        }
        setTimeout(recarregar, 300);
        return false;
    }
    );


});