const d = document;
const btnHamburger = d.getElementById("btn-hamburger"),
     btnClose = d.getElementById("btn-close"),
     nav = d.querySelector(".nav"),
     navMenu = d.querySelectorAll(".nav__menu"),
     navContent = d.querySelectorAll(".nav__content")

btnHamburger.addEventListener("click", (e) => {
    e.preventDefault();

    nav.classList.add("is-active");
    btnHamburger.classList.add("none");
    btnClose.classList.remove("none");

});
btnClose.addEventListener("click", (e) =>{
    e.preventDefault();
    nav.classList.remove("is-active");
    btnClose.classList.add("none");
    btnHamburger.classList.remove("none"); 

});

///RECORRER LOS SUBMENUS---------
navMenu.forEach((e) => {
    
    let activo = 0;
    const IconFlecha = e.querySelector(".menu__icon");
    const IconFlechaLight = e.querySelector(".menu__icon-light");

    let navContent = e.querySelector(".nav__content");

    e.addEventListener("click", ()=>{
        if (activo == 0) {
            IconFlecha.style.transform = "rotate(180deg)";
            IconFlechaLight.style.transform = "rotate(180deg)";

            navContent.classList.remove("none");
            activo=1;
        }else{
            IconFlecha.style.transform = "rotate(0deg)";
            IconFlechaLight.style.transform = "rotate(0deg)";

            navContent.classList.add("none"); 
            activo = 0;
        }

    })

});



