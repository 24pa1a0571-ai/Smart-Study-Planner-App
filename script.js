function addTask() {
    let task = document.getElementById("taskInput").value;
    let date = document.getElementById("dateInput").value;
    let taskList = document.getElementById("taskList");

    if (task === "") {
        alert("Please enter a study topic");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${task} - ${date}
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    taskList.appendChild(li);

    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";

}
