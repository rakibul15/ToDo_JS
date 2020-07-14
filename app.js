//Selector
let todoInput = document.getElementById("todo_input");
let todoButton = document.getElementById("todo_btn");
let todoList = document.getElementById("list");
let All = document.getElementById("all");
let Complete_list = document.getElementById("comp");
let to_do_list = document.getElementById("to_do");





//Event Listener
todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click",deleteCheck);






let count = 0;
let complete_count=0;
let flag=0;
let flag_2=0;
let todo_count=0;

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




    //Trash Button
    let trash = document.createElement('button');
    trash.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trash.classList.add('trash_btn');
    todoDiv.appendChild(trash) ;
    todoList.appendChild(todoDiv);
    count++;
    // console.log(count)

    //Clear previous Value
    todoInput.value="";

    //Count All
    All.innerText = 'All :' + count;
    

}

function deleteCheck(e){
    //console.log(e.target)
    let item=e.target;


    //Delete

    if(item.classList[0]==='trash_btn'){
        let todo = item.parentElement;
        todo.remove();
        count--;
        All.innerText = 'All :' + count;
        flag=1;
       
       
    };

    //Complete
    if(item.classList[0]==='complete_btn'){
        let todo = item.parentElement;
        todo.classList.toggle('completed');
        complete_count++;
        Complete_list.innerText= 'Completed: ' + complete_count;
        flag_2=1;
       
        
    };
    if(flag==1 && flag_2==1)
    {
        complete_count--;
        console.log(complete_count);
        Complete_list.innerText= 'Completed: ' + complete_count;
       
       
    };
    todo_count = count- complete_count;
    to_do_list.innerText ='Todo: '+  todo_count;
  
  
}
