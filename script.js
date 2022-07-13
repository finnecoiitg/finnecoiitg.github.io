var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    if (fullTxt=="Be an asset to everyone,"){
        this.el.innerHTML = '<span class="wrap" style="color:#63BB54;">'+this.txt+'</span>';
    }
    else{
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    }
    var that = this;
    var delta = 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 400;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("post-loading").style.display="block";
};
function changeImage(){
    document.logo.src=images[i];
    if (i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout(changeImage,300);
}
var i=0;
var images=[];
images[0]="assets/preloader/1.png";
images[1]="assets/preloader/2.png";
images[2]="assets/preloader/3.png";
images[3]="assets/preloader/4.png";
window.onload = function() {
    var load=changeImage()
    var preload = setTimeout(showPage, 6000);
    var elements = document.getElementsByClassName('typewriter');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};

