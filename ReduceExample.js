
//reduce example with multiple array  iterations

var sum = 0
var marks = [10,20,30,40,50,13,16,17,31]
let totalmarks= marks.reduce((sum,mark)=>sum+mark, 0)
console.log(totalmarks)

var Mulof2= []
 
for (i=0; i<marks.length ; i++){

    if(marks[i]%2==0){

        Mulof2.push(marks[i])

    }
}
console.log(Mulof2)

let evenscoresfilter=marks.filter((mark)=>mark%2==0)
console.log(evenscoresfilter)