// methods for retriving dom nodes
// adding event listeners
const node = document.getElementById('heading');
// console.log(node.innerHTML)
// lool both the get elementsbyId  line 3 is singular and line 6 is plural(using "s" cause it have multiple items)
const listItem = document.getElementsByClassName('list-item');
console.log(listItem); // this is returning the array in type of array
console.log(node);
console.log([1,2,3,])
// you can use dir
console.dir(node)
console.dir(listItem)

// querySelector - it default to macth the 1st which match
const element = document.querySelector(`h1`)
console.log(element)
const element1 = document.querySelector(`li`)
console.log(element1)

// querySelectorALL - it select all the matching elemants
const element2 = document.querySelectorAll(`li`) // this will give you a "Node list"
console.log(element2)
