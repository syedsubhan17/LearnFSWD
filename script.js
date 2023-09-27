const addTodoBtn = document.querySelector(`button.add-todo`);
const input = document.querySelector('input.add-todo');

// strucuture of todo
/*
title: string
completed: boolean
id: string
*/

let todos = [
    {
        id: "r3lw42",
        title: "learn Js",
        completed: false,
    }, //add elements
    {
        id: "r3lw43",
        title: "Learn React",
        completed: true,
    }
];

const randomId = () => {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
  };
  console.log(randomId());

  const addTodo = () => {};

  addTodoBtn.addEventListener("click", () => {});