// Validation patterns
const patterns = {
  name: /^[A-Za-z]{3,}$/,                        // letters only, min 3
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, // valid email
  mobile: /^[0-9]{10}$/                          // exactly 10 digits
};

// Get input elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');

const inputs = [nameInput, emailInput, mobileInput];

// Initialize background to white
inputs.forEach(input => input.style.backgroundColor = 'white');

// Validation function
function validateInput(input, pattern) {
  if (input.value === "") {
    input.style.backgroundColor = 'white'; // empty field
  } else if (pattern.test(input.value)) {
    input.style.backgroundColor = 'lightgreen'; // valid input
  } else {
    input.style.backgroundColor = 'pink';       // invalid input
  }
}

// Attach input listeners
inputs.forEach(input => {
  const pattern = patterns[input.id];
  input.addEventListener('input', () => validateInput(input, pattern));
  
  // Trigger validation on page load in case Cypress fills in invalid input first
  validateInput(input, patterns[input.id]);
});
