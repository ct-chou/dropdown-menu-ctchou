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