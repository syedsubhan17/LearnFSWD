// JSON = JavaScript Object Notation
const obj1 = {
    name: 'subhan',
    age:22,
}

const obj = {
    name: 'subhan',
    age:22,
    isMarried: false,
    greet: function(){
        console.log('hello !!')
    },
    address:{
        city:'parbhani',
        state:'Maharashtra',
        pincode:'431401',
    },
    hobbies: ['netflix','marvel','FSWD'],
    // obj1:obj1, //this is example of predefined object
    marvelmovies: 'captainamerica',
}

console.log(obj.hobbies)
console.log(obj['hobbies'])