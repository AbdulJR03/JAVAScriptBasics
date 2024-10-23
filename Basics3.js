//Arrays

//let marks = Array(6)
//var marks = new Array(10,20,30,40,50)

var marks =[10, 20, 30, 40, 50]
submarks = marks.slice(1,4) //prints(firstvalue, lastvalue-1 index) considers index 1 till index 3 and prints till 3rd index only if given as 4. "last value-1"
console.log(submarks)
console.log(marks[2]) //30
marks[3] = 10 //
console.log(marks)// 10,20,30,10,50
console.log(marks.length) //gives length of the array
marks.push(60) //appends new element to the end of array
console.log(marks)
marks.pop() //deletes the last entry form the array
console.log(marks)
marks.unshift(10)//adds to the start of the array    
console.log(marks)
console.log(marks.indexOf(50)) // give the index of the value present in the array
console.log(marks.includes(10)) // to check if the array contains the following value

//program to print all the elements of an array

for (i=0; i<marks.length; i++){

    console.log(marks[i])
}

//program to sum all the elements in an array

var sum =0

for (i=0; i<marks.length; i++){

    sum = sum + marks[i]
    
}
console.log(sum)

//Reduce Filter Map Methods:
 //reduce is used to implement above loop within a single sentence

let total = marks.reduce((sum,mark)=>sum+mark, 0)
console.log(total)

//Create a new array of even numbers from a provided array

var scores = [10, 11, 12, 14, 16]
console.log(scores)
var evenscores =[]  //create a empty seocnd array

for(i=0; i<scores.length ; i++){

    if(scores[i]%2 == 0)
        {
            evenscores.push(scores[i])   //used to push even numbers one by one to evenscores
        }
    
}
console.log(evenscores)

let evenscores2 = scores.filter((score)=>score%2==0)
console.log(evenscores)
//added new cmment to check git commit
const multipyEvenscoreswith3 = evenscores.map((x)=>x*3)
console.log(multipyEvenscoreswith3)
//sum multiplied array values
let TotalVal= multipyEvenscoreswith3.reduce((sum,val)=>sum+val, 0)
console.log(TotalVal)

//write in chaining all 3 functions together

let scores1 =[10,12,13,14,16]
let singlefunctionsum= scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,acc)=>sum+acc,0);
console.log(singlefunctionsum)
