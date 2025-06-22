const tasks = [
  { title: "Design a website", completed: true },
  { title: "Learn JavaScript", completed: false },
  { title: "Build a Todo App", completed: true },
];

const taskList = document.querySelector("#task-list");
const form = document.getElementById("todo-form");
const task = document.getElementById("todo-input");
const add = document.getElementById("submit");

form.onsubmit = function (e) {
  e.preventDefault();
  if (task.value.trim() === "") {
    alert("Please write something!");
    task.value = "";
    return;
  }
  let newTask = { title: task.value, completed: false };
  tasks.push(newTask);
  console.log(tasks);
  render();
  task.value = "";
};

add.onmousedown = function (e) {
  e.preventDefault();
};

function render() {
  const html = tasks
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
}

render();
