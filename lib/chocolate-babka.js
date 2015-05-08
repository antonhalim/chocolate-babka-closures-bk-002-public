'use strict';

function counterCreator(num) {
	var lineNum = num;
	return function(){
		return	lineNum += 1;
	}
};

function countAnnouncer(string, number){
	return function(){
		return "Now serving " + string + " number " + number.call() + "!";
	}
};



/*
counterCreator
counterclosure
var bakeryCounter = counterCreator(0);
('should increment the number', function() {
	expect(bakeryCounter()).toEqual(1);

	expect(bakeryCounter()).toEqual(2);
	expect(bakeryCounter()).toEqual(3);


function idMaker(phrase) {
  var greeting = phrase;

	this inner function has access to the outer function's variables and argument(s)
  return function(firstName, lastName){
    return greeting + firstName + ' ' + lastName + '.';
  };
}
*/
