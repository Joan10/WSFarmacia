/*
 * 
 * IT WORKS ON
 * 
 Firefox 3.5+
 Google Chrome 5.0+
 Safari 4.0+ (not complete support, and can be shaky/incorrect on Windows – but hey, who uses Safari on Windows anyway? ;-) )
 Opera 11.10+ (partial support)
 Internet Explorer 10+
 * 
 * 
 * 
 * 
 * 
 */

//***************************************
// Para subir un fichero al WS
//***************************************
function readMyFile(fic) {
    var reader = new FileReader();
    reader.onload = function (e) {
        soapUploadWSFarmacia(fic.name, reader.result);
    };
    reader.readAsDataURL(fic);
}



//*******************************************
//*******************************************
//********* LLAMADAS SOAP
//*******************************************
//*******************************************

//*******************************************
//***** LLamada para subir un archivo
//*******************************************
function soapUploadWSFarmacia(name, conte, lloc) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://localhost:8080/WSFarmacia/WSUtils', true);
    // Feim la crida SOAP
    var sr =
            '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<SOAP-ENV:Header/>' +
            '<S:Body>' +
            '<ns2:upload xmlns:ns2="http://util.ltimwsfarmacia/">' +
            '<name>' + name + '</name>' +
            '<content>' + conte + '</content>' +
            '</ns2:upload>' +
            '</S:Body>' +
            '</S:Envelope>';
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                alert('la respuesta es\n'+xmlhttp.responseText);
            }
        }
    }
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
}

//*******************************************
//***** LLamada para manipular la BD
//*******************************************
function soapDBWSFarmacia(text) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://localhost:8080/WSFarmacia/WSFarmacias', true);
    // Feim la crida SOAP
    var sr =
            '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<SOAP-ENV:Header/>' +
            '<S:Body>' +
            '<ns2:db xmlns:ns2="http://WS.ltimwsfarmacia/">' +
            '<text>' + text + '</text>' +
            '</ns2:db>' +
            '</S:Body>' +
            '</S:Envelope>';
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                var resp = xmlhttp.responseText;
                var a = resp.indexOf("<return>") + 8;
                var b = resp.indexOf("</return>");
                resp = resp.substring(a,b);
                alert(resp);
            }
        }
    }
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
    
}
