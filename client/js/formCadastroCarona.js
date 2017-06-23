Template.formCadastroCarona.rendered = function() {

}
Template.formCadastroCarona.events({
	"submit .formCadastroCarona": function() {
		var origemCarona = event.target.origemCarona.value;
		var destinoCarona = event.target.destinoCarona.value;
		var dataHoraCarona = event.target.dataHoraCarona.value;
		var quantPassageiros = event.target.quantPassageiros.value;
		if (isNotEmpty(origemCarona) && isNotEmpty(destinoCarona) && isNotEmpty(dataHoraCarona)) {
            /*if (quantPassageiros == null)//caso venha vazio, mas não sei fazer. Sou um coitado!
                quantPassageiros = 0;*/
			Meteor.call('addCarona', origemCarona, destinoCarona, dataHoraCarona, quantPassageiros);
			event.target.origemCarona.value = "";
			event.target.destinoCarona.value = "";
			event.target.dataHoraCarona.value = "";
            event.target.quantPassageiros.value = "";
			Bert.alert("Carona cadastrada com sucesso!", "success", "growl-top-right");
		} else {	
			Bert.alert("Preencha todos os campos", "danger", "growl-top-right");
		}
		return false; // prevent submit
	}
});
// Validation Rules
var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Este campo esta com problemas", "danger", "growl-top-right");
	return false;
};