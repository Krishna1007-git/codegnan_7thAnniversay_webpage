const intro = document.getElementById("intro");
    const main = document.getElementById("main");
    const gif = document.getElementById("introGif");

   
    const gifDuration = 4000;

    setTimeout(() => {
      intro.classList.add("fade-out");
      setTimeout(() => {
        intro.style.display = "none";
        main.style.display = "block";
        document.body.style.overflow = "auto";
      }, 1000);
    }, gifDuration);