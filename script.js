const heading = document.querySelector(`h1`)
const body = document.querySelector(`body`)
const content = document.querySelector(`p`)

// now to make changes
// heading.innerHTML = "add stuff into heading"  // this 1 method to make changes
// heading.innerHTML = `
//     <span style="color: red">Hello</span> World! ! !
// `

// console.log(heading.innerHTML) // this show output of what is inside heading
// console.log(heading.textContent) // this show output what is text content init.

// learning setInterval
// const log = ()=>{
//     console.log(`i'm a log`)
// }

// setInterval(log, 1000)

// // in js we have global date
// const date = new Date()
// console.log(date) // this is teached on Thus 1 jun 23 19:54:16 // and iam learnig mon 25sep23 17:27:--

// Lets create a counter
let count = 0;
const log = ()=>{
    heading.innerHTML = count++
}
setInterval(log, 1000)