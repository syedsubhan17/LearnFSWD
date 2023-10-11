// const response = axios.get('https://jsonplaceholder.typicode.com/todos')
// console.log(response)

// response
// .then((data)=>{console.log(data)})
// // if we get error and "then is getting rejecting"
// .catch((err)=>{console.log('Do something')})

// setTimeout(()=>{
//     console.log(response)
// },1000)

// this is a responce object
const response = fetch('https://jsonplaceholder.typicode.com/todos')

response.then(data => console.log(data))