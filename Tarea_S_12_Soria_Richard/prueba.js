document.getElementById('form_encuesta').addEventListener('submit', calcularResultados);

function validarCampo(campo, vacio, tipo = 'texto') {
    if (campo.value.trim() === '' || (tipo === 'select' && campo.value === 'seleccionar'))
    {
        campo.classList.add('elemento_vacio');
        vacio.innerHTML = '*Campo obligatorio';
        return false;
    } 
    else 
    {
        campo.classList.remove('elemento_vacio');
        vacio.innerHTML = '';
        return true;
    }
}

function calcularResultados(event) {
    event.preventDefault();

    let puntaje = 0;
    const respuestas =
    {
        pregunta1: "254",
        pregunta2: "falso",
        pregunta3: "192.0.0.0 - 223.255.255.255",
        pregunta4: ["192.168.1.1", "172.16.0.1"],
        pregunta5: "IPv4 maneja 32 bits y IPv6 maneja 128 bits"
    };

    let valid = true;

    const pregunta1 = document.getElementById('pregunta1');
    if (validarCampo(pregunta1, document.getElementById('pregunta1_vacio'))) {
        if (pregunta1.value.trim() === respuestas.pregunta1)
        {
            puntaje += 2;
        }
    } 
    else 
    {
        valid = false;
    }

    const pregunta2 = document.querySelector('input[name="pregunta2"]:checked');
    if (pregunta2) 
    {
        document.getElementById('pregunta2_vacio').innerHTML = '';
        if (pregunta2.value === respuestas.pregunta2) {
            puntaje += 2;
        }
    } 
    else 
    {
        document.getElementById('pregunta2_vacio').innerHTML = '*Campo obligatorio';
        valid = false;
    }

    const pregunta3 = document.getElementById('pregunta3');
    if (validarCampo(pregunta3, document.getElementById('pregunta3_vacio'), 'select')){
        if (pregunta3.value === respuestas.pregunta3)
            {
            puntaje += 2;
        }
    } 
    else 
    {
        valid = false;
    }

    const pregunta4 = document.querySelectorAll('input[name="pregunta4"]:checked');
    let pregunta4_correcta = true;
    if (pregunta4.length > 0) 
    {
        document.getElementById('pregunta4_vacio').innerHTML = '';
        pregunta4.forEach((checkbox) => {
            if (!respuestas.pregunta4.includes(checkbox.value)) 
            {
                pregunta4_correcta = false;
            }
        });
    } 
    else 
    {
        pregunta4_correcta = false;
        document.getElementById('pregunta4_vacio').innerHTML = '*Campo obligatorio';
        valid = false;
    }
    if (pregunta4_correcta)
    {
        puntaje += 2;
    }

    const pregunta5 = document.getElementById('pregunta5');
    if (validarCampo(pregunta5, document.getElementById('pregunta5_vacio')))
    {
        if (pregunta5.value.trim() === respuestas.pregunta5)
        {
            puntaje += 2;
        }
    } 
    else 
    {
        valid = false;
    }

    if (valid) 
    {
        mostrarResultados(puntaje);
    }
}

function mostrarResultados(puntaje) {
    let mensaje = '';
    if (puntaje < 5)
        {
        mensaje = '<span style="color: red;">Insuficiente</span>';
    } 
    else if (puntaje < 7)
    {
        mensaje = '<span style="color: orange;">Regular</span>';
    } 
    else if (puntaje < 9)
        {
        mensaje = '<span style="color: green;">Buena</span>';
    } 
    else 
    {
        mensaje = '<span style="color: blue;">Sobresaliente</span>';
    }
    document.getElementById('resultados').innerHTML = `Puntaje: ${puntaje}/10<br>${mensaje}`;
}