var HomeView = function(store) {

	//renderHomeView: function() {
	//	$('body').html(this.homeTpl());
	//	$('.search-key').on('keyup', $.proxy(this.findByName, this));
	//},

	this.render = function() {
		this.el.html(HomeView.template());
		return this;
	};
	
	//findByName: function() {
        //console.log('findByName');
        //this.store.findByName($('.search-key').val(), function(employees) {
        //    var l = employees.length;
        //    var e;
        //    $('.employee-list').empty();
        //    for (var i=0; i<l; i++) {
        //        e = employees[i];
        //       $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
        //    }
        //});
		//var self = this;
		//this.store.findByName($('.search-key').val(),function(employees){
		//	$('.employee-list').html(self.employeeLiTpl(employees));
		//});
    //},
	
	this.findByName = function() {
		store.findByName($('.search-key').val(),function(employees){
			$('.employee-list').html(HomeView.liTemplate(employees));
		});
	};
	
	this.initialize = function() {
		//Define a div wrapper for the view. The
		//div wrapper is used to attach events.
		this.el = $('<div/>');
		this.el.on('keyup','search-key',this.findByName);
	};

}

HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());