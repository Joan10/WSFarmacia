

$(function () {
                    $("#arbre_medicaments").jstree({
                        "core": {
                            "multiple": false,
                            "animation": 0
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
                        "plugins": ["search", "wholerow", "checkbox", "types"]
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
                });