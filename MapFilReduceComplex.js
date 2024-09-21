//print firstname and last name from array
//map is used to get multiple values from data
const employees = [
    { "firstName": "John", "lastName": "Doe", age: 26 },
    { "firstName": "Anna", "lastName": "Smith", age: 50 },
    { "firstName": "Peter", "lastName": "Jones", age: 70 },
    { "firstName": "Arshad", "lastName": "JR", age: 50 },
    { "firstName": "Nusrat", "lastName": "JRWifey", age: 26 }
];

const output = employees.map((x) => x.firstName + " " + x.lastName + x.age, 0)


console.log(output)
//Reduce is used to iterate through array of string and values and come up with a set of value
//print the no of matching ages with age and no of ages Ex: acc ={ 26:2 , 50:2 , 70:1}


const output2 = employees.reduce(function (acc, curr) {
    if (acc[curr.age]) {

        acc[curr.age] = ++acc[curr.age];

    }

    else {

        acc[curr.age] = 1
    }
    return acc;
}, {});

console.log(output2)

// Chaining of Filter and Map funcitons:
// Filter the number of people whose age is below 30 and create and array with firstnames
//Using filter and map function

const output3 = employees.filter((x) => x.age < 30).map((x) => x.firstName)

console.log(output3)


const output4 = employees.reduce(function (acc, curr) {
    if (curr.age < 30) {
        acc.push(curr.firstName);
        //acc=[...acc, curr.firstName ];
    }

    return acc;
}, []);
console.log(output4)
