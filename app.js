let speech = new webkitSpeechRecognition();
let elButton = document.querySelector(".button");
speech.lang = "Uz-uz";

speech.onresult = function(e) {
    let result = e.results[0][0].transcript.trim().toLowerCase();
    elButton.classList.remove("red", "blue", "green", "invalid");

    if (result === "qizil" || result === "red") {
        elButton.classList.add("red");}
    else if (result === "ko'k" || result === "blue") {
        elButton.classList.add("blue");}
    else if (result === "yashil" || result === "green") {
        elButton.classList.add("green");}
    else if (result === "sariq" || result === "yellow") {
        elButton.classList.add("yellow");}
    else if (result === "qora" || result === "black") {
        elButton.classList.add("black");}
    else if (result === "jigarrang" || result === "orange") {
        elButton.classList.add("orange");}
    else if (result === "pushti" || result === "pink") {
        elButton.classList.add("pink");}
     else {
        elButton.classList.add("invalid");}
}

function handleClickBtn() {
    speech.start();
}
