function addTask() {
  var taskInput = document.getElementById("inputTask");
  var task = taskInput.value;
  if(task.trim()===''){
    alert("Please type a task")
    return;
  }
  var li = document.createElement("li");
  li.className = "task";
  var span = document.createElement("span");
  span.className = "item-task"
  span.innerHTML = task;
  

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerHTML = "Delete";
  deleteBtn.onclick = deleteTask;
  deleteBtn.style.color='red'

  var editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.innerHTML = "Edit";
  editBtn.onclick = editTask;
  editBtn.style.color='green'

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);


  var taskList = document.getElementById("taskList");
  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(e) {
  var task = e.target.parentElement;
  var taskList = task.parentElement;
  taskList.removeChild(task);
}

function editTask(e){
    var task = e.target.parentElement;
    var input = document.createElement("input");
    input.className = "input";
    input.type = "text";
    input.value = task.firstChild.innerHTML;
    task.replaceChild(input, task.firstChild);
    e.target.innerHTML = "Save";
    e.target.onclick = saveTask;
}
    
    function saveTask(e) {
    var task = e.target.parentElement;
    var input = task.firstChild;
    var span = document.createElement("span");
    span.innerHTML = input.value;
    task.replaceChild(span, input);
    e.target.innerHTML = "Edit";
    e.target.onclick = editTask;
} 
