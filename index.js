// 1: Variables
// HyperLinks
const hyperLinks = document.querySelectorAll(".link")
// toggle Menue
const openIcon = document.querySelector(".open-icon")
const closeIcon = document.querySelector(".close-icon")
const headerNavBar = document.querySelector(".header-nav-bar")
// 2:functionality
// Header navigational bar 
window.addEventListener("DOMContentLoaded", () => {
    const locationPathname = window.location.pathname
    hyperLinks.forEach(item => {
        if(item.pathname === locationPathname){
            item.classList.add("active")
        }
    })
});
AOS.init();

openIcon.addEventListener("click", () =>{
    headerNavBar.style.display = "block"
    openIcon.style.display = "none"
    closeIcon.style.display = "block"
})
closeIcon.addEventListener("click", () =>{
    headerNavBar.style.display = "none"
    openIcon.style.display = "block"
    closeIcon.style.display = "none"
})