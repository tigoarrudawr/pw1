document.addEventListener('DOMContentLoaded', () => {
    const floatingInputs = document.querySelectorAll('.floating-input');
    function checkInputContent(input) {
        if (input.value.trim() !== '') {
            input.classList.add('has-content');
        } else {
            input.classList.remove('has-content');
        }
    }
    floatingInputs.forEach(input => {
        checkInputContent(input);
        input.addEventListener('input', () => {
            checkInputContent(input);
        });
        input.addEventListener('blur', () => {
            checkInputContent(input);
        });
        if (input.id === 'cpf') {
            input.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                let formattedValue = '';
                if (value.length > 0) {
                    formattedValue = value.substring(0, 3);
                }
                if (value.length > 3) {
                    formattedValue += '.' + value.substring(3, 6);
                }
                if (value.length > 6) {
                    formattedValue += '.' + value.substring(6, 9);
                }
                if (value.length > 9) {
                    formattedValue += '-' + value.substring(9, 11);
                }
                e.target.value = formattedValue;
            });
        }
    });
});