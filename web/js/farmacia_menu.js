var FARMACIA = "mascport"

//Funció que retorna l'usuari en que ens trobam (admin o farmacèutic)
function get_usuari(){
    var usuari = localStorage.getItem('_Usuari');
	//Miram si tenim guardada la variable que ens diu qui som.
	if(usuari) {
		//Si es així ja tenim el valor
		usuari = JSON.parse(usuari);
		return usuari;
	}else{
		//Sino sortim
		return "null";
	}
}

function get_farmacia(){
//Treu el valor de _Farm    
        var farm = localStorage.getItem('_Farm');
	//Miram si tenim guardada la variable que ens diu la farmacia
	if(farm) {
		//Si es així ja tenim el valor
		farm = JSON.parse(farm);
		return farm;
	}else{
		//Sino sortim
		return "null";
	}
}


function get_farmacia_id(){
//Treu el valor de _idFarm    
        var farm = localStorage.getItem('_idFarm');
	//Miram si tenim guardada la variable que ens diu la farmacia
	if(farm) {
		//Si es així ja tenim el valor
		farm = JSON.parse(farm);
		return farm;
	}else{
		//Sino sortim
		return "null";
	}
}

//Carregam el menú del farmacèutic.
function loadXMLDoc_farmaceutic()
{
    var usuari = "farmaceutic";
    localStorage.setItem('_Usuari', JSON.stringify(usuari));
    //Guardam la farmàcia de l'usuari
    localStorage.setItem('_Farm', JSON.stringify(FARMACIA));


    window.location = "farmacia.html"

    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById("menu_ppal").innerHTML=xmlhttp.responseText;
        document.getElementById("cos_pagina").innerHTML=get_usuari();
        }
      }
    xmlhttp.open("GET","menu_ppal_farmaceutic.html",true);
    xmlhttp.send();
}

function loadXMLDoc_onchanged(){
    var historySelectList = $('select#menu_selector');
    var selectedValue = $('option:selected', historySelectList).val();
    
    if (selectedValue == "Administrador magatzem"){
        loadXMLDoc_administrador();
    }else{
        loadXMLDoc_farmaceutic();
    }
    
}
//Carregam el menú de l'administrador.
function loadXMLDoc_administrador()
{

    var usuari = "admin";
    localStorage.setItem('_Usuari', JSON.stringify(usuari));


    window.location = "farmacia.html"

    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById("menu_ppal").innerHTML=xmlhttp.responseText;
        document.getElementById("cos_pagina").innerHTML=get_usuari();

        }
      }

    xmlhttp.open("GET","menu_ppal_administrador.html",true);
    xmlhttp.send();
}


//Funció que pitja visualment el botó passat. Li canvia el color de fons assignant-li la id botó actiu. A la vegada
//posa els altres botons com a inactius.
function pitja_boto(boto)
{

	var botons = document.getElementsByClassName("menuppal_boto");
	for(var i = 0; i < botons.length; i++)
	{
		botons.item(i).id="";
	}
	document.getElementsByClassName(boto)[0].id="boto_actiu";


}



//Funció inicial.
$( document ).ready(function() {


	//Miram si tenim guardada la variable que ens diu qui som.
	if (get_usuari() == "null"){
		//Sino la forçam a administrador

		var usuari = "admin";
		localStorage.setItem('_Usuari', JSON.stringify(usuari));
                

	}
        
        if (get_farmacia() == "null"){

                //Guardam la farmàcia de l'usuari i la id
                localStorage.setItem('_Farm', JSON.stringify(FARMACIA));
        }
         
        if (get_farmacia_id() == "null"){

            //Guardam la farmàcia de l'usuari i la id
            function guarda_farmaciaid(resp){
                farm = resp.split("@@LTIM@@");
                //Guardam la id de la farmàcia
                localStorage.setItem('_idFarm', JSON.stringify(farm[0]));
            }
            text = "farmacias@@LTIM@@consulta@@LTIM@@"+FARMACIA;
            soapDBWSFarmacia_function(text,guarda_farmaciaid);
        }            
        


        
        
	console.log(get_usuari());	

        var farm = get_farmacia();
        $("#load_farm_menu").html("Farmacèutic - "+farm);
        
	//Miram quin usuari tenim i carregam un contingut o un altre.
	if ( get_usuari() == "admin" ) {
            $("#menu_ppal").load("menu_ppal_administrador.html"); 
            document.getElementById("load_admin_menu").selected=true;
	}else if ( get_usuari() == "farmaceutic" ){
           
            $("#menu_ppal").load("menu_ppal_farmaceutic.html"); 
            document.getElementById("load_farm_menu").selected=true;
	}

	

	
	
});



