// TASK 1

var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b =5;\nvar c;\n--------\n\n" +
     "a + b = " + (a + b) + "\n" + 
     "a - b = " + (a - b) + "\n" +
     "a * b = " + (a * b) + "\n" +
     "b / a = " + (b / a) + "\n" +
     "a % b = " + (a % b) + "\n" +
     "a += b = " + (a += b) + "\n" +
     "a -= b = " + (a -= b) + "\n" +
     "a *= b = " + (a *= b) + "\n" +
     "a /= b = " + (a /= b) + "\n" +
     "a %= b = " + (a %= b) + "\n" +
     "a == b = " + (a == b) + "\n" +
     "a != b = " + (a != b) + "\n" +
     "a > b = " + (a > b) + "\n" +
     "a < b = " + (a < b) + "\n" +
     "!a && !c = " + (!a && !c) + "\n" +
     "!a || !c = " + (!a || !c ) + "\n" );
      
      
     

// alert( "description of alerted_value: " + alerted_value );

a + b
a - b
a * b
b / a

a % b
a += b
a -= b

a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 


// TASK 2

var first_name = "Qier";
var last_name = "Tang";
var email = "tang0179@algonquinlive.com"
var experiment;


experiment = "My name is " + 
             
             first_name +
             " " +
             last_name + 
             ". " +
             " You can contact me at " +
             email +
             ".";

alert(experiment);
console.log(experiment);


// TASK 3

var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

var sum = numbers[0] + numbers[4];

if(sum % 2 == 1){
   alert(numbers[0] + " + " + numbers[4] + " = " + sum +
         "\n This is an odd number.") ;
    
}else if(sum % 2 ==0){
    alert(numbers[0] + " + " + numbers[4] + " = " + sum +
          "\n This is an even number.");
    
}

console.log(numbers[0]); // first array element
console.log(numbers[4]); // first array element 
console.log(numbers[0] + " + " + numbers[4] + " = " + sum);

// check if number is even or odd?

//5 % 2 = 1 // means a number is odd
//
//6 % 2 = 0 // means a number is even 

//var test_array =[
//    "first",
//    "second",
//    "third"
//];
//
//test_array.push("fourth", "fifth");
//console.log(test_array);
//
//console.log(test_array);
//test_array.splice(5, 0, "sixth");
//console.log(test_array);
//
////Associative Array
//var computer = {
//    "processor": "i7",
//    "HD": "1TB",
//    "RAM": "1GB"
//};
//
//console.log(computer["processor"]);
//console.log(computer.processor);

