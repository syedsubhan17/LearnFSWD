// here we are learning ES6

// concatination of strings
const stra = 'hello'
// const strb = 'world'
// console.log(stra + " " + strb)

// const newS = `${stra} ${34+56}`
// console.log(newS)

const arr = ['subhan','subhan1','subhan2','subhan3','subhan4']

const [name1,name2,name3,name4] = arr
const obj ={
    name:'subhan',
    cars:['SVG63','918','Aventador','Miura'],
    address:{
        city:'Parbhani',
        state:'Maharashtra',
    }
}
// const {name,cars,address} = obj
// const {cars:pizza} = obj
// console.log(pizza)

// // const {cars: [car1,]} = obj
// const {cars: [,,,car4]} = obj
// console.log(car4)

// const {address:{city:peronsCity}} = obj
// console.log(peronsCity)

// this is destructured way
// const name1 = arr[0]
// const name2 = arr[1]
// const name3 = arr[2]
// const name4 = arr[3]
// console.log(name1,name2,name3,name4)

//spread operatetor
// const arr2 = [...arr,1,2,3,4]
// const arr3 = arr
// console.log(...arr2)
// arr[0] = 'syed'
// console.log(arr2)
// console.log(arr3)

// this is in spread operator
const obNew = {
    ...obj,
    age:21
}
obj.name = 'Doe'
obj.address.city = 'Parbhani'
obj.address.state = 'Maharashtra'
console.log(obNew)
// when u use spread operator over an object and it create a shallow clone

// learn the shallow cloning and deep cloning
// shallow cloning example- line 53, 54 , 55

// REST operators
const sum = (...rest) =>{
    console.log(rest)
}
sum(1,2,3,4,32,46,87,76,6,666)

const sum1 = (...params) =>{
    return params.reduce((prev,sum) =>prev+sum1,0)
}
console.log(sum1(1,2,4,5,32,3))