//start...


var input = document.getElementById('memo');
var list = document.getElementById('list');
var remove = document.getElementById('delete');
var form = document.querySelector('.new-task');
var btn = document.getElementById("delete");


function addTodo(event){

    var todo = input.value;
    console.log(event);
    insertTodo(todo);
    input.value=''
    
    event.preventDefault();
    
}


form.addEventListener('submit', addTodo);

function insertTodo(todo){

    var html = `<li>
    <button class="delete">×</button>
    <input type="checkbox" class="toggle-checked">
    <span class="text">${todo}</span>
  </li>`

  list.innerHTML += html;
}


btn.addEventListener('click', removeTodo);


function removeTodo(event){
    console.log(event);
    
list.innerHTML -=html;
}

