if (Meteor.isServer) {
	Meteor.methods({
		// Method for adding jokes
		addCarona: function(origemCarona, destinoCarona, dataHoraCarona, quantPassageiros) {
			/* conferir se o usuario esta logado, para cadastrar uma carona*/
            if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
                var username = Meteor.user().username;
                var datalocal = dataHoraCarona.split('T');
                var data = datalocal[0];
                var hora = datalocal[1];                
                var total = data.split('-');// [0] ano, [1] mes, [2] dia
                var valorDias = parseInt(total[0])*365 + parseInt(total[1])*30 + parseInt(total[2]);
                
                var ano = new Date().getFullYear();
                var mes = new Date().getMonth() + 1;
                var dia = new Date().getDate();
                var totalSistema = dia + mes*30 + ano*365;
                
                Uffer.insert({
                    userOfertante: username,
                    origemCarona: origemCarona,
                    destinoCarona: destinoCarona,
                    dataCarona: data,
                    horaCarona: hora,
                    quantPassageiros: quantPassageiros,
                    ocultarNoFeed: false,
                    tempoDias: valorDias,
                    tempoDiasSistema: totalSistema,
                });
			}
		},
        removerCarona: function(caronaId) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Uffer.remove(caronaId);
			}
		},
	});	
}