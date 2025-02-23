// signup.js

const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const strengthBar = document.getElementById('strengthBar');

// Function to check password strength
function checkPasswordStrength(password) {
    if (password === "") {
        // Reset the strength bar if the password is empty
        strengthBar.style.width = '0';
        strengthBar.style.backgroundColor = 'transparent';
        return;
    }

    let strength = 0;

    // Check password length
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;  // Uppercase letter
    if (/[a-z]/.test(password)) strength += 1;  // Lowercase letter
    if (/[0-9]/.test(password)) strength += 1;  // Number
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;  // Special character

    // Update strength bar
    switch (strength) {
        case 0:
        case 1:
            strengthBar.style.width = '20%';
            strengthBar.style.backgroundColor = 'red';
            break;
        case 2:
            strengthBar.style.width = '40%';
            strengthBar.style.backgroundColor = 'orange';
            break;
        case 3:
            strengthBar.style.width = '60%';
            strengthBar.style.backgroundColor = 'yellow';
            break;
        case 4:
            strengthBar.style.width = '80%';
            strengthBar.style.backgroundColor = 'lightgreen';
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = 'green';
            break;
    }
}

// Event listener for password input to check strength
passwordInput.addEventListener('input', function () {
    checkPasswordStrength(passwordInput.value);
});

// Confirm password match check
confirmPasswordInput.addEventListener('input', function () {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity('Passwords do not match');
    } else {
        confirmPasswordInput.setCustomValidity('');
    }
});