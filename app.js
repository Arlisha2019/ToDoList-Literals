let taskBox = document.getElementById('newTasks')
let button = document.getElementById('addButton')

let newTaskList = document.querySelector('#newTaskList')
let completedTask = document.querySelector('#completedTask')

let taskList = ''

function removeTask(sender) {
  console.log(sender)
  console.log(sender.parentElement)
  console.log("remove task")
}

function completed(check) {
  if(check.checked) {
    console.log("checked")
  } else {
    console.log("unchecked")
  }
  console.log('completed')
}


button.addEventListener('click', function() {

  let task = taskBox.value

  let taskItem = `
  <li>
    <input type='checkbox' onchange='completed(this)' />
    <label>${task}</label>
    <button onclick='removeTask(this)'>Remove</button>
    <h2>${task}</h2>
  </li>
  `
  taskList += taskItem
  newTaskList.innerHTML = taskList

})
