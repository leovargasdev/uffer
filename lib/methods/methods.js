if (Meteor.isServer) {
	Meteor.methods({
		// Method for adding jokes
		addCarona: function(origemCarona, destinoCarona, dataHoraCarona) {
			/* conferir se o usuario esta logado, para cadastrar uma carona
            if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {*/
            /*var username = Meteor.user().username;*/
            var datalocal = dataHoraCarona.split('T');
            var data = datalocal[0];
            var hora = datalocal[1];
            Uffer.insert({
                origemCarona: origemCarona,
                destinoCarona: destinoCarona,
                dataCarona: data,
                horaCarona: hora,
                //createdAt: new Date(),
                //scoreCarona: 0, 
            });
			//}
		},
	});	
}