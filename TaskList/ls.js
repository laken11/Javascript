function LS() {
    LS.prototype.fetchTasks = () => {
        let tasks = localStorage.getItem("tasks")
        if (tasks) {
            tasks = JSON.parse(tasks)
            return tasks
        }
        else {
            tasks = []
            return tasks
        }
    }
    LS.prototype.setTask = (task) => {
        let tasks = this.fetchTasks()
        tasks.unshift(task)
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    LS.prototype.deleteTask = (id) => {
        let tasks = this.fetchTasks()
        let task = tasks.findIndex((task) => task.id === id)
        tasks.splice(task)
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    LS.prototype.completeTask = (id) => {
        let tasks = this.fetchTasks()
        let index = tasks.findIndex((task) => task.id === id)
        if (tasks[index].isComplete) {
            tasks[index].isComplete = false
        } else {
            tasks[index].isComplete = true
        }
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    LS.prototype.findTask = (id) => {
        let tasks = this.fetchTasks()
        return tasks.find((task) => task.id === id)
    }

    LS.prototype.updateTask = (title, id) => {
        let tasks = this.fetchTasks()
        let index = tasks.findIndex((task) => task.id === id)
        tasks[index].title = title
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
}

export default LS