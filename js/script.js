let strategicText = document.getElementById("strategicText");
let missionaryText = document.getElementById("missionaryText");
let adminText = document.getElementById("adminText");
let financeText = document.getElementById("financeText");
let boxMessage = document.getElementById("boxMessage");
let cerrarBox = document.getElementById("cerrarBox");

strategicText.addEventListener("click", function() {
    boxMessage.classList.add("box-message-visible");
    boxMessage.classList.remove("box-message-hidden");
});
cerrarBox.addEventListener("click", function() {
    boxMessage.classList.remove("box-message-visible");
    boxMessage.classList.add("box-message-hidden");
});