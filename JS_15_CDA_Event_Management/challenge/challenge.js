const form = document.querySelector("#order-form");
const total = document.querySelector("#total");
const tacosInput = document.querySelector("#quantity");
const unitPrice = 8;
const btnReset = document.querySelector("#reset");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (tacosInput.value !== "") {
        total.textContent = `Total : ${Number(tacosInput.value) * unitPrice} €`;
    }
    if (Number(tacosInput.value) > 10) {
        total.className = "too-many";
    }
});
btnReset.addEventListener("click", (event) => {
    total.textContent = "Total : 0 €";
    total.classList.remove("too-many");
    tacosInput.value = "";
});