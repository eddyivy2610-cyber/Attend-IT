// Main JavaScript file for Settings Page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Settings page loaded successfully!');
    
    // Initialize the settings page
    initializeSettingsPage();
});

function initializeSettingsPage() {
    // Tab switching functionality
    initializeTabSwitching();
    
    // Form interactions
    initializeFormInteractions();
    
    // Button actions
    initializeButtonActions();
    
    // Toggle switches
    initializeToggleSwitches();
}

// Tab switching functionality
function initializeTabSwitching() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            navTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Add subtle animation feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}

// Form interactions and validation
function initializeFormInteractions() {
    const formInputs = document.querySelectorAll('.form-input');
    
    formInputs.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            validateInput(this);
        });
        
        // Real-time validation
        input.addEventListener('input', function() {
            validateInput(this);
        });
    });
    
    // Password matching validation
    const newPassword = document.getElementById('new-password');
    const confirmPassword = document.getElementById('confirm-password');
    
    if (newPassword && confirmPassword) {
        confirmPassword.addEventListener('input', function() {
            validatePasswordMatch(newPassword, confirmPassword);
        });
        
        newPassword.addEventListener('input', function() {
            if (confirmPassword.value) {
                validatePasswordMatch(newPassword, confirmPassword);
            }
        });
    }
}

// Input validation function
function validateInput(input) {
    const value = input.value.trim();
    const inputType = input.type;
    
    // Remove existing validation classes
    input.classList.remove('valid', 'invalid');
    
    let isValid = true;
    
    switch (inputType) {
        case 'email':
            isValid = validateEmail(value);
            break;
        case 'tel':
            isValid = validatePhone(value);
            break;
        case 'password':
            isValid = value.length >= 6;
            break;
        default:
            isValid = value.length > 0;
    }
    
    // Add validation class
    if (value.length > 0) {
        input.classList.add(isValid ? 'valid' : 'invalid');
    }
    
    return isValid;
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Password matching validation
function validatePasswordMatch(password1, password2) {
    const isMatch = password1.value === password2.value;
    
    password2.classList.remove('valid', 'invalid');
    if (password2.value.length > 0) {
        password2.classList.add(isMatch ? 'valid' : 'invalid');
    }
    
    return isMatch;
}

// Button actions
function initializeButtonActions() {
    const cancelBtn = document.querySelector('.btn-cancel');
    const saveBtn = document.querySelector('.btn-save');
    
    cancelBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
            resetForm();
            showNotification('Changes cancelled', 'info');
        }
    });
    
    saveBtn.addEventListener('click', function() {
        if (validateAllInputs()) {
            saveSettings();
        } else {
            showNotification('Please fix the errors before saving', 'error');
        }
    });
}

// Toggle switches functionality
function initializeToggleSwitches() {
    const toggles = document.querySelectorAll('.toggle-switch input[type="checkbox"]');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const label = this.nextElementSibling;
            
            // Add animation feedback
            label.style.transform = 'scale(0.95)';
            setTimeout(() => {
                label.style.transform = 'scale(1)';
            }, 150);
            
            // Log the change (in a real app, this would sync with backend)
            console.log(`${this.id} toggled to: ${this.checked}`);
        });
    });
}

// Validate all inputs before saving
function validateAllInputs() {
    const inputs = document.querySelectorAll('.form-input');
    let allValid = true;
    
    inputs.forEach(input => {
        if (!validateInput(input)) {
            allValid = false;
        }
    });
    
    // Check password matching
    const newPassword = document.getElementById('new-password');
    const confirmPassword = document.getElementById('confirm-password');
    
    if (newPassword.value && confirmPassword.value) {
        if (!validatePasswordMatch(newPassword, confirmPassword)) {
            allValid = false;
        }
    }
    
    return allValid;
}

// Save settings function
function saveSettings() {
    const saveBtn = document.querySelector('.btn-save');
    const originalText = saveBtn.textContent;
    
    // Show loading state
    saveBtn.textContent = 'Saving...';
    saveBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Collect all form data
        const formData = collectFormData();
        
        // In a real application, you would send this data to your backend
        console.log('Settings saved:', formData);
        
        // Reset button state
        saveBtn.textContent = originalText;
        saveBtn.disabled = false;
        
        // Show success notification
        showNotification('Settings saved successfully!', 'success');
    }, 1500);
}

// Collect form data
function collectFormData() {
    const data = {};
    
    // Collect input values
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        if (input.value.trim()) {
            data[input.id] = input.value.trim();
        }
    });
    
    // Collect toggle states
    const toggles = document.querySelectorAll('.toggle-switch input[type="checkbox"]');
    toggles.forEach(toggle => {
        data[toggle.id] = toggle.checked;
    });
    
    // Collect select values
    const selects = document.querySelectorAll('.setting-select');
    selects.forEach(select => {
        data[select.id] = select.value;
    });
    
    return data;
}

// Reset form to original state
function resetForm() {
    // Reset input values to their original state
    document.getElementById('username').value = 'John_Lucky';
    document.getElementById('email').value = 'john.lucky@example.com';
    document.getElementById('phone').value = '+234 123 456 7890';
    
    // Clear password fields
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
    
    // Reset toggles to default state
    document.getElementById('email-notifications').checked = true;
    document.getElementById('push-notifications').checked = false;
    document.getElementById('marketing-updates').checked = true;
    
    // Reset selects to default
    document.getElementById('theme-select').value = 'light';
    document.getElementById('language-select').value = 'en';
    
    // Remove validation classes
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.classList.remove('valid', 'invalid');
    });
}

// Show notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '1000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px'
    });
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = '#10b981';
            break;
        case 'error':
            notification.style.background = '#ef4444';
            break;
        case 'info':
        default:
            notification.style.background = '#3b82f6';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for validation states
const validationStyles = `
    .form-input.valid {
        border-color: #10b981;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
    }
    
    .form-input.invalid {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
    
    .form-group.focused .form-label {
        color: #7c3aed;
    }
`;

// Inject validation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = validationStyles;
document.head.appendChild(styleSheet);