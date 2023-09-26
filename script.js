const body = document.querySelector(`body`);
const textbox = document.querySelector(`h1 span`);
const heading = document.querySelector(`h1`);

let count = 0;
heading.addEventListener('click',(event)=>{
    console.log(event)
    textbox.innerText = ++count;
})

//  this will track keyword pressed in the body
// body.addEventListener('keydown',(event)=>{
//     console.log(event.key)
// })

// this track every movement of mouse
// body.addEventListener('mousemove',(event)=>{
//     console.log({
//         x: event.clientX,
//         y: event.clientY,
//     })
// })