document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("taskModal");
  const deleteModal = document.getElementById("deleteModal");
  const closeBtn = document.querySelector(".close");
  const addTaskBtn = document.querySelector(".add-task");
  const saveTaskBtn = document.getElementById("saveTask");
  const confirmDeleteBtn = document.getElementById("confirmDelete");
  const cancelDeleteBtn = document.getElementById("cancelDelete");
  let taskToDelete;
  let taskIdCounter = 0;

  closeBtn.addEventListener("click", closeModal);
  addTaskBtn.addEventListener("click", openModal);
  saveTaskBtn.addEventListener("click", saveTask);
  confirmDeleteBtn.addEventListener("click", confirmDelete);
  cancelDeleteBtn.addEventListener("click", closeDeleteModal);
  deleteModal.querySelector(".close").addEventListener("click", closeDeleteModal);

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskPriority").value = "Baixa";
    document.getElementById("taskDueDate").value = "";
    document.getElementById("taskAssignees").value = "";
    modal.style.display = "none";
  }

  function openDeleteModal(task) {
    deleteModal.style.display = "block";
    taskToDelete = task;
  }

  function closeDeleteModal() {
    deleteModal.style.display = "none";
    taskToDelete = null;
  }

  function confirmDelete() {
    if (taskToDelete) {
      taskToDelete.remove();
      closeDeleteModal();
    }
  }

  function saveTask() {
    const task = {
      title: document.getElementById("taskTitle").value,
      description: document.getElementById("taskDescription").value,
      priority: document.getElementById("taskPriority").value,
      dueDate: document.getElementById("taskDueDate").value,
      assignees: document.getElementById("taskAssignees").value
    };

    if (taskToDelete) {
      taskToDelete.remove();
      taskToDelete = null;
    }

    addTaskToColumn(task);
    closeModal();
  }

  function addTaskToColumn(task) {
    const column = document.getElementById("pending");
    const tasksContainer = column.querySelector(".tasks");
  
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.draggable = true;
    taskCard.id = `task-${taskIdCounter++}`;
    taskCard.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <span>Prioridade: ${task.priority}</span>
      <span>Data de Entrega: ${task.dueDate}</span>
      <span>Responsáveis: ${task.assignees}</span>
      <button class="edit">✏️</button>
      <button class="delete">❌</button>
    `;

    checkTask(taskCard);
    tasksContainer.appendChild(taskCard);

    taskCard.addEventListener("dragstart", function (event) {
      event.dataTransfer.setData("text/plain", taskCard.id);
    });

    taskCard.querySelector(".delete").addEventListener("click", function () {
      openDeleteModal(taskCard);
    });

    taskCard.querySelector(".edit").addEventListener("click", function () {
      editTask(taskCard);
    });
  }
  
  //dunno, was getting 2 days range error for overdue without sethours. Still gets overdue if duedate is current day.
  function checkTask(task) {
      const title = document.getElementById("taskTitle").value;
      const description = document.getElementById("taskDescription").value;
      const dueDate = document.getElementById("taskDueDate").value;
      const assignees = document.getElementById("taskAssignees").value;

      const dueDateObj = new Date(dueDate);
      const currentDate = new Date();
      dueDateObj.setHours(0, 0, 0, 0);
      currentDate.setHours(0, 0, 0, 0);
  
      if (title === "" || description === "" || dueDate === "" || assignees === "") {
        const draftLabel = document.createElement("div");
        draftLabel.classList.add("warning", "draft-label");
        draftLabel.innerHTML = "Draft";
        task.prepend(draftLabel);
      }
      else if (dueDateObj < currentDate) {
        const overdueLabel = document.createElement("div");
        overdueLabel.classList.add("warning", "overdue-label");
        overdueLabel.innerHTML = "Atrasado";
        task.prepend(overdueLabel);
      }
  };
  
  function editTask(task) {
    taskToDelete = task;
    openModal();

    document.getElementById("taskTitle").value = task.querySelector("h3").textContent;
    document.getElementById("taskDescription").value = task.querySelector("p").textContent;
    document.getElementById("taskPriority").value = task.querySelector("span:nth-of-type(1)").textContent.split(": ")[1];
    document.getElementById("taskDueDate").value = task.querySelector("span:nth-of-type(2)").textContent.split(": ")[1];
    document.getElementById("taskAssignees").value = task.querySelector("span:nth-of-type(3)").textContent.split(": ")[1];
  }

  const columns = document.querySelectorAll(".kanban-column");

  columns.forEach((column) => {
    column.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    column.addEventListener("drop", function (event) {
      event.preventDefault();
      const taskId = event.dataTransfer.getData("text/plain");
      const taskCard = document.getElementById(taskId);
      const tasksContainer = column.querySelector(".tasks");
      tasksContainer.appendChild(taskCard);
    });
  });
});