let input = prompt('what would you like to do?');
const todoList = ["Buy New Turtle"]
while(input != "q" && input!= "quit" ){
    if(input === "new"){
        newTodo = prompt("Enter new todo");
        todoList.push(newTodo);
        console.log(`${newTodo} added to list`);
        input = prompt('what would you like to do?');
    }
    else if(input === "list"){
        console.log("***********")
        for(item of todoList)
        {
            console.log(`${todoList.indexOf(item)}: ${item}`)
        }
        console.log("***********")
        input = prompt('what would you like to do?');
    }
    else if(input === "delete"){
        deleteItem = parseInt(prompt("Enter index to delete"));
        for(item of todoList)
        {
            if(todoList.indexOf(item) == deleteItem)
            {
                todoList.splice(deleteItem, 1);

            }
        
        }
        console.log("Todo Removed")
        input = prompt('what would you like to do?');
    }
    else{
        input = prompt('Invalid input. What would you like to do?');
    }
    
}

console.log("OK, YOU QUIT APP")

