//reaming part you will find in day-22

// Array Methods: you can store anything in array
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const arr1 = ['syed','subhan','kawasaki','suzuki','YaMaHa','Honda','TVS']
// console.log(arr)

// arr.push(11) //add element from end of array
// console.log('add element from end of array ' +arr)

// arr.pop()
// console.log('add element from end of array' +arr)

// console.log(arr.length) // to check the length of array
// console.log('the current lenght of array is ' + arr.push(11)) //give updated value of array

// arr.unshift(0)  // add element in array from beging of array
// console.log('add element in array from beging of array '+arr)
// console.log('the current lenght of array is '+arr.unshift()) //give updated value of array

// arr.shift()  // removes element in array from beging of array
// console.log('removes element in array from beging of array '+arr)
// console.log('the current lenght of array is '+arr.shift())


// // we are going to learn: forEach, map, filter, find, reduce, findIndex
// // forEach

// // for(let i = 0; i <arr.length; i++){
// //     console.log(arr[i])
// // }

// const callbackFunc = function(item, index){
//     console.log(potato, index);

// }
// arr1.forEach(function(item,index){
//     console.log(item, index);
// });
// // arr.forEach(callbackFunc)

// const arr3 = [1,2,3,4,5,6,7,8,9,10]
const newArr3 = []
const exampleArr = [34, 21, 23]
// // approach1:
// for(let i = 0; i <arr3.length; i++){
//     newArr3.push(arr3[i]*19) // this is a simple loop
// }
// console.log("approach 1:")
// console.log(newArr3)
// console.log(exampleArr)

// // approach 2:
// arr3.forEach(function(item){
//     newArr3.push(item*19) //in forEach we dont need to retun any thing
// })
// console.log("approach 2:")
// console.log(newArr3)

// // approach 3:
// const newArr3a = arr3.map(function(item){
//     return item*19 //in map evertime we have to return something
// })
// console.log("approach 3:")
// console.log(newArr3a)

// // lets talk about reduce :
// // reduce approach 1:
// let res = 0
// for (let i = 0; i<arr.length; i++){
//     res+=arr3[i]
// }
// console.log(res)

// // reduce approach 2:
// const reduceFunction = function(previousvalue,currentitem){
//     return previousvalue + currentitem
// }
// const res2 = arr3.reduce(reduceFunction,0)
// console.log(res2)
// console.log("")

// // example array
// const reduceFunction1 = function(previousvalue,currentitem){
//     console.log(previousvalue,currentitem)
//     return previousvalue + currentitem
// }
// const res2a = exampleArr.reduce(reduceFunction1,0)
// console.log("result is "+res2a)

// const a = {
//     name:'subhan',
//     age:22,
//     isMarried: false,
//     greet: function(){
//         console.log('hello !!')
//     }   
// }
const b = {}
// for (let key in a){
//     console.log(key)
// }
// // this are type of itration in js
// console.log(Object.keys(a))
// console.log(Object.values(a))

const reduceFunction= function(previousvalue,currentItem){
    console.log(previousvalue,currentItem)
    previousvalue[currentItem] = a[currentItem]
    return previousvalue
}

// const fibonacci = [1,1]
// for(let i = 1; i < 10; i++){
//     fibonacci.push(fibonacci[i]+fibonacci[i-1])
// }
// console.log(fibonacci)

// Object.keys(a).reduce(reduceFunction,b)
// console.log(b)

// Array(10).fill(0).reduce(function(prev,curr){
//     console.log(prev,curr)
//     fibonacci.push(prev)
//     return prev + curr
// },1) // this is type of reduce in js
// console.log(fibonacci)

// you can fill the array value for particular value by doing this
// console.log(Array(10).fill(1))

const arr4 = [{name:'John',age:30},{name:'Doe',age:22},{name:'Jane',age:25},{name:'Jack',age:28}]

// for(let i = 0;i<arr.length;i++){
//     const item = arr[i]
//     if(item.name==='Jane'){
//         console.log('Jane found')
//         break
//     }
// }

// const findfn = function(item,index){
//     if(item.name==='Jane'){
//         return true
//     }
// }
// const ele = arr.find(findfn)
// console.log(ele)

// using filter function
// const filterFn = function(item,index){
//     if(item.age > 25){
//         return true
//     }
// }
// const res = arr4.filter(filterFn)
// console.log(res)

// using splice function
// const arr5 = [34,21,23]
//splice  can be used to either remove or add an alement into an array in js
// arr5.splice(1,0,100)
// arr5.splice(2,0,99)
// arr5.splice(1,0,54)

// console.log(arr5)

// console.log(arr5.splice(1,2))
// console.log(arr5)

// // lets talk about arrow functions
// const greet = function(){
//     console.log('hello') // this is normal func
// }
// const arrowgreet = ()=>{
//     console.log('hello') 
// }
// arrowgreet() // this is arrow func

// const sum = function(a,b){
//     return a+b
// }
// const arrowsum = (a,b)=> a+b
// console.log(arrowsum(12,43))

// //another example
// const square = function(a){
//     return a**2
// }
// const arrowsquare = a => a**2
// console.log(arrowsquare(12))

// create an array with age 25 using arrow func
// const newArr = arr4.filter(item=>item>25)
// console.log(newArr)

// const arr = [34,21,23]
// const sum = arr.reduce((prev,curr)=>prev+curr,0)
// console.log(sum)

// const Car = function(brand,name){
//     this.brand = brand
//     this.name = name
// }
// const car = new Car('Porche','991 992 GT3 R15')
// console.log(car)
    // in below example u cant use the arrow function in constructor
// const Car1 = function(brand,name)=>{
//     this.brand = brand
//     this.name = name
// }
// const car1 = new Car1('Porche','991 992 GT3 R15')
// console.log(car1)

// const obj = {
//     name:'john',
//     greetNormal: function(){
//         console.log(this)
//     },
//     greetArrow: ()=>{
//         console.log(this) //"this" inside points to global object
//     }
// }
// obj.greetNormal()
// obj.greetArrow()

const greet = function(Name='Syed Subhan',age=99){
    console.log("Hello "+Name+" your age is "+age)
}
// console.log(greet)
// console.log(greet("john,30"))
greet()