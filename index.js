const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passOne = document.getElementById("password-one");
let passTwo = document.getElementById("password-two");

function generatePassword() {
    let pOne = "";
    let pTwo = "";

    for (let i = 0; i < 15; i++) {
        pOne += characters[Math.floor(Math.random() * characters.length)];
        pTwo += characters[Math.floor(Math.random() * characters.length)];
    }

    passOne.textContent = pOne;
    passTwo.textContent = pTwo;

    fadeIn(passOne);
    fadeIn(passTwo);
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    if (text) {
        navigator.clipboard.writeText(text);
        alert("Copied the text: " + text);
    }
}

function fadeIn(element) {
    element.style.opacity = 0;
    element.style.transition = "opacity 0.5s ease-in-out";
    requestAnimationFrame(() => {
        element.style.opacity = 1;
    });
}