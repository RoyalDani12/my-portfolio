const form = document.querySelector("form");
const inputValue = document.querySelector("input");
const list = document.querySelector(".todo-list");
let information = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  add();
});

function add() {
  const todoInput = inputValue.value.trim();
  if (todoInput === "") {
    alert("Your input is invalid");
    inputValue.value = "";
    return;
  }

  information.push(todoInput);

  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.innerHTML = `
    ${todoInput}
    <button class="delete-btn">
      <img src="delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24 (2).png" alt="">
    </button>
  `;

  // Add delete functionality to this button
  const deleteButton = listItem.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });

  list.appendChild(listItem);
  inputValue.value = "";
}

// Attach delete listeners to existing buttons
document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.remove(); // removes the <li> containing the button
  });
});
