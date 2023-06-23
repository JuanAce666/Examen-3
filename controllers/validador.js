// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input');



const formulario2=document.getElementById('formulario')
const inputs2 = document.querySelectorAll('#formulario')

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{10, 15}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{10, 15}$/, // Letras y espacios, pueden llevar acentos.
    cedula: /^\d{10}$/, // 10 numeros.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10}$/ // 10 numeros.
}

const campos = {
    nombre:false,
	apellido:false,
	cedula:false,
	correo:false,
	telefono:false
}

const validarFormulario = (e) =>{
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
			break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
			break;
		case "cedula":
			validarCampo(expresiones.cedula, e.target, 'cedula');
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
			break;
	
		default:
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	console.log(campo, expresion, input);
	if (expresion.test(input.value)) {
		document?.getElementById(`grupo__${campo}`)?.classList?.remove('formulario__grupo-incorrecto');

		document?.getElementById(`grupo__${campo}`)?.classList?.add('formulario__grupo-correcto');
		console.log('hello 2');
		document.querySelector(`#grupo__${campo} i`)?.classList?.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`)?.classList?.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`)?.classList?.remove('formulario__input-activo')
		campos[campo] = true;
		console.log(campo);
	} else {
		let variable= document.getElementById(`grupo__${campo}`);
		console.log(variable, 'hola');
		variable?.classList?.add('formulario__grupo-incorrecto');
		console.log(variable, 'hola santi');
		document?.getElementById(`grupo__${campo}`)?.classList?.remove('formulario__grupo-correcto');
		console.log('hello');
		document?.querySelector(`#grupo__${campo} i`)?.classList?.add('fa-times-circle');
		document?.querySelector(`#grupo__${campo} i`)?.classList?.remove('fa-check-circle');
		document?.querySelector(`#grupo__${campo} .formulario__input-error`)?.classList?.add('formulario__input-error-activo')
		campos[campo] = false;
		console.log('campo', campo); 
	}
}

inputs2.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
})

formulario2.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(campos);
	if (campos.nombre && campos.apellido && campos.cedula && campos.correo && campos.telefono) {
		
		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		console.log(campos, 'hello santi 2');
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(()=>{
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000)

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono)=>{
			icono.classList.remove('formulario__grupo-correcto')
		})
		isValid=true;
		validarFormulario3(() => {
			formulario2.reset();
		});
	}else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		console.log(campos, 'hello world');
	}
})
