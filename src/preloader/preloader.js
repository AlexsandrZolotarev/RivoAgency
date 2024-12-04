
export function Preloader() {
    var preloader = document.getElementById("page-preloader");
    preloader.classList.remove("done");
    setTimeout(() => {
      if (!preloader.classList.contains("done")) preloader.classList.add("done");
    }, 1500);
}