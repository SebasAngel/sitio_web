document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validar si los campos están vacíos
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            alert('Por favor, completa todos los campos.');
        } else {
            alert('Formulario enviado con éxito.');
        }
    });
});
