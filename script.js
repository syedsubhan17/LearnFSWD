// JSON = JavaScript Object Notation

// const obj1 = {
//     name: 'subhan',
//     age:22,
// }

// const obj = {
//     name: 'subhan',
//     age:22,
//     isMarried: false,
//     greet: function(){
//         console.log('hello !!')
//     },
//     address:{
//         city:'parbhani',
//         state:'Maharashtra',
//         pincode:'431401',
//     },
//     hobbies: ['netflix','marvel','FSWD'],
//     // obj1:obj1, //this is example of predefined object
//     marvelmovies: 'captainamerica',
// }
// obj.greet()

// console.log(obj.hobbies)
// console.log(obj['hobbies'])

function greet(Name,age){
    console.log('hello '+Name+' your age is ' )
    // console.log('hey '+Name + ' your age is '+age)
}
// const result //this doesn't work but it will workwith next line
// let result //this is will give u undifined 
// const result = greet()
// console.log(result)

// function greet(Name,age,city){
//     console.log('hello '+Name+' your age is '+'and you lives in '+city)
// }
// console.log(greet())

// greet1('greet2',30)
// function greet1(Name,age){
//     console.log('hello '+Name+' your age is '+age)
// }

// greet2('greet1',30)
// var greet2 = function(Name,age){
//     console.log('hello '+Name+' your age is '+age)
// }

// console.log(this)

// const obj = {
//     name:'subhan',
//     greet:function(){
//         console.log(this)
//     }
// }
// obj.greet()

//lets see about classes
class Car{
    constructor(name,model){

    }
    move(){
        console.log('car is moving')
    }
}
const car1 = new Car('Audi','A8')