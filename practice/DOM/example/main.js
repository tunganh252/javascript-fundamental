function createLiElementTodo(data) {
  if (!data) return;

  // find template
  const todoTemplate = document.getElementById("todoTemplate");
  if (!todoTemplate) return;

  // clone li element
  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  todoElement.dataset.id = data.id;

  // show status background color
  const itemElement = todoElement.querySelector(".todo");
  if (itemElement) {
    todoElement.dataset.status = data.status;
    const alertClass =
      data.status === "complete"
        ? "todo__alert--success"
        : "todo__alert--pending";

    itemElement.classList.add(alertClass);
  }

  // update content where needed
  const titleElement = todoElement.querySelector(".title");
  titleElement.textContent = data.title;

  // TODO: attach events for buttons
  // add click event for complete button
  const completeButton = todoElement.querySelector("button.btn--complete");

  completeButton.textContent =
    todoElement.dataset.status === "Complete" ? "Reset" : "Complete";

  completeButton.addEventListener("click", () => {
    if (itemElement) {
      const currentStatus = todoElement.dataset.status;

      const newStatus = currentStatus === "complete" ? "pending" : "complete";

      const alertClass =
        currentStatus === "complete"
          ? "todo__alert--pending"
          : "todo__alert--success";

      const newTextContent =
        currentStatus === "complete" ? "Complete" : "Reset";

      completeButton.textContent = newTextContent;
      todoElement.dataset.status = newStatus;

      itemElement.classList.remove(
        "todo__alert--pending",
        "todo__alert--success"
      );
      itemElement.classList.toggle(alertClass);
    }
  });

  // add click event for complete button
  const removeButton = todoElement.querySelector("button.btn--remove");
  removeButton.addEventListener("click", () => {
    todoElement.remove();
  });

  return todoElement;
}

function renderTodoList(listTodo, ulElementId) {
  if (!Array.isArray(listTodo) || listTodo.length === 0) return;

  const ulElement = document.getElementById(ulElementId);

  if (!ulElement) return;

  for (const todo of listTodo) {
    const liElement = createLiElementTodo(todo);

    ulElement.appendChild(liElement);
  }
}

// main
(() => {
  const dataList = [
    { id: 0, title: "Learn English", status: "complete" },
    { id: 1, title: "Learn Reactjs", status: "pending" },
    { id: 2, title: "Learn Stock", status: "pending" },
  ];

  renderTodoList(dataList, "todoList");
})();
