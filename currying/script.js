//currying in js
//example f(a,b) into f(a)(b)


function f(a){
    return function(b){
        return `${a} ${b}`
    }
}


console.log(f(5)(6));


//sum(2)(6)(1)

function sum(a){
    return function(b){
        return function(c){
            return `${a+b+c}`
        }
    }
}

console.log(sum(2)(6)(1));


//q-2 -- 
 //evaluate("sum")(4)(2)
  //evaluate("multiply")(4)(2)
   //evaluate("divide")(4)(2)
    //evaluate("substract")(4)(2)

    function evaluate(operation){
        return function(a){
            return function(b){
            if(operation=='sum')
                return a+b;
            else if(operation=="multiply")
                return a*b;
            else if(operation=="divide")
                return a/b;
            else if(operation=="substract")
                return a-b;
            else 
            return "Invalid operation";
        }
    }
    }

    console.log(evaluate("sum")(4)(2));


    //infinite currying

    function add(a){
        return function(b){
            if(b) return add(a+b);
            return a;
        }
    }

    console.log(add(2)(3)(4)(5)(6)());
    

    //usecase of currying id dom manipulation
    function updateElementText(id){

    }
    

    //currying implementation
    //converts f(a,b,c) into f(a)(b)(c)

    function curry(func){
        return function curriedFunc(...args){ 

            if(args.length>=func.length){
                return func(...args);
            }
            else{
                return function(...next){
                    return curriedFunc(...args,...next)
                }
            }

        }
    }

    const summ = (a,b,c,d) => a+b+c+d;

    const totalSum = curry(summ);

    console.log(totalSum(1)(5)(6)(3));
    