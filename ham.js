
const ham = document.querySelector(".ham");
const header = document.querySelector(".side-bar");

ham.addEventListener("click",()=>{
  header.classList.toggle('active'); // show/hide header
  ham.classList.toggle('active');
});




  const links = document.querySelectorAll('.nav a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active')); // remove active from all
      link.classList.add('active'); // add to clicked link
    });
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // adjust offset if needed
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });