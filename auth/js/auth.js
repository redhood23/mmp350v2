

const loginUsername = document.getElementById("login-username");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const loginmessage= document.getElementById("login-message");
const userName= document.getElementById("user-name");




//console.log(loginEmail,loginPassword,loginButton)


/*
event listener

listening userinput, mouse clicks or keyboard presses

onclick captures a click event
*/


loginButton.onclick = function() {
    fb.login(loginEmail.value,loginPassword.value);
    
};


function onError(errorMessage){
    
    loginmessage.textContent=errorMessage;
}

function onLoggedIn(uid, displayName){
    userName.textContent="Welcome" + displayName;
}