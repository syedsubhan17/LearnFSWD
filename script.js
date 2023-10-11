// const response = axios.get('https://jsonplaceholder.typicode.com/todos')
// console.log(response)

// response
// .then((data)=>{console.log(data)})
// // if we get error and "then is getting rejecting"
// .catch((err)=>{console.log('Do something')})

// setTimeout(()=>{
//     console.log(response)
// },1000)

/*
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>{
    console.log(response)
    const data = response.json()
    data.then(newData=>{console.log(newData)}) //give soo many arrays
})
*/

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))
//  you can aslo add a to stop the stop the execution
// this concept is know as "Promise Chaining"
.catch(err=>console.log(err))