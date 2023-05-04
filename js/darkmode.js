const modeBtn = document.getElementById('mode');

modeBtn.onchange = (e) => {
    if (modeBtn.checked === true) {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
        window.localStorage.setItem('mode', 'dark');
        document.getElementById("bannerimage").src = ".../images/Welcome-to-the-Silver-Glass-Mobile-Bar(night mode).webp";

    } else {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
        window.localStorage.setItem('mode', 'light');
        document.getElementById("bannerimage").src = ".../images/Welcome-to-the-Silver-Glass-Mobile-Bar.webp";
    }
}

const mode = window.localStorage.getItem('mode');
if (mode == 'dark') {
    modeBtn.checked = true;
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
    document.getElementById("bannerimage").src = ".../images/Welcome-to-the-Silver-Glass-Mobile-Bar(night mode).webp";
}

if (mode == 'light') {
    modeBtn.checked = false;
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
    document.getElementById("bannerimage").src = ".../images/Welcome-to-the-Silver-Glass-Mobile-Bar.webp";

}