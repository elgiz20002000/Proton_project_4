export const btns = () => {
  let search_btn = document.querySelector(".search");

  let search_overlay = document.querySelector(".search_overlay"),
    exit_btn_search = document.querySelector(".search_overlay .exit_btn");

  exit_btn_search.addEventListener("click", (e) => {
    search_overlay.classList.remove("active");
  });

  search_btn.addEventListener("click", (e) => {
    search_overlay.classList.add("active");
  });

  let menu_btn = document.querySelectorAll(".menu"),
    exit_btn_menu = document.querySelector(".menu_overlay .exit_btn");

  menu_btn.forEach(item => {
    item.addEventListener("click", () => {
      document.querySelector(".menu_overlay").classList.add("active");
      document.querySelector('.top_navbar').classList.remove('active')
    });
  })

  exit_btn_menu.addEventListener("click", (e) => {
    document.querySelector(".menu_overlay").classList.remove("active");
  });
};
