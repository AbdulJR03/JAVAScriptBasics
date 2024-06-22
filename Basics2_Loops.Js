const flag = true

//If condition is true loop gets executed only oen time
if (!flag)
    {
        console.log("condition satisfied")
    }

    else
    {
        console.log("condition not satisfied")
    }
   
//while: when condition is true the loop keeps on running n number of times
//use whenever there is variable which can manipulate the flow
let i =0
while(i<10)
    {
        i++
        console.log(i)
    }

//do while : one round of loop runs before checking the condition

do{

i++

}while(i<20);
console.log(i)
    

for(let k=0 ; k<=10; k++)
    {
        console.log(k)

    }

let required = true
while(required)
    {
        console.log(required)
        required = false
    }
console.log("******************************")
let n =0
for (let j=1; j<=100; j++){
//Nested if block
    if( j%2 ==  0 && j%5 == 0)
        {
            n++
            console.log(j )
            if(n==3)
            break

            //use break condition to break the loop of exexution
        }
}


let x = 0
for(let y=1; y<=100; y++ )
    {

        if(y%2==0 && y%5==0)
            {
                x++  //used to increment the total count counter
               console.log(y)
               if(x==5)  //used to print first 5 resutls
                break
            }
    }

