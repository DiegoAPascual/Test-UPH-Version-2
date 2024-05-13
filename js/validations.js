document.getElementById('validationForm').addEventListener('submit', function(event) {
    var phoneInput = document.getElementById('formGroupExampleInput4');
    var emailInput = document.getElementById('formGroupExampleInput3');
    var firstNameInput = document.getElementById('formGroupExampleInput');
    var lastNameInput = document.getElementById('formGroupExampleInput2');
    var phonePattern = /^\d{10}$/; // Este patrón requiere exactamente 10 dígitos
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Este patrón valida el formato del correo electrónico

    var alertHTML = '';

    if (!phonePattern.test(phoneInput.value)) {
        alertHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
        alertHTML += 'Ingrese un número de teléfono válido (10 dígitos).';
        alertHTML += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        event.preventDefault(); // Evita que el formulario se envíe si la validación del teléfono falla
    }

    if (!emailPattern.test(emailInput.value)) {
        alertHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
        alertHTML += 'Ingrese un correo electrónico válido.';
        alertHTML += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        event.preventDefault(); // Evita que el formulario se envíe si la validación del correo electrónico falla
    }

    if (firstNameInput.value.length < 4) {
        alertHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
        alertHTML += 'Ingrese un nombre con más de 3 caracteres.';
        alertHTML += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        event.preventDefault(); // Evita que el formulario se envíe si la validación del nombre falla
    }

    if (lastNameInput.value.length < 4) {
        alertHTML += '<div class="alert alert-warning alert-dismissible fade show" role="alert">';
        alertHTML += 'Ingrese un apellido con más de 3 caracteres.';
        alertHTML += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        event.preventDefault(); // Evita que el formulario se envíe si la validación del apellido falla
    }

    // Agregar la alerta al inicio del formulario si hay algún mensaje de alerta
    if (alertHTML !== '') {
        var alertElement = document.createElement('div');
        alertElement.innerHTML = alertHTML;
        document.getElementById('validationForm').insertAdjacentElement('afterbegin', alertElement);
        alertElement.querySelector('.btn-close').addEventListener('click', function() {
            alertElement.remove();
        });
    }
});





