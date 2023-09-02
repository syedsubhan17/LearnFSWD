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
    oldObject:obj1
}

console.log(obj)