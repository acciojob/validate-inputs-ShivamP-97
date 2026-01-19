// Validation patterns
const patterns = {
  name: /^[A-Za-z]{3,}$/,
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
  mobile: /^[0-9]{10}$/
};

// Get input elements
const inputs = [
  document.getElementById('name'),
  document.getElementById('email'),
  document.getElementById('mobile')
];

// Initialize background to white
inputs.forEach(input => {
  input.style.backgroundColor = 'white';
});

// Validate input function
function validate(input, pattern) {
  if (pattern.test(input.value)) {
    input.style.backgroundColor = 'lightgreen'; // valid
  } else if (input.value === "") {
    input.style.backgroundColor = 'white';      // empty field
  } else {
    input.style.backgroundColor = 'pink';       // invalid
  }
}

// Add event listeners for each input
inputs.forEach(input => {
  const pattern = patterns[input.id];
  input.addEventListener('input', () => validate(input, pattern));
});
