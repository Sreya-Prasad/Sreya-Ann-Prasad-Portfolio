// === HIGHLIGHT ACTIVE NAVIGATION LINK BASED ON VISIBLE SECTION ===

// Select all section and header elements to observe them during scroll
const sections = document.querySelectorAll("section, header");

// Select all navigation links with class 'nav-btn'
const navLinks = document.querySelectorAll(".nav-btn");

// Define observer options to trigger when 60% of the section is visible
const observerOptions = {
  threshold: 0.6, // Adjust sensitivity of visibility detection
};

// Create an IntersectionObserver to observe which section is currently in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If a section is intersecting (in view)
    if (entry.isIntersecting) {
      const sectionId = entry.target.id; // Get the ID of the section in view

      // Loop through all nav links
      navLinks.forEach((link) => {
        link.classList.remove("active"); // Remove 'active' class from all links

        // Add 'active' class to the nav link that matches the current section
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

// Attach the observer to each section and header
sections.forEach((section) => observer.observe(section));


// === NAVBAR "HOME" LINK RELOADS PAGE AND SCROLLS TO HEADER ===

document.getElementById("home-link").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default anchor scroll behavior

  // Reload the page with the #home hash in the URL to ensure scroll to top
  window.location.href = window.location.origin + window.location.pathname + "#home";
  window.location.reload(); // Refreshes the page
});

// When page loads, if the hash is #home, scroll to that section smoothly
window.addEventListener("load", function () {
  if (window.location.hash === "#home") {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  }
});


// === EMAILJS INTEGRATION ===

// Initialize EmailJS with your public key (replace with your actual key)
emailjs.init("NlUh5LC4lMrfPASPA");

// Handle form submission for contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Collect input values from the form
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    title: document.getElementById("title").value,
    message: document.getElementById("message").value,
  };

  // Send the form data using EmailJS
  emailjs.send("service_w97vbdt", "template_tty2li9", params)
    .then(function (res) {
      // Show success message if email is sent
      document.getElementById("formFeedback").innerText = "✅ Message sent successfully!";
    })
    .catch(function (err) {
      // Show error message if email fails
      console.error("EmailJS Error:", err);
      document.getElementById("formFeedback").innerText = "❌ Failed to send message.";
    });
});


// === PROTECTION: DISABLE USER INTERACTIONS ON IMAGES AND TEXT ===

// Disable right-click context menu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Disable dragging of elements (e.g., images)
document.addEventListener("dragstart", function (e) {
  e.preventDefault();
});

// Disable text selection
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});
