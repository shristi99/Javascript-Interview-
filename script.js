
//function declaration -- its a way to define the function using the fn keyword

function square(num){
   return num*num;
}


//function expression -- when we store the function in the variable
const sq= function (num){
    return num*num;
} 

console.log(sq(5));

//what is first class function?


function displaySquare(fn){
   console.log("sqaure is" ,fn(10));
   
}

displaySquare(square);

//iife  -- immmediately invoked function expressions

(function tripple(num){
    console.log(num*num*num);
    
})(5)


//imp interview question
for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
        
    },i*1000)
}

//0 1 2 3 4


//spread vs rest operator
function multiply(num1,num2){
    console.log(num1*num2);
    
}

var arr=[5,6];
multiply(...arr) //spread

function mul(...nums){ //rest ope
  console.log(nums);
  
}

mul(5,6)


//callback function 
//A callback function is a function that is passed as an argument to another function and is executed later,
//usually after some operation is completed.


function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);


//examples  -- setTimeout, add eventlistener, map,filter,reduce


//arrow functions
const add = (firstNum,secondNum) => firstNum + secondNum;

//difference b/w arrow and normal function

//1 - syntax

function squ(num){
    return num*num;
}

const squ= (num) => {
    return num*num;
}


//2 - implicit return keyword
//3 - arguments
//4 - this keyword