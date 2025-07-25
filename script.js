const saveBtn = document.querySelector(".saveText");
const text = document.querySelector("#inText");
const ul = document.querySelector("ul");

saveBtn.addEventListener("click", () => {
    const userText = text.value.trim();

    if (userText === "") {
        alert("Fill the Input Box");
    } else {
        // ✅ Create new <li>
        const li = document.createElement("li");
        li.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>${userText} <span class="delete">x</span>`;

        // ✅ Append to list
        ul.appendChild(li);

        // ✅ Add delete functionality
        const span = li.querySelector(".delete");
        span.addEventListener("click", () => {
            li.remove();
        });
    }

    // ✅ Clear input box
    text.value = '';
});
