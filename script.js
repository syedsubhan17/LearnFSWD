const addTodoBtn = document.querySelector(`button.add-todo`);
const input = document.querySelector('input.add-todo');


let todos = [];

const randomId = () => {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
  };
  console.log(randomId());
  