angular.module('ajinkyaBoradeSapienttestApp')
  .factory('ContactusData', function () {
    return {

    	slides : [
			{
				"id":0,
				"image" : "images/item-1.png",
				"heading" : "Careers",
				"text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			},
			{
				"id":1,
				"image" : "images/item-2.png",
				"heading" : "Contact Us",
				"text" : "Morbi tincidunt commodo scelerisque."
			},
			{
				"id":2,
				"image" : "images/item-3.png",
				"heading" : "About Us",
				"text" : "Duis porttitor diam vitae leo elementum accumsan."
			}
		]

    };
  });