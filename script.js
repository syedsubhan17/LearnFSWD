//reaming part you will find in day-22

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

const a = {
    name:'subhan',
    age:22,
    isMarried: false,
    greet: function(){
        console.log('hello !!')
    }   
}
// const b = {}
for(let key in a){
    console.log(key)
}