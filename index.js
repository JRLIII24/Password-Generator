const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passOne = document.getElementById("password-one");
let passTwo = document.getElementById("password-two");

function generatePassword() {
    let pOne = "";
    let pTwo = ""
    for(let i = 0; i < 15; i++) {
        let randomChar = characters[Math.floor(Math.random() * characters.length)];
        pOne += randomChar
    }
    passOne.textContent = pOne;

    for(let i = 0; i < 15; i++) {
        let randomChar = characters[Math.floor(Math.random() * characters.length)];
        pTwo += randomChar
    }
    passTwo.textContent = pTwo;
}

passOne.addEventListener("click", function() {
    let text = passOne.textContent;
    navigator.clipboard.writeText(text);
    alert("Copied the text: " + text);
});

passTwo.addEventListener("click", function() {
    let text = passTwo.textContent;
    navigator.clipboard.writeText(text);
    alert("Copied he text: " + text);
});