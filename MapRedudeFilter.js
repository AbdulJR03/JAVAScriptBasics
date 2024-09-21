/*let marks = [1,2,3,4,5]
var total = marks.reduce((sum,mark)=>sum+mark ,0)

console.log(total)
*/

//Map function
//For Ex: Converting array to binary
//Syntax: 

const arr = [1, 2, 3, 4, 5, 6];


function double(x) {
    return x * 2;
}

const sum = arr.map(double)
console.log(sum)


//OR

const sum1 = arr.map((x) => x * 2)
console.log(sum1)

//to convert array to binary number
const output = arr.map((y) => y.toString(2));
console.log(output)




//Filter Function
//to find numbers in array greater than 4 

const output2 = arr.filter((i) => i > 4);
console.log(output2)


//Reduce Funciton:
// Find the sum of an array

//Normal funciton

function findsum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findsum(arr));

//Reduce funciton
//Reduce funciton is used to get single value or reduced value as result.
const reducedSum = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;

}, 0)
console.log(reducedSum)

//direct reduce modern function to find sum

const modernreduce = arr.reduce((acc, curr) => acc + curr, 0);
console.log(modernreduce)


//find max using reduce 

function findmax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

    }
    return max;
}
console.log(findmax(arr))

const reducemax1 = arr.reduce(function (max, curr){
    if(curr > max){

        max=curr;

    }
    return max;
}, 0)

console.log(reducemax1)

//modern reduce

const reducemax2 = arr.reduce((max , curr)=> {if(curr>max)
    {
        max = curr
    }
    return max ;
}
     , 0)
console.log(reducemax2)

