

$(document).ready(function () {
    llistatNoticies = doListaNo();
    alert(llistatNoticies);
    arrayParametres = [];

    llistatNoticies.search.replace('LTIMNL', '').split('@@').forEach(function (val) {
        split = val.split("=");
        $.each(split, function (indice, valor) {
            arrayParametres.push(valor);
        });
    });
});