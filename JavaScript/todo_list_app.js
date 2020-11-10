// inital prompt - What would you like to do?

// new - add a todo
// list - list all todo's (including index)
// delete - remove specific todo (by index)
// quit - quit app (OK, you quit the app)

let userInput = prompt('What would you like to do?');
let todos = [];
while (userInput.toLowerCase() !== 'quit') {
    if (userInput.toLowerCase() === 'new') {
        let newTodo = prompt('Please enter a new todo.');
        todos.push(newTodo);
        userInput = prompt('What would you like to do?');
    } else if (userInput.toLowerCase() === 'list') {
        console.log('***** ToDo List *****');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***** END *****');
        userInput = prompt('What would you like to do?');
    } else if (userInput.toLowerCase() === 'delete') {
        let deleteIndex = parseInt(prompt('Please enter the index of the todo that you would like to delete.'));
        console.log(`You have deleted: ${todos.splice(deleteIndex, 1)}`);
        userInput = prompt('What would you like to do?');
    } else {
        userInput = prompt('Please enter a valid menu option.');
    }
}
console.log('Thank you for using the ToDo List app.  You are now exiting the program.');