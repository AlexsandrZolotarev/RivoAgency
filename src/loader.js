function toggleLoader()
{
    var preloader = document.getElementById("page-preloader");
    if (preloader.classList.contains("done")) preloader.classList.remove("done");
    if (!preloader.classList.contains("done")) {
      setTimeout(() => {
        preloader.classList.add("done");
      }, 1000);
    }
}
export function OnPreloaderPage() {
  
  if(!document.getElementById("page-preloader")) 
  {
    setTimeout(() => {
        toggleLoader();
    },1000)
  }
  else{
    toggleLoader();
  }
  
}
