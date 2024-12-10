export function AnimationHomePage() {
    if(!document.getElementById("HomeTitle")) return;
    let homeTitleChilden = document.getElementById("HomeTitle").children;
    setTimeout(() => {
      Array.from(homeTitleChilden).forEach((e, index) => {
        if (index % 2 === 0) e.style.animation = "animatinRight 2.2s forwards";
        else e.style.animation = "animatinLeft 2.2s forwards";
      });
    }, 100);
  }