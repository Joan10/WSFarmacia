

$(function () {
    
    //Com que jstree és molt complex, l'única manera que he trobat de poder fer la petició
    // i que dibuixi l'arbre en funció d'això és esperar uns instants perquè la petició s'hagi
     //realitzat.
     $("#arbre_medicaments").hide();
     
    setTimeout( function(){
                    $("#arbre_medicaments").jstree({
                        "core": {
                            "multiple": false,
                            "animation": 0,
                            "check_callback" : true
                        },
                        "types": {
                            "file": {
                                "icon": "glyphicon ",
                                "valid_children": []
                            }
                        },
                        "checkbox": {
                            "keep_selected_style": true,
                            "three_state": false
                        },
                        "plugins": ["search", "wholerow", "checkbox", "types", "sort"]
                    }
                    );
            
                    $(".node").find('> a > .jstree-checkbox').remove()
                    var to = false;
                    $('#arbre_medicaments_q').keyup(function () {
                        if (to) {
                            clearTimeout(to);
                        }
                        to = setTimeout(function () {
                            var v = $('#arbre_medicaments_q').val();
                            $('#arbre_medicaments').jstree(true).search(v);
                        }, 250);
                    });
    $("#arbre_medicaments").fadeIn(250);                
    }, 200)
});