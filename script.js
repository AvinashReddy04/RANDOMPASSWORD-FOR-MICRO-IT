const passwordInput = document.getElementById('password');
const copyBtn = document.getElementById('copy-btn');
const generateBtn = document.getElementById('generate-btn');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const toast = document.getElementById('toast');

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function generatePassword() {
    let chars = lowercase;
    let password = '';
    
    if (uppercaseCheckbox.checked) chars += uppercase;
    if (numbersCheckbox.checked) chars += numbers;
    if (symbolsCheckbox.checked) chars += symbols;
    
    const length = parseInt(lengthInput.value);
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    
    passwordInput.value = password;
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

async function copyPassword() {
    if (!passwordInput.value) return;
    
    try {
        await navigator.clipboard.writeText(passwordInput.value);
        showToast('Password copied to clipboard!');
    } catch (err) {
        showToast('Failed to copy password');
    }
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);

// Generate initial password
generatePassword(); 