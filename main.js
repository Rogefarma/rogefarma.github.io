let menuButton = document.getElementById("menu");
let menuOptions = document.getElementById("menu-options");

menuButton.addEventListener("click", ()=> {
    menuStatus = menuOptions.style.display;

    if (menuStatus === "none") {
        menuOptions.style.display = "block";
    }
    else {
        menuOptions.style.display = "none";
    }
});