const buton_iniciar_sesion = document.getElementById('buton_iniciar_sesion');
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');



function validarCorreo(campo)
{
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(campo.value))
    {
        campo.classList.remove('elemento_vacio');
        
    }
    else
    {
        campo.classList.add('elemento_vacio');
    }
}

function validarCampo(campo)
{
    if(campo.value.trim() === '')
    {
        campo.classList.add('elemento_vacio');
    }
    else
    {
        campo.classList.remove('elemento_vacio')
    }
}

correo.addEventListener("input", function(){validarCorreo(correo);});
correo.addEventListener("blur", function(){validarCorreo(correo);});
contrasena.addEventListener("input", function(){validarCampo(contrasena);});
contrasena.addEventListener("blur", function(){validarCampo(contrasena);});

buton_iniciar_sesion.addEventListener('click', () => {

    let correo_valor = correo.value;
    let contrasena_valor = contrasena.value;

    if(correo_valor.trim() === '' || contrasena_valor.trim() === '')
    {
        event.preventDefault();
        alert('Por favor, llene todos los campos');
        validarCorreo(correo);
        validarCampo(contrasena);
    }
    else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(correo_valor))
    {
        event.preventDefault();
        alert('Correo no válido');
    }
    else
    {
        if(correo_valor === 'richard.soria@epn.edu.ec' && contrasena_valor === '123456')
        {
            alert('Ingreso exitoso');
        }
        else
        {
            event.preventDefault();
            alert('Correo o contraseña incorrectos');
        }
    }
    
});