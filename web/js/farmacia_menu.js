//Funció que retorna l'usuari en que ens trobam (admin o farmacèutic)
function get_usuari(){
    var usuari = localStorage.getItem('_Usuari');
	//Miram si tenim guardada la variable que ens diu qui som.
	if(usuari) {
		//Si es així ja tenim el valor
		usuari = JSON.parse(usuari);
		return usuari
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
alert("hola");
xmlhttp.open("GET","menu_ppal_farmaceutic.html",true);
xmlhttp.send();
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

	console.log(get_usuari());	


	//Miram quin usuari tenim i carregam un contingut o un altre.
	if ( get_usuari() == "admin" ) {
		$("#menu_ppal").load("menu_ppal_administrador.html"); 
		document.getElementById("load_admin_menu").selected=true;
	}else if ( get_usuari() == "farmaceutic" ){
		$("#menu_ppal").load("menu_ppal_farmaceutic.html"); 
		document.getElementById("load_farm_menu").selected=true;
	}

	

	
	
});



