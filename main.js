let tasks = [
  {
    title: "Quét nhà",
    completed: false,
  },
  {
    title: "Rửa chén",
    completed: false,
  },
  {
    title: "Nấu cơm",
    completed: true,
  },
];

let taskList = document.querySelector(".task-list");
console.log(taskList);

let html = tasks
  .map(
    (task) => `
  <li class="task-item ${task.completed ? "completed" : ""}">
    <span class="task-title">${task.title}</span>
    <div class="task-action">
        <button class="task-btn edit">Edit</button>
        <button class="task-btn done">${
          task.completed ? "Mark as undone" : "Mark as done"
        }</button>
        <button class="task-btn delete">Delete</button>
    </div>
</li>
  `
  )
  .join("");

taskList.innerHTML = html;
