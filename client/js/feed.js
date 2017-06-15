Template.feed.helpers({
	caronas: function() {
        //var now = new Date(); // data do sistema
        //var horaSistema = (now.getHours() + ":" + now.getMinutes()).toString();
        //var dataSistema = new Date(year, month, day);
        //var dataSistema = (now.getFullYear() + "-" + (now.getMonth()+1) + "-" + now.getDate()).toString();
		//var caronas = Uffer.find({dataCarona: {$gt: 2017-06-15}});
		var caronas = Uffer.find({});
		return caronas;
	}
});