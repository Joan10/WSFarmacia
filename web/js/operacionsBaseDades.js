function doAltaFa(farmacia,pass) {    
    text = "farmacias@@LTIM@@alta@@LTIM@@"+farmacia+"@@LTIM@@"+pass+"@@LTIM@@0";
    soapDBWSFarmacia(text);
}

function doAltaCa(categoria,descripcio) {
    text = "categorias@@LTIM@@alta@@LTIM@@"+categoria+"@@LTIM@@"+descripcio+"@@LTIM@@antibiotico.png";
    soapDBWSFarmacia(text);
}

function doAltaMe(codi,nom,categoria,descripcio,quantitat) {
    text = "medicamentos@@LTIM@@alta@@LTIM@@"+categoria+"@@LTIM@@"+descripcio+"@@LTIM@@jola.png" +
                        "@@LTIM@@"+nom+"@@LTIM@@"+codi+"@@LTIM@@"+quantitat;
    text = "medicamentos@@LTIM@@alta@@LTIM@@2@@LTIM@@descripción@@LTIM@@nombre.png" +
                        "@@LTIM@@nombre@@LTIM@@00000X@@LTIM@@12";
    /*alert('hola');
    alert(nom);
        alert(descripcio);
        alert(categoria);
        alert(codi);
        alert(quantitat);*/
    alert(text);
    soapDBWSFarmacia(text);
 //   alert('ok');
}

function doAltaEn() {
    text = "entradas@@LTIM@@alta@@LTIM@@66@@LTIM@@5@@LTIM@@2014-11-26 17:48:56";
    soapDBWSFarmacia(text);
}

function doAltaSa() {
    text = "salidas@@LTIM@@alta@@LTIM@@1@@LTIM@@1@@LTIM@@5@@LTIM@@2014-11-21 17:48:56";
    soapDBWSFarmacia(text);
}

function doAltaNo(Noticia,dataInici,dataFi) {
    text = "noticias@@LTIM@@alta@@LTIM@@"+Noticia+"@@LTIM@@"+dataInici+"@@LTIM@@"+dataFi;
    soapDBWSFarmacia(text);
}

function doListaFa() {
    text = "farmacias@@LTIM@@lista";
    soapDBWSFarmacia(text);
}

function doListaCa() {
    text = "categorias@@LTIM@@lista";
    soapDBWSFarmacia(text);
}

function doListaMe() {
    text = "medicamentos@@LTIM@@lista";
    soapDBWSFarmacia(text);
}

function doListaEn() {
    text = "entradas@@LTIM@@lista";
    soapDBWSFarmacia(text);
}

function doListaSa() {
    text = "salidas@@LTIM@@lista";
    soapDBWSFarmacia(text);
}

function doListaNo() {
    text = "noticias@@LTIM@@lista";
    soapDBWSFarmacia(text);
}

function doListaentrefechasEn() {
    text = "entradas@@LTIM@@listaentrefechas@@LTIM@@2014-11-14@@LTIM@@2014-11-27";
    soapDBWSFarmacia(text);
}

function doListaentrefechasSa() {
    text = "salidas@@LTIM@@listaentrefechas@@LTIM@@2014-11-14@@LTIM@@2014-11-27";
    soapDBWSFarmacia(text);
}

function doListaenfechaNo(dia) {
    text = "noticias@@LTIM@@listaenfecha@@LTIM@@2014-11-" + dia;
    soapDBWSFarmacia(text);
}

function doConsultaFa() {
    text = "farmacias@@LTIM@@consulta@@LTIM@@Milano";
    soapDBWSFarmacia(text);
}

function doConsultaCa() {
    text = "categorias@@LTIM@@consulta@@LTIM@@Higiene";
    soapDBWSFarmacia(text);
}

function doConsultaMe() {
    text = "medicamentos@@LTIM@@consulta@@LTIM@@Filvit champú 200 ml";
    soapDBWSFarmacia(text);
}

function doConsultaNo() {
    text = "noticias@@LTIM@@consulta@@LTIM@@2";
    soapDBWSFarmacia(text);
}

function doBajaFa(farmacia) {
    text = "farmacias@@LTIM@@baja@@LTIM@@"+farmacia;
    soapDBWSFarmacia(text);
}

function doBajaCa() {
    text = "categorias@@LTIM@@baja@@LTIM@@Antibióticos";
    soapDBWSFarmacia(text);
}

function doBajaMe(medicamentBaixa) {
    text = "medicamentos@@LTIM@@baja@@LTIM@@"+medicamentBaixa;
    soapDBWSFarmacia(text);
}

function doModificacionFa() {
    text = "farmacias@@LTIM@@modificacion@@LTIM@@Aragón@@LTIM@@cachorro@@LTIM@@22";
    soapDBWSFarmacia(text);
}

function doModificacionCa() {
    text = "categorias@@LTIM@@modificacion@@LTIM@@Antibióticos@@LTIM@@No hay texto@@LTIM@@antibiotico.png";
    soapDBWSFarmacia(text);
}

function doModificacionMe() {
    text = "medicamentos@@LTIM@@modificacion@@LTIM@@2@@LTIM@@descripción@@LTIM@@nombre.png" +
            "@@LTIM@@nombre@@LTIM@@00000X@@LTIM@@7";
    soapDBWSFarmacia(text);
}

function doModificacionNo(id,cos) {
    text = "noticias@@LTIM@@modificacion@@LTIM@@"+id+"@@LTIM@@"+cos+
            "@@LTIM@@2014-11-16 00:00:00@@LTIM@@2014-11-25 00:00:00";
    soapDBWSFarmacia(text);
}

function doSumaenalmacenMe() {
    text = "medicamentos@@LTIM@@sumaenalmacen@@LTIM@@nombre@@LTIM@@2";
    soapDBWSFarmacia(text);
}

function doFechaHora() {
    text = "fechahora";
    soapDBWSFarmacia(text);
}

