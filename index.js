const toDosStore = ["Shopping", "Home work", "Go to the gym"];

const insertTodo = (newTodo) => toDosStore.push(newTodo);

const createTodos = (todos) => {
  for (let i = 0; i < todos.length; i++) {
    insertTodo(todos[i]);
  }
};
const removeItem = (orderNumber) => toDosStore.splice(orderNumber - 1, 1);

const editTodo = (orderNumber, newValue) =>
  (toDosStore[orderNumber - 1] = newValue);

const updateTodos = (todosOrder, newTodosValus) => {
  for (let i = 0; i < newTodosValus.length; i++) {
    console.log(i);
    // todosOrder = [2,4,6] i = 0 todosOrder[0] = 2
    let todoOrder = todosOrder[i];

    toDosStore[todoOrder - 1] = newTodosValus[i];
  }
  console.log(toDosStore);
};

insertTodo("test1");
insertTodo("test2");
insertTodo("test4");
insertTodo("test5");
console.log(toDosStore);
removeItem(3);
console.log(toDosStore);
editTodo(3, "Visiting Tommy");
console.log(toDosStore);
updateTodos(
  [2, 4, 6],
  ["Meet with PR department", "By milk", "Check the internet connection"]
);
