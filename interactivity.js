const navbar = document.querySelector("nav")
window.addEventListener("scroll", function() {
  if (window.scrollY > 10) {
    navbar.style.backgroundColor = "#7201ff"
  } else {
    navbar.style.backgroundColor = "transparent"
  }
})
