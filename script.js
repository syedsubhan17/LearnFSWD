// console.log(1)
// for (let i = 0; i < 100; i++){
//     console.log('loop')
// }
// console.log(2)
// console.log(3)

console.log(1)

setInterval(()=>{
    console.log(4)
},0)

setTimeout(()=>{
    console.log(2)
},0)

for(let i = 0; i < 100; i++ ){ //use 1k or 10k instead of 100
    console.log('loop')
}

console.log(3)