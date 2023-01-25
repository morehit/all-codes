const todos = ["walk max"]; 

let input = prompt("what would you like to do ?").toLowerCase();
const addNewTodo = () => {
     todos.push(prompt("what would you like to add")); 
}

const removeTodo= () => {
    //promt the user for which todo to be removed 
    const toBeRemoved = prompt("what would you like to remove"); 
    //search the todo in the todo list 
   const i =  todos.indexOf(toBeRemoved); 

    // if so remove it 
    if(i !== -1){
        console.log("item removed " + todos[i]); 
        todos.splice(i,1); 
       
    }else{
        // if not show the user error 
        console.log("That's not a item on your list "); 
    }
    


}

while(input !== "quit"){
    if(input === "show"){
        console.log(todos);
    }
    else if(input === "new"){
        addNewTodo(); 
    }
    else if(input === "remove"){
        removeTodo(); 
    }

    input = prompt("OK, what would you like to do now ").toLowerCase(); 
}

console.log("ALL done!"); 