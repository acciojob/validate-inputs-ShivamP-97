// Validation regex patterns
const patterns = {
  name: /^[A-Za-z]{3,}$/,                          // letters only, min 3
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, // valid email
  mobile: /^[0-9]{10}$/                            // exactly 10 digits
};

// Get inputs
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');

// Validation function
function validateInput(input, pattern) {
  if (pattern.test(input.value)) {
    input.style.backgroundColor = 'lightgreen'; // valid
  } else {
    input.style.backgroundColor = 'pink';       // invalid
  }
}

// Attach event listeners
nameInput.addEventListener('input', () => validateInput(nameInput, patterns.name));
emailInput.addEventListener('input', () => validateInput(emailInput, patterns.email));
mobileInput.addEventListener('input', () => validateInput(mobileInput, patterns.mobile));
