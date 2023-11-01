const menuIcon = document.querySelector("#menu-icon");
const sidebar = document.querySelector(".sidebar");
const mainContainer = document.querySelector(".main-container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    mainContainer.classList.toggle("large-container");
}