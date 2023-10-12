// const ul = document.createElement('ul')
// document.body.appendChild(ul)

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response=>response.json())
// .then(data=>{
//     data.forEach(todo=>{
//         const li = document.createElement('li')
//         li.innerHTML = todo.title
//         ul.appendChild(li)
//     })
// })

const fetchData = async()=>{
    try {
        console.log(3)
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    console.log(4)
    const data = await res.json();
    console.log(data);
    }
    catch{
        console.log(error);
    }
    finally {
        console.log('finally')
    }
};
console.log(1)
fetchData()
console.log(2)
for(let i = 0; i < 100; i++){
    console.log('blocker')
}