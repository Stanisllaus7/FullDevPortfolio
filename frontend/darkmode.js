let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switcher');

// enable dark mode

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

// disable dark mode

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if (darkmode === "active") 
{
    enableDarkmode();
}

// event listener to buttons
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
});