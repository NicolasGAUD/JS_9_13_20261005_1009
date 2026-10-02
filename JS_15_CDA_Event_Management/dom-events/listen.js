function paintA() {
    document.querySelector(".box-a").style.backgroundColor = "gold";
}
function paintB() {
    document.querySelector(".box-b").style.backgroundColor = "gold";
}
//document.querySelector(".box-a").addEventListener("click", paintA);
document.querySelector(".box-b").addEventListener("click", paintB());

const boxA = document.querySelector(".box-a");
boxA.addEventListener("click", () => {
    boxA.style.backgroundColor = "gold";
});