//map method

//it creastes a new array populated with the results of calling a provided fn
//on every element in

var nums=[1,2,3,4];

// nums.map((num) => {
//     console.log(num*5);
// })


//filter method 
// it creates a new array with all the elements that pass the 
//test implememted bu the provided fn.

// let o = nums.filter((num) => {
//  return num<3;
    
// })


// console.log(o);


//reduce method 
// executes a reducer fn on each ele of the array, resulting in 
//single output value

let p= nums.reduce((num,sum) => {
    sum+=num;
    return sum;
},0)

console.log(p);

//map polyfill

Array.prototype.myMap=function(cb) {
    let temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }

    return temp;
}

const multiplyBy5=nums.myMap((num) => {
    return num*5;
})

console.log(multiplyBy5);


//filter polyfill

Array.prototype.myFilter = function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            temp.push(this[i]);
        }
    }

    return temp;
}
 

let filter= nums.myFilter((num) => {
    return num<4
})

console.log(filter);


//reduce polyfill

//arr.reduce((acc,curr,i,arr) => {},initialValue)

Array.prototype.myReduce= function(cb,initialValue){
        var acc= initialValue;
        
        for(let i=0;i<this.length;i++){
            acc=acc?cb(acc,this[i],i,this): this[i];
        }

        return acc;
}

const nums1=[1,2,5,6,7];

const sum = nums1.myReduce((num,sum) => {
  return sum+num;
},0)

console.log(sum);


