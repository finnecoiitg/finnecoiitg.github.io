var dividerLine = document.getElementById('dividerLine');
var welcome = document.getElementById('welcome');
var logo = document.getElementById('logo');
var welcomeTitle = document.getElementById('welcomeTitle');
var registerBtn = document.getElementById('register-btn');
if (window.innerWidth < 1000) {
    dividerLine.style.display = 'none';
    welcome.style.flexDirection = 'column';
    logo.style.marginTop = '5rem';
    logo.style.marginBottom = '5rem';
    logo.style.width = '15vw';
    welcome.style.height = '100%';
    welcome.style.justifyContent = 'center';
    welcomeTitle.style.fontSize = '1.5rem';
    registerBtn.style.padding = "45px 75px";
    registerBtn.style.fontSize = '2rem';
}