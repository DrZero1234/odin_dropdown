import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const menu_btn = document.getElementById("menu-items-btn");
  const MENU_ITEMS_HTML = document.querySelector(".menu-items");
  let menu_items_html_classes = MENU_ITEMS_HTML.classList;

  menu_btn.addEventListener("click", () => {
    menu_items_html_classes.toggle("hidden");
  });
});
