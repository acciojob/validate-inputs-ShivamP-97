//your JS code here. If required.
// Regex patterns
const patterns = {
  name: /^[A-Za-z]{3,}$/,                        // Letters only, at least 3
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, // Valid email
  mobile: /^[0-9]{10}$/                          // 10 digits
};

// Get input elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');

// Validation function
function validateInput(input, pattern) {
  if (pattern.test(input.value)) {
    input.style.backgroundColor = 'lightgreen'; // valid input
  } else {
    input.style.backgroundColor = 'pink';       // invalid input
  }
}

// Attach input event listeners
nameInput.addEventListener('input', () => validateInput(nameInput, patterns.name));
emailInput.addEventListener('input', () => validateInput(emailInput, patterns.email));
mobileInput.addEventListener('input', () => validateInput(mobileInput, patterns.mobile));
