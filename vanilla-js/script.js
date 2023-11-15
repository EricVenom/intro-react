const input = document.querySelector(".input");
const rightSide = document.querySelector(".right_side fieldset");

input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        const newDiv = document.createElement('div');
        const newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');
        newCheckbox.setAttribute('id', 'checkbox');

        const newLabel = document.createElement('label');
        newLabel.textContent = input.value;
        newDiv.appendChild(newCheckbox);
        newDiv.appendChild(newLabel);
        rightSide.appendChild(newDiv);
        input.value = "";
        newCheckbox.addEventListener("change", (e) => {
            if (e.target.checked) {
                newDiv.remove();
            }
        })
    }
})