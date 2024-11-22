import "./style.css";

const dropdownBtn = document.getElementById("dropdown-btn");

dropdownBtn.addEventListener("click", () => {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((menuItem) => {
        menuItem.classList.toggle("show");
    });
});
    
