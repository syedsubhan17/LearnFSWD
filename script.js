// methods for retriving dom nodes
// adding event listeners
const node = document.getElementById('heading');
node.innerHTML = 'Hello world from js';
node.innerHTML = `
<i> this is also a heading</i> <br>
<b> this is bold from html<b>`
console.log(node)
console.dir(node)