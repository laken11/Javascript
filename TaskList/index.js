// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
import UI from "./UI.js"
import Task from "./Task.js"
import LS from "./ls.js"

const ui = new UI()

ui.showAllTask()

document.querySelector(".AddTaskBtn").addEventListener("click", (e) => {
    var taskTitle = document.querySelector("#newtaskID").value
    if (taskTitle.length > 0) {
        let task = new Task(taskTitle)
        ui.addToUI(task)
        ui.resetForm()
    }
})

document.querySelector(".task-list").addEventListener("click", (e) => {
    if (e.target.className.includes("task__op_delete")) { 
        ui.deleteForm(e)
    } else if (e.target.className.includes("task-check")) {
        ui.completeTask(e)
    } else if (e.target.className.includes("task__op_edit")) {
        ui.editTask(e)
    }
})

document.querySelector(".EditTaskBtn").addEventListener('click', (e) => {
    ui.updateTask(e)
})

document.querySelector(".CancelTaskBtn").addEventListener('click', (e) => {
    ui.cancelTask(e)
})