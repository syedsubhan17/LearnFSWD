// const response = axios.get('https://jsonplaceholder.typicode.com/todos')
// console.log(response)

// response
// .then((data)=>{console.log(data)})
// // if we get error and "then is getting rejecting"
// .catch((err)=>{console.log('Do something')})

// setTimeout(()=>{
//     console.log(response)
// },1000)

const fetchTodos = () => new Promise((resolve,reject) => {
    setTimeout(()=>{
        // resolve([{id:1, title:'todo1'},{id:2, title:'todo2'}])
        reject(new Error('someThing went wrong'))
    },3000)
})

fetchTodos().then((data)=>{console.log(data)})
.catch((err)=>{console.log(err)})