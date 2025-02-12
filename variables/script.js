//var let and const



// let name,admin;
// name="John";
// admin=name;
// alert(admin)


// let name = prompt("what is your name?","");
// alert(`Hello ${name}`);

//use strict --> to avoid the common errors

let a=5;
console.log(a);



//for while for of, for in for each

// for(let i=0;i<10;i++){
//     console.log("2 x "+ i + "=" + 2*i);
    
// }


// var i=1;
// while(i<=10){
//     console.log(i);
//     i++;

// }

//for of
// let arr=[10,20,30,40];


// for(let i of arr){
//     console.log(i);
    
// }

//for in
// for(let i in arr){
//     console.log(arr[i]);
    
// }

//for each
const nums=[1,2,3,4,5,6,7,8];
const details=[];

nums.forEach((num) => {
   details.push(num*num);
//    return s;
 
})

console.log(details);

// console.log(u);

//map
let p=nums.map((num) => {
    return num;
})

console.log(p);
