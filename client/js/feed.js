Template.feed.helpers({
	caronas: function() {
        var ano = new Date().getFullYear();
        var mes = new Date().getMonth() + 1;
        var dia = new Date().getDate();
        var totalDays = dia + mes*30 + ano*365;
		var caronas = Uffer.find({tempoDias: {$gt: totalDays - 1}});
        // condição in é quando for igual e gt quando for maior.
		return caronas;
	}
});

Template.feed.events({
	"click #interesse-carona": function() {
		Meteor.call("", this._id);
		Bert.alert("Carona pedida com Sucesso", "success", "growl-top-right");
        //Router.go("/minhasCaronas");
	}
});