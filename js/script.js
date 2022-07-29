//Toggel Navbar
let burgerMenu = document.getElementById("burger-menu"),
    navLinks = document.getElementById("nav-links"),
    navForm = document.getElementById("nav-form")
burgerMenu.addEventListener("click",()=>{
    navForm.classList.toggle('menu')
    navLinks.classList.toggle('menu');
})
