
var welcome = document.getElementById('welcome');
// var logo = document.getElementById('logo');
var welcomeTitle = document.getElementById('welcomeTitle');
var weekContainer1 = document.getElementsByClassName('week-container1')[0];
var weekContainer2 = document.getElementsByClassName('week-container2')[0];
var weekContainer3 = document.getElementsByClassName('week-container3')[0];
var registerBtn = document.getElementById('register-btn');
var assignment1 = document.getElementById('ass1');
var assignment2 = document.getElementById('ass2');
var assignment3 = document.getElementById('ass3');

var title = document.getElementById('paraTitle');
var paraText = document.getElementById('paraText');
var title2 = document.getElementById('paraTitle2')
if (window.innerWidth < 900) {
    welcome.style.flexDirection = 'column';
    // logo.style.marginTop = '5rem';
    // logo.style.marginBottom = '5rem';
    // logo.style.width = '15vw';
    // welcome.style.height = '100%';
    welcome.style.justifyContent = 'center';
    welcomeTitle.style.fontSize = '1.5rem';
    registerBtn.style.padding = "45px 75px";
    registerBtn.style.fontSize = '2rem';
    assignment1.style.flexDirection = 'column';
    assignment1.style.alignItems = 'flex-start';
    assignment1.style.marginLeft = '1rem';
    assignment2.style.flexDirection = 'column';
    assignment2.style.alignItems = 'flex-start';
    assignment3.style.flexDirection = 'column';
    assignment3.style.alignItems = 'flex-start';
    assignment2.style.marginLeft = '1rem';
    assignment3.style.marginLeft = '1rem';
    // weekContainer3.style.maxWidth="100%";
    weekContainer2.style.maxWidth="100%";
    weekContainer1.style.maxWidth="100%";
    title.style.fontSize = '4rem';
    paraText.style.fontSize = '1.8rem';
    title2.style.fontSize = '4rem';
}