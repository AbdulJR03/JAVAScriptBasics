// block of code

function add (a,b){
    return a+b;
}

let sum = add(2,3)

console.log(sum)

//func does not have name "=>" Anonymus function - Funciton expressions

let sumOfIntegers = function (c,d){
    return c+d;
}

console.log(sumOfIntegers(2,3))

//simplify funciton more using fat pile operator => and use anonymus functions like below

let sumOfNumbers = ((a,b)=>a+b);
console.log(sumOfNumbers(3,5));

