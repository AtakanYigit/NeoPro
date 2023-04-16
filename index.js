//Video
let counter = 0;

document.getElementById("mainVideo").volume = 0;

const videoPlayPause = () =>{
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
const slidePrevious = () =>{
    const slideAmount = window.innerWidth > 1400
                            ? "616.883px"
                            : window.innerWidth > 900
                                ? "430.219px"
                                : "60vw";
    currentImage--;
    if (currentImage == -1) {
        console.log();
        document.getElementsByClassName("slide")[0].style.transform += `translateX(calc(${slideAmount} * -3)`;
        currentImage = 3;
    }else{
        document.getElementsByClassName("slide")[0].style.transform += `translateX(${slideAmount})`;
    }
    console.log(currentImage);
}

const slideNext = () =>{    
    const slideAmount = window.innerWidth > 1400
        ? "616.883px"
        : window.innerWidth > 900
            ? "430.219px"
            : "60vw";

    currentImage++;
    if (currentImage == 4){
        document.getElementsByClassName("slide")[0].style.transform += `translateX(calc(${slideAmount} * 3)`;
        currentImage = 0;
    }else{
        document.getElementsByClassName("slide")[0].style.transform += `translateX(-${slideAmount})`;
    }
    console.log(currentImage);
}