/* ======= VALIDACION DEL FORMULARIO: ======= */ 

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,25}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}



const validarFormulario = (e) => {
    switch(e.target.name){
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            
        break;
    }

}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo_incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo_correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.remove('formulario_input_error-activo')
        campos[campo] = true;
    }else {
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo_incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo_correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario_input_error`).classList.add('formulario_input_error-activo')
        campos[campo] = false;
    }
}
const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo_password2`).classList.add('formulario_grupo_incorrecto');
        document.getElementById(`grupo_password2`).classList.remove('formulario_grupo_correcto');
        document.querySelector(`#grupo_password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_password2 .formulario_input_error`).classList.add('formulario_input_error-activo')
        campos['password'] = false;
    }else{
        document.getElementById(`grupo_password2`).classList.remove('formulario_grupo_incorrecto');
        document.getElementById(`grupo_password2`).classList.add('formulario_grupo_correcto');
        document.querySelector(`#grupo_password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_password2 .formulario_input_error`).classList.remove('formulario_input_error-activo')
        campos['password'] = true;
    }
}

inputs.forEach((entrada)=>{
    entrada.addEventListener('keyup', validarFormulario);
    entrada.addEventListener('blur', validarFormulario)
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos')
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked){
        formulario.reset();
        document.getElementById('formulario_mensaje_exito').classList.add('formulario_mensaje_exito-activo');
        setTimeout( () => {
        document.getElementById('formulario_mensaje_exito').classList.remove('formulario_mensaje_exito-activo');
        }, 5000);
    
        document.querySelectorAll('.formulario_grupo_correcto').forEach((icono) => {
            icono.classList.remove('formulario_grupo_correcto');
        })
    }else{
        document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
        setTimeout( () => {
            document.getElementById('formulario_mensaje').classList.remove('formulario_mensaje-activo');
        }, 4000)
    }
})