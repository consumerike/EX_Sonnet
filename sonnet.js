var theSonnet =  document.getElementById('sonnet').innerHTML;
console.log("theSonnet", theSonnet);

var orphansPosition = theSonnet.indexOf("orphans");
console.log("orphansPosition", orphansPosition);

var numberofChar = theSonnet.length;
console.log(x: number)

var replaceWinter = theSonnet.replace("winter", "yultide");

var replaceLarge = replaceWinter.replace(/ the | The | /g, "a large");

theSonnet.innerHTML = replaceLarge;

var insert = document.getElementbyId("sonnet");
insert.innerHTML = replaceLarge;



// BELOW IS THE ARRAY EXERCISE IN CLASS:

var colors = ["red", "blue", "green", "yellow", "orange", "orange", "purple"];
var numbers = [25, 3, 9, 97, 1004, 0];

var reverseOrder = colors.reverse();
console.log("reverseOrder", reverseOrder);


var sortColors = colors.sort();
console.log("sortColors", sortColors);

var sortNumbers = numbers.sort( function (first, second) 

	return first - second;

});
console.log("sortNumbers", sortNumbers);

var joinedColors = colors.join(", ");
console.log("joinedColors", joinedColors, typeof(joinedColors));

var fruits = ["apples", "pear", "grapes", "mango", "avacado", "pumpkin"];
var newFruits = fruits.slice(1,3);
var fruit = fruits.slice(1,3);
console.log("newFruits", newFruits)







