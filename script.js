const ul = document.createElement('ul')
document.body.appendChild(ul)

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>{
    data.forEach(todo=>{
        const li = document.createElement('li')
        li.innerHTML = todo.title
        ul.appendChild(li)
    })
})
.catch(err=>console.log(err))