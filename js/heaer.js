const navOpenbtn = document.getElementById("nav-open-btn");
const navClosebtn = document.getElementById("nav-close-btn");
const navList = document.getElementById("nav-list");

navClosebtn.style.display = "none";

navOpenbtn.addEventListener("click", () => {
    navClosebtn.style.display = "block";
    navOpenbtn.style.display = "none";
    navList.style.display = "flex";
})

navClosebtn.addEventListener("click", () => {
    navOpenbtn.style.display = "block";
    navClosebtn.style.display = "none";
    navList.style.display = "none";
})