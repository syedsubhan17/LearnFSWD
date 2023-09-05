// learning with class and constructor
// class Car{
//     constructor(){
//         console.log('constructor was called')
//     }
// }
// const car1 = new Car()  //the 'new' keyword is vIMP it helps in creating object

// console.log(car1)

//variable and class have same scopes
class Car{
    age = 22
    adult=true
    constructor(name,brand){
        console.log(this)
        // this.name = name
        // this.brand = brand
        // this.age =21
    }
    greet(){
        console.log('hello '+this.name + ' your age is '+ this.age)
    }
}

// const car1 = new Car('C300d','Mercedes')

// car1.greet()

// learning Factory functions:
// function Bikes(brand, name){
//     // console.log(this) // 'this refers to global scope\variable
//     this.name = name
//     this.brand = brand

// }
// // const bike1 = Bikes()
// const bike1 = new Bikes('KTM', 'Duke 390')
// console.log(bike1)

// object pass by reference
// const obj = {
//     name: 'subhan',
//     age: 22,
//     age1:22
// }

// const obj2 = obj
// obj.name = 'syed'
// obj.age1 = 23
// console.log(obj2)


// object pass by value
// let a = 3
// let b = a
// a+=25

// console.log(b)
// console.log(a)


// Array Methods: you can store anything in array
const arr = [1,2,3,4,5,6,7,8,9,10]
const arr1 = ['syed','subhan','kawasaki','suzuki','YaMaHa','Honda','TVS']
console.log(arr)

arr.push(11) //add element from end of array
console.log('add element from end of array ' +arr)

arr.pop()
console.log('add element from end of array' +arr)

console.log(arr.length) // to check the length of array
console.log('the current lenght of array is ' + arr.push(11)) //give updated value of array

arr.unshift(0)  // add element in array from beging of array
console.log('add element in array from beging of array '+arr)
console.log('the current lenght of array is '+arr.unshift()) //give updated value of array

arr.shift()  // removes element in array from beging of array
console.log('removes element in array from beging of array '+arr)
console.log('the current lenght of array is '+arr.shift())


// we are going to learn: forEach, map, filter, find, reduce, findIndex
// forEach

// for(let i = 0; i <arr.length; i++){
//     console.log(arr[i])
// }

const callbackFunc = function(item, index){
    console.log(potato, index);

}
arr1.forEach(function(item,index){
    console.log(item, index);
});
// arr.forEach(callbackFunc)

const arr3 = [1,2,3,4,5,6,7,8,9,10]
const newArr3 = []
const exampleArr = [34, 21, 23]
// approach1:
for(let i = 0; i <arr3.length; i++){
    newArr3.push(arr3[i]*19) // this is a simple loop
}
console.log("approach 1:")
console.log(newArr3)

// approach 2:
arr3.forEach(function(item){
    newArr3.push(item*19) //in forEach we dont need to retun any thing
})
console.log("approach 2:")
console.log(newArr3)

// approach 3:
const newArr3a = arr3.map(function(item){
    return item*19 //in map evertime we have to return something
})
console.log("approach 3:")
console.log(newArr3a)

// lets talk about reduce :
// reduce approach 1:
let res = 0
for (let i = 0; i<arr.length; i++){
    res+=arr3[i]
}
console.log(res)

// reduce approach 2:
const reduceFunction = function(previousvalue,currentitem){
    return previousvalue + currentitem
}
const res2 = arr3.reduce(reduceFunction,0)
console.log(res2)
console.log("")

// example array
const reduceFunction1 = function(previousvalue,currentitem){
    console.log(previousvalue,currentitem)
    return previousvalue + currentitem
}
const res2a = exampleArr.reduce(reduceFunction1,0)
console.log("result is "+res2a)