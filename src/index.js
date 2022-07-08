import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const menu_btn = document.getElementById("menu-items-btn");
  const MENU_ITEMS_HTML = document.querySelector(".menu-items");
  let menu_items_html_classes = MENU_ITEMS_HTML.classList;

  function list_toggler(button, list) {
    let list_classes = list.classList;
    button.addEventListener("click", () => {
      list_classes.toggle("hidden");
    });
  }

  list_toggler(menu_btn, MENU_ITEMS_HTML);
});
