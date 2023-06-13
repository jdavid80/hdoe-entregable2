let main = document.getElementById("main");
let strategicText = document.getElementById("strategicText");
let missionaryText = document.getElementById("missionaryText");
let apoyoText = document.getElementById("apoyoText");
let boxMessage = document.getElementById("boxMessage");
let cerrarBox = document.getElementById("cerrarBox");
let missionaryMessageBox = document.getElementById("missionaryMessageBox");
let strategicMessageBox = document.getElementById("strategicMessageBox");
let apoyoMessageBox = document.getElementById("apoyoMessageBox");

missionaryText.addEventListener("click", function() {
    boxMessage.classList.add("box-message-visible");
    boxMessage.classList.remove("box-message-hidden");
    limpiarInterfaz();
    missionaryMessageBox.classList.add("missionary-message");
    missionaryMessageBox.classList.remove("missionary-message-hidden");
});
strategicText.addEventListener("click", function() {
    boxMessage.classList.add("box-message-visible");
    boxMessage.classList.remove("box-message-hidden");
    limpiarInterfaz();
    strategicMessageBox.classList.add("strategic-message");
    strategicMessageBox.classList.remove("strategic-message-hidden");
});
apoyoText.addEventListener("click", function() {
    boxMessage.classList.add("box-message-visible");
    boxMessage.classList.remove("box-message-hidden");
    limpiarInterfaz();
    apoyoMessageBox.classList.add("apoyo-message");
    apoyoMessageBox.classList.remove("apoyo-message-hidden");
});
boxMessage.addEventListener("click", function() {
    boxMessage.classList.remove("box-message-visible");
    boxMessage.classList.add("box-message-hidden");
    limpiarInterfaz();
});
cerrarBox.addEventListener("click", function() {
    boxMessage.classList.remove("box-message-visible");
    boxMessage.classList.add("box-message-hidden");
    limpiarInterfaz();
});
function limpiarInterfaz() {
    missionaryMessageBox.classList.add("missionary-message-hidden");
    missionaryMessageBox.classList.remove("missionary-message");
    strategicMessageBox.classList.add("strategic-message-hidden");
    strategicMessageBox.classList.remove("strategic-message");
    apoyoMessageBox.classList.add("apoyo-message-hidden");
    apoyoMessageBox.classList.remove("apoyo-message");
}