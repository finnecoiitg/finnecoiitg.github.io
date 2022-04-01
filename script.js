var dividerLine = document.getElementById('dividerLine');
var welcome = document.getElementById('welcome');
var logo = document.getElementById('logo');
if (window.innerWidth < 1000) {
    dividerLine.style.display = 'none';
    welcome.style.flexDirection = 'column';
    logo.style.marginTop = '5rem';
    logo.style.marginBottom = '5rem';
    welcome.style.height = '100%';
    welcome.style.justifyContent = 'center'
}