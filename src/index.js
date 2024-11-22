import "./style.css";

class DropdownMenu {
    constructor(buttonId) {
        this.button = document.getElementById(buttonId);
        this.menu = this.button.nextElementSibling;
        
        this.button.addEventListener("click", () => this.toggleMenu());
        this.button.addEventListener("mouseover", () => this.toggleMenu());
        this.menu.addEventListener("mouseleave", () => this.hideMenu());
    }

    toggleMenu() {
        this.menu.classList.toggle("hidden");
    }
    
    hideMenu() {
        this.menu.classList.add("hidden");
    }
}

const dropdown1 = new DropdownMenu("dropdown-btn");
const dropdown2 = new DropdownMenu("dropdown-btn-2");

// const dropdownBtn = document.getElementById("dropdown-btn");
// const menuItems = dropdownBtn.nextElementSibling;

// function toggleMenu(menu) {
//     menu.classList.toggle("hidden");
// }

// function hideMenu(menu) {
//     menu.classList.add("hidden");
// }

// dropdownBtn.addEventListener("click", () => toggleMenu(menuItems));
// dropdownBtn.addEventListener("mouseover", () => toggleMenu(menuItems)); 
// menuItems.addEventListener("mouseleave", () => hideMenu(menuItems));

// const dropdownBtn2 = document.getElementById("dropdown-btn-2");
// const menuItems2 = dropdownBtn2.nextElementSibling;

// dropdownBtn2.addEventListener("click", () => toggleMenu(menuItems2));
// dropdownBtn2.addEventListener("mouseover", () => toggleMenu(menuItems2));
// menuItems2.addEventListener("mouseleave", () => hideMenu(menuItems2));


    
