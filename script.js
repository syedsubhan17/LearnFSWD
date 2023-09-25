const heading = document.querySelector(`h1`)
const body = document.querySelector(`body`)
const content = document.querySelector(`p`)
body.style = `
margin:0;
padding:0;
box-sizing:border-box;
`
// console.log(heading.innerHTML)
// console.log(body.innerHTML)
//innner.html too see and access what in html 

// now to make changes
heading.innerHTML = "add stuff into heading"  // this 1 method to make changes
heading.innerHTML = `
    <span style="color: red">Hello</span> World! ! !
`
// console.log(heading.innerHTML) // this show output of what is inside heading
// console.log(heading.textContent) // this show output what is text content init.

// now adding style from js
content.style = `
    background:#f1f1f1;
    padding:10px;
    color:blueviolet;
`