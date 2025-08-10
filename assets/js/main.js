
window.addEventListener("load", function () {
  const lines = [
    "[BOOT SEQUENCE INITIATED]",
    "Loading assets...",
    "Initializing modules...",
    "Connecting to server...",
    "Loading The Social Journal...",
    "Welcome, user.",
    "Launch successful."
  ];

  const loaderText = document.getElementById("loader-text");
  let index = 0;

  function showNextLine() {
    if (index < lines.length) {
      loaderText.textContent += "\n" + lines[index];
      index++;
      setTimeout(showNextLine, 600);
    } else {
      setTimeout(() => {
        document.querySelector(".loader-wrapper").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector(".loader-wrapper").style.display = "none";
        }, 1000);
      }, 800);
    }
  }

  setTimeout(showNextLine, 500);
});
