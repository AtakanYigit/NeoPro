//Navigation Menu

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