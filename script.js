// Get the form and summary section
const form = document.getElementById('userForm');
const formSummary = document.getElementById('formSummary');

// When the form is submitted, run this function
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop the page from reloading
  
  // Get the form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const contactMethod = document.querySelector('input[name="contact"]:checked');
  const termsAccepted = document.getElementById('terms').checked;

  // Simple validations
  if (name === "" || email === "" || !contactMethod) {
    alert("Please fill out all fields and select a contact method.");
    return;
  }

  if (!termsAccepted) {
    alert("Please accept the terms and conditions.");
    return;
  }

  // Display the form data in the "Form Summary" section
  formSummary.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Contact Method:</strong> ${contactMethod.value}</p>
    <p><strong>Terms Accepted:</strong> Yes</p>
  `;

  // Show a confirmation message
  alert("Form submitted successfully!");
});
