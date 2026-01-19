// Validation patterns
const patterns = {
  name: /^[A-Za-z]{3,}$/,                         // letters only, min 3
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, // valid email
  mobile: /^[0-9]{10}$/                           // exactly 10 digits
};

// Get input elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');

const inputs = [nameInput, emailInput, mobileInput];

inputs.forEach(input => input.style.backgroundColor = 'rgb(255, 255, 255)');

function validateInput(input, pattern) {
  if (input.value === "") {
    input.style.backgroundColor = 'rgb(255, 255, 255)'; // empty field
  } else if (pattern.test(input.value)) {
    input.style.backgroundColor = 'rgb(144, 238, 144)'; // lightgreen in rgb
  } else {
    input.style.backgroundColor = 'rgb(255, 192, 203)'; // pink in rgb
  }
}

inputs.forEach(input => {
  const pattern = patterns[input.id];
  input.addEventListener('input', () => validateInput(input, pattern));
  
  validateInput(input, pattern);
});
