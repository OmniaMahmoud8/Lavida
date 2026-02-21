
  const boxes = document.querySelectorAll(".project-box");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  boxes.forEach(box => observer.observe(box));

      document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".mobile-nav").classList.toggle("active");
      });

      document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          document
            .querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
        });
      });

      window.addEventListener("scroll", () => {
        document
          .querySelector(".header")
          .classList.toggle("scrolled", window.scrollY > 50);
      });