Template.minhasCaronas.helpers({
	caronasOfertadas: function() {
        var username = Meteor.user().username;
		var caronasOfertadas = Uffer.find({userOfertante: username});
        // condição in é quando for igual e gt quando for maior.
		return caronasOfertadas;
	},
    caronasPedidas: function() {
        /*var username = Meteor.user().username;
		var caronasOfertadas = Uffer.find({userOfertante: username});
        // condição in é quando for igual e gt quando for maior.
		return caronasOfertadas;*/
	}
});

Template.minhasCaronas.events({
    "click #remover-interesse": function() {
		Meteor.call("", this._id);
		Bert.alert("Você tirou o interesse dessa carona", "success", "growl-top-right");
	},
    "click #remover-carona": function() {
		Meteor.call("removerCarona", this._id);
		Bert.alert("Você removeu essa oferta de carona", "success", "growl-top-right");
	}
});