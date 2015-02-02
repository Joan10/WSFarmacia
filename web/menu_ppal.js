$( document ).ready(function() {

	switch(document.body.id) {
		case "inici":
			pitja_boto("boto_inici");
		    break;
		case "medicaments":
			pitja_boto("boto_medicaments");
		    break;
		case "farmacies":
			pitja_boto("boto_farmacies");
		    break;
		case "entrades":
			pitja_boto("boto_entrades");
		    break;
		case "sortides":
			pitja_boto("boto_sortides");
		    break;
		case "comandes":
			pitja_boto("boto_comandes");
		    break;
		case "ajuda":
			pitja_boto("boto_ajuda");
		    break;
		default:
	} 


});