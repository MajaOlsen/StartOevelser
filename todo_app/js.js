"use strict";

document.addEventListener("DOMContentLoaded", () => {
  //THEME SWITCHER F
  const themeDropDown = document.querySelector("#dropDownThemes");
  const body = document.body;
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const makeTask = document.querySelector(".make-task_container");
  const activeTask = document.querySelector(".active-task_container");
  const doneTask = document.querySelector(".done-task_container");
  const selectStyle = document.querySelector("select");

  const loadTheme = "lightFilter";
  body.setAttribute("data-filter", loadTheme);
  header.setAttribute("data-filter", loadTheme);
  footer.setAttribute("data-filter", loadTheme);
  makeTask.setAttribute("data-filter", loadTheme);
  activeTask.setAttribute("data-filter", loadTheme);
  doneTask.setAttribute("data-filter", loadTheme);
  selectStyle.setAttribute("data-filter", loadTheme);
  themeDropDown.value = "light";

  themeDropDown.addEventListener("change", (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const filter = selectedOption.dataset.filter;

    body.setAttribute("data-filter", filter);
    header.setAttribute("data-filter", filter);
    footer.setAttribute("data-filter", filter);
    makeTask.setAttribute("data-filter", filter);
    activeTask.setAttribute("data-filter", filter);
    doneTask.setAttribute("data-filter", filter);
    selectStyle.setAttribute("data-filter", filter);
  });

  const taskForm = document.getElementById("taskForm");
  const taskDescription = document.getElementById("taskDescription");
  const taskTime = document.getElementById("taskTime");
  const taskCategory = document.getElementById("taskCategory");
  const activeTaskContainer = document.querySelector(".active-task_container");
  const doneTaskContainer = document.querySelector(".done-task_container");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const description = taskDescription.value.trim();
    const time = taskTime.value;
    const category = taskCategory.value;

    if (description && time && category) {
      createTask(description, time, category);
      taskDescription.value = "";
      taskTime.value = "";
      taskCategory.selectedIndex = 0;
    } else {
      alert("Udfyld venligst alle felter.");
    }
  });

  function createTask(description, time, category) {
    const taskId = crypto.randomUUID();

    const taskData = {
      id: taskId,
      description: description,
      time: time,
      category: category,
      status: "active",
    };
    const taskText = `${description} - ${category} Dato: ${time}`;

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("data-task-id", taskId);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkTask");

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    const taskP = document.createElement("p");
    taskP.textContent = taskText;

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskP);

    taskDiv.appendChild(taskContainer);
    activeTaskContainer.appendChild(taskDiv);

    checkTask(checkbox, taskDiv, taskData);
  }

  function checkTask(checkbox, taskDiv, taskData) {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        taskDiv.classList.add("fadeOutAnimation");

        setTimeout(() => {
          doneTaskContainer.insertBefore(taskDiv, cleanUpButton);
          taskDiv.classList.remove("fadeOutAnimation");
          taskDiv.classList.add("moveTaskAnimation");

          taskData.status = "done";
        }, 500);
      } else {
        taskDiv.classList.add("fadeOutAnimation");

        setTimeout(() => {
          activeTaskContainer.appendChild(taskDiv);
          taskDiv.classList.remove("fadeOutAnimation");
          taskDiv.classList.add("moveTaskAnimation");

          taskData.status = "active";
        }, 500);
      }
    });
  }

  const cleanUpButton = document.querySelector("#cleanUp");
  cleanUpButton.addEventListener("click", deleteTask);

  function deleteTask() {
    const doneTasks = document.querySelectorAll(".done-task_container .task");
    doneTasks.forEach((task) => task.remove());
  }
});
