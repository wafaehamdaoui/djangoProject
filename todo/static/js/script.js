
    // JavaScript code for the todo app
    document.addEventListener("DOMContentLoaded", function () {
      const todoList = document.querySelector(".todo-list");
      const addButton = document.getElementById("add-button");
      const inputField = document.getElementById("new-todo");

      addButton.addEventListener("click", function () {
        const todoText = inputField.value.trim();
        if (todoText !== "") {
          const todoItem = document.createElement("li");
          todoItem.className = "todo-item";
          todoItem.innerHTML = `
            <input type="checkbox">
            <label>${todoText}</label>
          `;
          todoList.appendChild(todoItem);
          inputField.value = "";
        }
      });
    });
 