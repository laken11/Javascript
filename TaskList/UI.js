import LS from "./ls.js"

let ls = new LS()

function UI() {

    UI.prototype.showAllTask = () => {
        let tasks = ls.fetchTasks()
        let newHtml = ``
        tasks.forEach(task => {
            newHtml +=  `
        <div class="task ${task.isComplete ? "completed": ""}" data-createdat="${task.id}">
          <div class="task__details">
            <input type="checkbox" class="task-check" ${task.isComplete ? 'checked': ''} />
            <label class="task-title">${task.title}</label>
          </div>
          <div class="task__op">
            <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
            <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
          </div>
        </div>`  
        });
        document.querySelector(".task-list").innerHTML = newHtml;
    }

    UI.prototype.addToUI = (task) => {
        ls.setTask(task);
        const newHtml = `
        <div class="task" data-createdat="${task.id}">
          <div class="task__details">
            <input type="checkbox" class="task-check" />
            <label class="task-title">${task.title}</label>
          </div>
          <div class="task__op">
            <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
            <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
          </div>
        </div>`  
        document.querySelector(".task-list").insertAdjacentHTML("afterbegin", newHtml);
    }

    UI.prototype.editTask = (event) => {
        let task = event.target.parentElement.parentElement
        let id = task.dataset.createdat;
        let taskToEdit = ls.findTask(id)
        document.querySelector("#newtaskID").value = taskToEdit.title
        document.querySelector("#taskEditId").value = taskToEdit.id
        document.querySelector(".AddTaskBtn").style.display = 'none'
        document.querySelector(".EditTaskBtn").style.display = 'inline'
        document.querySelector(".CancelTaskBtn").style.display = 'inline'
    }

    UI.prototype.updateTask = (event) => {
        let title = document.querySelector("#newtaskID").value
        let id = document.querySelector("#taskEditId").value
        if (title.length > 0) {
            ls.updateTask(title, id)
            let tasks = document.querySelectorAll(".task-title")
            tasks.forEach(task => {
                if (task.parentElement.parentElement.dataset.createdat === id) {
                    task.innerText = title
                }
            });
            document.querySelector("#newtaskID").value = ''
            document.querySelector("#taskEditId").value = ''
            document.querySelector(".AddTaskBtn").style.display = 'inline'
            document.querySelector(".EditTaskBtn").style.display = 'none'
            document.querySelector(".CancelTaskBtn").style.display = 'none'
        }
        
    }

    UI.prototype.cancelTask = () => {
        document.querySelector("#newtaskID").value = ''
        document.querySelector("#taskEditId").value = ''
        document.querySelector(".AddTaskBtn").style.display = 'inline'
        document.querySelector(".EditTaskBtn").style.display = 'none'
        document.querySelector(".CancelTaskBtn").style.display = 'none'
    }

    UI.prototype.resetForm = () => {
        document.querySelector("#newtaskID").value = ''
    }

    UI.prototype.deleteForm = (event) => {
        let task = event.target.parentElement.parentElement
        let id = task.dataset.createdat;
        console.log(id)
        ls.deleteTask(task.dataset.createdat)
        task.remove()
    }

    UI.prototype.completeTask = (event) => {
        const task = event.target.parentElement.parentElement
        let id = task.dataset.createdat
        ls.completeTask(id)
        task.classList.toggle('completed')
    }
}

export default UI;