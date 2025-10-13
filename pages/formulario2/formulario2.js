document.addEventListener('DOMContentLoaded', () => {
    const inputsData = document.querySelectorAll('.input-data');
    inputsData.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            e.target.value = value;
        });
    });
    const inputDDD = document.getElementById('tel_ddd');
    inputDDD.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value;
    });
    const inputTel = document.getElementById('tel_numero');
    inputTel.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value;
    });
    const inputRamal = document.getElementById('tel_ramal');
    inputRamal.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value;
    });

});