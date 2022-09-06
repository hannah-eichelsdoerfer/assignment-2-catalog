const allSections = document.querySelectorAll("section");
const progressBarElements = document.querySelectorAll(".progress span");

const resetActiveClasses = () => {
  progressBarElements.forEach((link) => {
    link.classList.remove("active");
  });
};

window.addEventListener("scroll", () => {
  allSections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
      resetActiveClasses();
      progressBarElements[index].classList.add("active");
    }
  });
});

progressBarElements.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    resetActiveClasses();
    event.preventDefault();
    const sectionNumber = index + 1;
    const targetSection = document.getElementById(sectionNumber);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
