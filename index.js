
      const sections = document.querySelectorAll(".section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            section.style.opacity = 0;
            section.style.transform = "translateY(50px)";
            observer.observe(section);
        });


      function sendEmail() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const subject = encodeURIComponent("Contact from Portfolio - " + name);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.location.href = `mailto:sreyaannprasad@gmail.com?subject=${subject}&body=${body}`;
      }





  // Disable right-click context menu
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // Disable drag and selection
  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  document.addEventListener("selectstart", function (e) {
    e.preventDefault();
  });

