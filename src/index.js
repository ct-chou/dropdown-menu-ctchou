import "./style.css";

const dropdownBtn = document.getElementById("dropdown-btn");
const menuItems = document.querySelector(".menu-all");

const toggleMenu = () => {
    menuItems.classList.toggle("hidden");
};

const hideMenu = () => {
    menuItems.classList.add("hidden");
};

dropdownBtn.addEventListener("click", toggleMenu);
dropdownBtn.addEventListener("mouseover", toggleMenu); 

menuItems.addEventListener("mouseleave", hideMenu);


    
