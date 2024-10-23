
// sort works only for strings and not for numbers
let fruits =["banana", "apple", "plum", "orange", "mango"]
fruits.sort()

console.log(fruits)

//Sort numbers doesnt work directlty 
//Example:

var scores1 =[12,3,19,16,14]
console.log(scores1.sort())

// TO fix this we need custom logic as below to sort in ascending order

let sortingasc = scores1.sort((a,b)=>a-b);
console.log(sortingasc)

//to sort in descending order

let sortingDesc = scores1.sort((a,b)=>b-a);
console.log(sortingDesc)






// BubbbleSort example
// var arr3 =[5,6,1,3]

// function bubbleSort(arr3){
//     let len = arr3.length;
//     let swap;
//     do {
//         swap= false;
        
//             for(let j=0; j < len - 1; j++ ){
//     //swap
//                 if(arr3[j] > arr3[j+1]) {
//                     let temp = arr3[j];
//                     arr3[j]=arr3[j+1]; //swapping here
//                     arr3[j+1]=temp;
//                     swap = true;
    
//                 }
//                 console.log(j);
//             }
        

//     }while(swap);

    
// return arr3;

// }

// console.log(bubbleSort(arr3))


