//localStorage.clear();
//Selector
let todoInput = document.getElementById("todo_input");
let todoButton = document.getElementById("todo_btn");
let todoList = document.getElementById("list");
let filterOption = document.getElementById('filter-todo')





//Event Listener
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);






//Functions
function addtodo(event) {
    //Prevent from form submiting
    event.preventDefault();

    //todo div
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');



    //Complete Button
    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
    completedButton.classList.add('complete_btn');
    todoDiv.appendChild(completedButton);

      
    //create LI
    let li_todo = document.createElement('li');
    li_todo.innerText =todoInput.value;
    li_todo.classList.add('items');
    todoDiv.appendChild(li_todo);


    //Add Todo At Local Storage
    saveLocalTodos(todoInput.value);
    



    //Trash Button
    let trash = document.createElement('button');
    trash.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trash.classList.add('trash_btn');
    todoDiv.appendChild(trash) ;
    todoList.appendChild(todoDiv);

    //Clear previous Value
    todoInput.value="";
 

}

function deleteCheck(e){
    //console.log(e.target)
    let item=e.target;


    //Delete

    if(item.classList[0]==='trash_btn'){
        let todo = item.parentElement;
        todo.remove();  
        removeLocalTodos(todo);

       
    }

   
    //Complete
    if(item.classList[0]==='complete_btn'){
        let todo = item.parentElement;
        todo.classList.toggle('completed');

        
    }
 
}


function filterTodo(e){
    let todos=todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display='flex';
               

                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display='none';
                }
            break;
            case "uncompleted":
                    if(!todo.classList.contains('completed')){
                        todo.style.display='flex';

                    }
                    else{
                        todo.style.display='none';
                    }
            break;
        }
    });
}

function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos =[];
    }
    else{ 
        todos=JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
};

function getTodos(){
    
    let todos;
    if(localStorage.getItem("todos")===null){
        todos =[];
    }
    else{ 
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){

        //todo div
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');



    //Complete Button
    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
    completedButton.classList.add('complete_btn');
    todoDiv.appendChild(completedButton);


    //create LI
    let li_todo = document.createElement('li');
    li_todo.innerText =todo;
    li_todo.classList.add('items');
    todoDiv.appendChild(li_todo);

    //Trash Button
    let trash = document.createElement('button');
    trash.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trash.classList.add('trash_btn');
    todoDiv.appendChild(trash) ;
    todoList.appendChild(todoDiv);
    });
}


function removeLocalTodos(todo){
    if(localStorage.getItem("todos")===null){
        todos =[];
    }
    else{ 
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    let todoIndex =todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem('todos', JSON.stringify(todos));
}