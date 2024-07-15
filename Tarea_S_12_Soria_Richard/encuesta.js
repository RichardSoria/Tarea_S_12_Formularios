const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const correo = document.getElementById('correo');
const pais = document.getElementById('pais');
const gustos = document.getElementById('gustos');
const curso = document.getElementById('curso');
const duracion = document.getElementById('duracion');
const boton_encuesta = document.getElementById('boton_encuesta');

const nombre_vacio = document.getElementById('nombre_vacio');
const edad_aviso = document.getElementById('edad_aviso');
const correo_aviso = document.getElementById('correo_aviso');
const pais_vacio = document.getElementById('pais_vacio');
const gustos_aviso = document.getElementById('gustos_aviso');
const curso_aviso = document.getElementById('curso_aviso');
const duracion_aviso = document.getElementById('duracion_aviso');

function validarCampo(campo, vacio) {
    if (campo.value.trim() === '') {
        campo.classList.add('elemento_vacio');
        vacio.innerHTML = '*Campo obligatorio';
    } else {
        campo.classList.remove('elemento_vacio');
        vacio.innerHTML = '';
    }
}

function validarGustos(campo) {
    if (campo.value.trim() === '') {
        campo.classList.add('texto_vacio');
        gustos_aviso.innerHTML = '*Campo obligatorio';
    } else {
        campo.classList.remove('texto_vacio');
        gustos_aviso.innerHTML = '';
    }
}

function validarEdad(campo) {
    if (campo.value.trim() === '') {
        campo.classList.add('elemento_vacio');
        edad_aviso.innerHTML = '*Campo obligatorio';
    } else {
        campo.classList.remove('elemento_vacio');
        if (campo.value < 1 || campo.value > 100) {
            campo.classList.add('elemento_vacio');
            edad_aviso.innerHTML = '*Edad no válida';
        } else {
            campo.classList.remove('elemento_vacio');
            edad_aviso.innerHTML = '';
        }
    }
}

function validarCorreo(campo) {
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(campo.value)) {
        campo.classList.remove('elemento_vacio');
        correo_aviso.innerHTML = '';
    } else {
        campo.classList.add('elemento_vacio');
        correo_aviso.innerHTML = '*Correo no válido';
    }
}

function validarDuracion(campo) {
    if (campo.value.trim() === '') {
        campo.classList.add('elemento_vacio');
        duracion_aviso.innerHTML = '*Campo obligatorio';
    } else {
        campo.classList.remove('elemento_vacio');
        if (campo.value < 10 || campo.value > 30) {
            campo.classList.add('elemento_vacio');
            duracion_aviso.innerHTML = '*Duración no válida';
        } else {
            campo.classList.remove('elemento_vacio');
            duracion_aviso.innerHTML = '';
        }
    }
}

function validarCurso(campo) {
    if (campo.value === 'seleccionar') {
        campo.classList.add('elemento_sin_seleccion');
        curso_aviso.innerHTML = '*Campo obligatorio';
    } else {
        campo.classList.remove('elemento_sin_seleccion');
        curso_aviso.innerHTML = '';
    }
}

nombre.addEventListener("input", function () { validarCampo(nombre, nombre_vacio); });
nombre.addEventListener("blur", function () { validarCampo(nombre, nombre_vacio); });

curso.addEventListener("input", function () { validarCurso(curso); });
curso.addEventListener("blur", function () { validarCurso(curso); });

edad.addEventListener("input", function () { validarEdad(edad); });
edad.addEventListener("blur", function () { validarEdad(edad); });

correo.addEventListener("input", function () { validarCorreo(correo); });
correo.addEventListener("blur", function () { validarCorreo(correo); });

pais.addEventListener("input", function () { validarCampo(pais, pais_vacio); });
pais.addEventListener("blur", function () { validarCampo(pais, pais_vacio); });

gustos.addEventListener("input", function () { validarGustos(gustos); });
gustos.addEventListener("blur", function () { validarGustos(gustos); });

duracion.addEventListener("input", function () { validarDuracion(duracion); });
duracion.addEventListener("blur", function () { validarDuracion(duracion); });

boton_encuesta.addEventListener('click', (event) => {
    const genero = document.querySelector('input[name="genero"]:checked');

    let nombre_valor = nombre.value;
    let genero_valor = genero ? genero.value : '';
    let edad_valor = edad.value;
    let correo_valor = correo.value;
    let pais_valor = pais.value;
    let gustos_valor = gustos.value;
    let curso_valor = curso.value;
    let duracion_valor = duracion.value;

    if (nombre_valor.trim() === '' || genero_valor.trim() === '' || edad_valor.trim() === '' || correo_valor.trim() === '' || pais_valor.trim() === '' || gustos_valor.trim() === '' || curso_valor === 'seleccionar' || duracion_valor.trim() === '') {
        event.preventDefault();
        alert('Por favor complete todos los campos');
        validarCampo(nombre, nombre_vacio);
        validarEdad(edad);
        validarCorreo(correo);
        validarCampo(pais, pais_vacio);
        validarGustos(gustos);
        validarCurso(curso);
        validarDuracion(duracion);
        if (genero_valor.trim() === '') {
            alert('Por favor seleccione un género');
        }
    }
    else {
        if(edad_valor < 18)
        {
            alert('Se agradece su interés, pero este curso es solo para mayores de edad');
            event.preventDefault();
        }
        else
        {
            alert('Gracias por completar la encuesta, será redirigido a una prueba de conocimientos');
            
        }
    }
});
