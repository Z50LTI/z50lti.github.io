const modeBtn = document.getElementById('mode');


modeBtn.onchange = (e) => {

   

    if (modeBtn.checked === true) {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
        window.localStorage.setItem('mode', 'dark');
/*         document.getElementById("bannerimage").src = "../images/Welcome-to-the-Silver-Glass-Mobile-Bar(night mode).webp"; */

       
        var currentTime = document.getElementById("bannervideo").currentTime;
        var paused = document.getElementById("bannervideo").paused;
        document.getElementById("bannervideo").src = "../videos/Homepage_video_montage (night mode).mp4";
        document.getElementById("bannervideo").currentTime = currentTime;
        if (!paused) { 
            document.getElementById("bannervideo").play(); 
        } else {
            document.getElementById("bannervideo").pause();
        }


    } else {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
        window.localStorage.setItem('mode', 'light');
/*     document.getElementById("bannerimage").src = "../images/Welcome-to-the-Silver-Glass-Mobile-Bar.webp"; */
        
        var currentTime = document.getElementById("bannervideo").currentTime;
        var paused = document.getElementById("bannervideo").paused;
        document.getElementById("bannervideo").src = "../videos/Homepage_video_montage (day mode).mp4";
        document.getElementById("bannervideo").currentTime = currentTime;
        if (!paused) { 
            document.getElementById("bannervideo").play(); 
        } else {
            document.getElementById("bannervideo").pause();
        }

    }

}


const mode = window.localStorage.getItem('mode');
if (mode == 'dark') {
    modeBtn.checked = true;
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
 /*    document.getElementById("bannerimage").src = "../images/Welcome-to-the-Silver-Glass-Mobile-Bar(night mode).webp"; */
    document.getElementById("bannervideo").src = "../videos/Homepage_video_montage (night mode).mp4";
}

if (mode == 'light') {
    modeBtn.checked = false;
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
    /* document.getElementById("bannerimage").src = "../images/Welcome-to-the-Silver-Glass-Mobile-Bar.webp"; */
    document.getElementById("bannervideo").src = "../videos/Homepage_video_montage (day mode).mp4";

}