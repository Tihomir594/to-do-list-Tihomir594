//TODO: user enters input,click add task,take the text input and add to active list.characters need to exist to add task.//
//Click on active,completed, and all buttons.Look for items that fall into each category. If all display all items. If active display unchecked items. If if completed display checked items.
//if checkbox is checked move task to completed and strike through text,decrease text count.//
//If delete is clicked ,remove task list,decrease task count,Update UI.
const todoInput = document.getElementById('todoInput')
const todoCount = document.getElementById('todoCount')
const  todoList = document.getElementById('todoList')
const addtodo = document.getElementById('all')
const todocontainer = document.getElementById('todocontainer')

todoInput.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  paragraph.innertext = todoInput.value;
  todocontainer.appendChild(paragraph);
})

