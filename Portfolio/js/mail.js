document.addEventListener("DOMContentLoaded", function () {
    const popButton = document.querySelector(".pop-button");
    const pop = document.querySelector(".pop");
    const closeBtn = document.querySelector(".pop span");

    popButton.addEventListener("click", () => {
      pop.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      pop.style.display = "none";
    });
  });
