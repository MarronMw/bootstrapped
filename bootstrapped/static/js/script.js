function toggleMenu(button) {
  document.addEventListener("DOMContentLoaded", function () {
    const togglerButton = document.querySelector(".navbar-toggler");

    togglerButton.addEventListener("click", function () {
      const navbarCollapse = document.getElementById("navbarNav");

      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      } else {
        navbarCollapse.classList.add("show");
      }
    });
  });
}

document.getElementById("SEND-BTN").addEventListener("click", function () {
  // Retrieve the input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate if all fields are filled
  if (name && email && message) {
    // If all fields are filled, show the "Send Email" button
    document.getElementById("SEND").style.display = "inline-block";

    // Construct the mailto link
    const mailtoLink = `mailto:marandege@gmail.com?subject=Contact from ${name}&body=Hello Let's Go Travel and Tours. I am ${name},%0AYou can contact me through ${email}.%0A${message}`;

    // Set the href attribute of the SEND button to the mailto link
    document.getElementById("SEND").setAttribute("href", mailtoLink);
  } else {
    // If not, alert the user
    alert("Please fill out all fields before generating the email.");
  }
});

// Optional: Add a click event to reset the form after sending the email
document.getElementById("SEND").addEventListener("click", function () {
  // Reset the form fields
  document.getElementById("emailForm").reset();

  // Hide the "Send Email" button again
  document.getElementById("SEND").style.display = "none";
});
