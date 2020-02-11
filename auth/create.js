


const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const loginmessage= document.getElementById("login-message");




//console.log(loginEmail,loginPassword,loginButton)


/*
event listener

listening userinput, mouse clicks or keyboard presses

onclick captures a click event
*/


loginButton.onclick = Function() {

console.log(loginEmail.value, loginPassword.value);
    
    loginmessage.textContent= "you logged in bro"
};
