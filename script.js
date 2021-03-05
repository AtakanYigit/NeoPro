//Navigation Menu Scroll Effect

if (document.documentElement.scrollTop > 40 || document.body.scrollTop > 40) {
    document.getElementsByClassName("navbar")[0].style.top  = "16px";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.boxShadow       = "0 0 32px rgba(0, 0, 0, 0.2)";
}else{
    document.getElementsByClassName("navbar")[0].style.top  = "24px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.boxShadow       = "0 0 0px rgba(0, 0, 0, 0)";
}

window.onscroll = ()=>{
    if (document.documentElement.scrollTop > 40 || document.body.scrollTop > 40) {
        document.getElementsByClassName("navbar")[0].style.top  = "16px";
        document.getElementById("navbar").style.backgroundColor = "white";
        document.getElementById("navbar").style.boxShadow       = "0 0 32px rgba(0, 0, 0, 0.2)";
    }else{
        document.getElementsByClassName("navbar")[0].style.top  = "24px";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").style.boxShadow       = "0 0 0px rgba(0, 0, 0, 0)";
    }
};

//Video

let counter = 0;

document.getElementById("mainVideo").volume = 0;

function videoPlayPause(){
    document.getElementsByClassName("playButton")[0].classList.toggle("fadeIn");
    document.getElementsByClassName("playButton")[0].classList.toggle("fadeOut");
    if(counter % 2 == 1){
        document.getElementById("mainVideo").play();
        document.getElementById("mainVideo").style.filter  = "none";
        counter++;
    }else{
        document.getElementById("mainVideo").pause();
        document.getElementById("mainVideo").style.filter  = "brightness(0.45) hue-rotate(-25deg) saturate(100%)";
        counter++;
    }
}

//Slider

currentImage = 0;
function slidePrevious(){
    currentImage--;
    if (currentImage == -1) {
        document.getElementsByClassName("slide")[0].style.transform += "translateX(-1850.649px)";
        currentImage = 3;
    }else{
        document.getElementsByClassName("slide")[0].style.transform += "translateX(616.883px)";
    }
    console.log(currentImage);
}

function slideNext(){
    currentImage++;
    if (currentImage == 4) {
        document.getElementsByClassName("slide")[0].style.transform += "translateX(1850.649px)";
        currentImage = 0;
    }else{
        document.getElementsByClassName("slide")[0].style.transform += "translateX(-616.883px)";
    }
    console.log(currentImage);
}