const heading = document.querySelector(`h1`)
const body = document.querySelector(`body`)
const content = document.querySelector(`p`)
// const todos = ['task1','task 2', 'task 3']
const list = document.querySelector(`ul`)
const input = document.querySelector(`input`)

const toggleTheme = ()=>{
    if(body.classList.contains('light')){
        body.classList.remove('light')
        body.classList.add('dark')
    }else{
        body.classList.remove('dark')
        body.classList.add('light')
    }
}

// console.log(heading.classList)
// heading.classList.add('red')
// heading.classList.add('sm')
// console.log(heading.classList)

// todos.forEach((todo)=>{
//     const li = document.createElement(`li`)
//     li.innerHTML=todo
//     console.log(li)
//     list.appendChild(li)
// })

// const handleClick = ()=>{
//     const data = input.value
//     if(data===''){
//         return alert('Please enter the value or item')
//     }
//     const li = document.createElement(`li`)
//     li.innerHTML=input.value // here "value is ised to take input"
//     console.log(li)
//     list.appendChild(li)
// }

// use to learn click
// const handleClick = ()=>{
//     console.log('clicked')
// }

// const li = document.createElement(`li`)
// const textInsideli = document.createTextNode('task 4')
// li.appendChild(textInsideli)
// // li.innerHTML = 'task 4'           
// console.log(li)

// now to make changes
// heading.innerHTML = "add stuff into heading"  // this 1 method to make changes
// heading.innerHTML = `
//     <span style="color: red">Hello</span> World! ! !
// `

// console.log(heading.innerHTML) // this show output of what is inside heading
// console.log(heading.textContent) // this show output what is text content init.


//     const li = document.createElement(`li`)
//     li.innerHTML=todo
//     console.log(li)
//     list.appendChild(li)