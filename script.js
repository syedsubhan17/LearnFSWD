const response = axios.get('https://jsonplaceholder.typicode.com/todos')
console.log(response)

// here we use "then" learn to use
response.then((data)=>{console.log(data)})

setTimeout(()=>{
    console.log(response)
},1000)