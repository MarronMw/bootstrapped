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

//LOGIN SCRIPT
document.addEventListener("DOMContentLoaded", function () {
  const teamMembers = document.querySelectorAll(".team__member");

  teamMembers.forEach(function (teamMember) {
    const triggerImage = teamMember.querySelector(".trigger-image");
    const loginForm = teamMember.querySelector(".login-form");
    const loginFormSubmit = loginForm.querySelector("form");

    let formDisplayed = false;

    // Create and append the close button dynamically
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.display = "block";
    loginForm.appendChild(closeButton);

    // Function to show the login form and blur the profile pic, name, and position
    function showLoginForm() {
      loginForm.style.display = "block";
      teamMember.classList.add("blur");
      formDisplayed = true;
    }

    // Event listener for double-click functionality
    triggerImage.addEventListener("dblclick", function () {
      showLoginForm();
    });

    // Close button functionality
    closeButton.addEventListener("click", function () {
      loginForm.style.display = "none";
      teamMember.classList.remove("blur");
      formDisplayed = false;
    });

    // Prevent login form from disappearing when interacting with it
    loginForm.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    // Close form if user clicks outside of it
    document.addEventListener("click", function (event) {
      if (formDisplayed && !loginForm.contains(event.target)) {
        loginForm.style.display = "none";
        teamMember.classList.remove("blur");
        formDisplayed = false;
      }
    });

    // Handle form submission
    loginFormSubmit.addEventListener("submit", function (event) {
      // event.preventDefault();
      // Your form submission logic here

      // After submission, hide the form
      loginForm.style.display = "none";
      teamMember.classList.remove("blur");
      formDisplayed = false;
    });
  });
});

//END OF LOGIN SCRIPT
