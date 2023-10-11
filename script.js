// const response = axios.get('https://jsonplaceholder.typicode.com/todos')
// console.log(response)

// response
// .then((data)=>{console.log(data)})
// // if we get error and "then is getting rejecting"
// .catch((err)=>{console.log('Do something')})

// setTimeout(()=>{
//     console.log(response)
// },1000)

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>{
    console.log(response)
    const data = response.json()
    console.log(data)
    data.then(newData=>{console.log(newData)}) //give soo many arrays
})