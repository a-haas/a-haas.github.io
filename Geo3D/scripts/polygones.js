$(document).ready(function(){
	function renderer(elemID, params, callback){
		/*Make an instance of two and place it on the page.*/
		var elem = document.getElementById(elemID).children[0];
		params.width = $(elem).width();
		var two = new Two(params).appendTo(elem);
		/*two = renderer two instance*/
		/*w = width*/
		callback(two, params);
		/*Don't forget to tell two to render everything to the screen*/
		two.update();
	}

	renderer("def-1", { height: 150 }, function(two , params){
		var w = params.width;
		/*Génération des polygones simples*/
		var rectangle = two.makeRectangle(0, 100, 100, 50); 
		rectangle.fill = '#FF8000';
		rectangle.opacity = 0.75;

		/*Génération d'un polygone non simple*/
		var polygon2 = two.makePath(2*w/3, 0, 2*w/3, 130, (2*w/3 + w)/2, 75, w, 0, w, 125, closed);
		polygon2.fill = 'rgb(254, 77, 77)';
		polygon2.opacity = 0.75;
	});

	renderer("def-orientation", { height: 150 }, function(two, params){
		
	});
});