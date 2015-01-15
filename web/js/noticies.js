/*
	He agrupat tot el que fa referència a Notícies perquè, vist que sempre és el mateix HTML, tenir centralitzat tot el javascript per
	no repetir variables i funcions.
*/

$(document).ready(function () {

	//Acció en pitjar el botó accepta a nova noticia
    $("#formulariNovaNoticia").submit(function () {
       // alert("Formulari d'enviament de dades al servidor mysql");
        var $form = $(this),
                campTitol = $form.find("input[name='titol']").val(),
                campCos = $form.find("textarea[name='cos']").val();
       // alert("La nova farmàcia s'anomena " + campTitol);
        //alert("I es troba al carrer " + campCos);
        doAltaFa(campTitol, campCos);
        //Recarregam la pàgina anterior dinàmicament
        
		window.location.replace("farmacia.html"); 
        return false;
    }
    );

	//Acció en pitjar el botó accepta a edita noticia
    $("#formulariEditaNoticia").submit(function () {
       // alert("Formulari d'enviament de dades al servidor mysql");
        var $form = $(this),
                campTitol = $form.find("input[name='titol']").val(),
                campCos = $form.find("textarea[name='cos']").val();
       // alert("La nova farmàcia s'anomena " + campTitol);
        //alert("I es troba al carrer " + campCos);
        doAltaFa(campTitol, campCos);
        //Recarregam la pàgina anterior dinàmicament
		alert("edita")
		window.location.replace("farmacia.html"); 
        return false;
    }
    );


	//Acció en pitjar el botó nova noticia
	$('#boto_novanoticia').on('click', function(event) {
		$("#cos_pagina").load("nova_noticia.html"); 
	});

	//Acció en pitjar el botó de cancel·la dins nova noticia
    $('#boto_novanoticia_cancela').on('click', function (event) {
		window.location.replace("farmacia.html"); 
    });
});


//Acció en pitjar el botó edita notícia. Li passam per paràmetre la ID de la notícia.
function edita_noticia(id_noticia)
{	
	id_edita=id_noticia;
	$("#cos_pagina").load("edita_noticia.html"); 
}

function elimina_noticia(id_noticia)
{	
	alert (id_noticia);
}


