let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    let completedCount = 0;

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${task} - ${date}
            <button
        onclick="this.parentElement.remove()">Delete</button>
        `;

        if (task.completed) {
            li.classList.add("completed");
            completedCount++;
        }

        li.onclick = function () {
            toggleTask(index);
        };

        list.appendChild(li);
    });

    document.getElementById("progress").textContent =
        "Progress: " + completedCount + "/" + tasks.length + " completed";
}

function addTask() {
    let text = document.getElementById("taskInput").value;
    let date = document.getElementById("dateInput").value;

    if (text === "" || date === "") {
        alert("Please enter task and date");
        return;
    }

    tasks.push({ text: text, date: date, completed: false });

    saveData();
    displayTasks();

    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveData();
    displayTasks();
}

function saveData() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

displayTasks();
