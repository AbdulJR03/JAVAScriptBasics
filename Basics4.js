var sum = 0
var marks = [10,20,30,40,50]
let totalmarks= marks.reduce((sum,mark)=>sum+mark, 0)
console.log(totalmarks)