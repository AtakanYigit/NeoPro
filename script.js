//Adjusting Zoom
document.body.style.zoom = 1.0;
document.documentElement.style.msTransform = "scale(1)";       // IE 9

//Navigation Menu Scroll Effect

if (document.documentElement.scrollTop > 40 || document.body.scrollTop > 40) {
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("navbar").style.boxShadow       = "0 0 32px rgba(0, 0, 0, 0.2)";
}else{
    document.getElementsByClassName("navbar")[0].style.top  = "24px";
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, .85)";
    document.getElementById("navbar").style.boxShadow       = "0 0 0px rgba(0, 0, 0, 0)";
}

window.onscroll = ()=>{
    if (document.documentElement.scrollTop > 40 || document.body.scrollTop > 40) {
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 1)";
        document.getElementById("navbar").style.boxShadow       = "0 0 32px rgba(0, 0, 0, 0.2)";      

        if(window.innerWidth < 500){
            document.getElementsByClassName("navItem")[0].style.borderRight = "1px solid var(--orange)";
            document.getElementsByClassName("navItem")[1].style.borderRight = "1px solid var(--orange)";
            document.getElementsByClassName("navItem")[2].style.borderRight = "1px solid var(--orange)";
        }
    }else{
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, .85)";
        document.getElementById("navbar").style.boxShadow       = "0 0 0px rgba(0, 0, 0, 0)";

        if(window.innerWidth < 500){
            document.getElementsByClassName("navItem")[0].style.borderRight = "1px solid transparent";
            document.getElementsByClassName("navItem")[1].style.borderRight = "1px solid transparent";
            document.getElementsByClassName("navItem")[2].style.borderRight = "1px solid transparent";
        }
    }
};
