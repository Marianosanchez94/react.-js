//SUBMIT

const formulario = document.querySelector("#login");

formulario.addEventListener('submit', e => {
    e.preventDefault()
    
    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;
    

    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta');

    if (nombre === " " || password === " ") {
        alerta.textContent = "Campos Obligatorios"
        alerta.classList.add('error')
    } else {
        alerta.textContent = "Felicitaciones"
        alerta.classList.add('exito')
    };

    formulario.appendChild(alerta);
})