document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const passwordInput = document.querySelector('input[type="password"]');
    const confirmPasswordInput = document.querySelector('input[name="cpassword"]');
    const inputs = document.querySelectorAll('input');

    function validatePassword() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordInput.setCustomValidity('Passwords must match.');
        } else {
            passwordInput.setCustomValidity('');
        }
    }

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#007BFF';
            this.style.boxShadow = '0 0 5px rgba(0,123,255,.5)';
        });

        input.addEventListener('blur', function() {
            this.style.borderColor = '#E5E7EB';
            this.style.boxShadow = 'none';
        });
    });

    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    });
});

