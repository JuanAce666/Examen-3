let isValid=false;

let listaEmpleados = [];

const objEmpleado = {
    id: '',
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    telefono: '',
    fecha: '',
    hora: ''
}

let editando = false;

const formulario3 = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const apellidoInput = document.querySelector('#apellido');
const cedulaInput = document.querySelector('#cedula');
const correoInput = document.querySelector('#correo');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');

const btnAgregar = document.querySelector('#btnAgregar');

formulario3.addEventListener('submit', validarFormulario2);

function validarFormulario2(e) {
    e.preventDefault();

    // if (nombreInput.value === '' || apellidoInput.value === '') {
    //     alert('Todos los campos son obligatorios');
    //     return;
    // }

    

    if (editando) {
        editarEmpleado();

        editando = false;
    }else {
        
    }
}

function validarFormulario3(callBack) {
    console.log('hello again');
        objEmpleado.id = Date.now();
        objEmpleado.nombre = nombreInput.value;
        objEmpleado.apellido = apellidoInput.value;
        objEmpleado.cedula = cedulaInput.value;
        objEmpleado.correo = correoInput.value;
        objEmpleado.telefono = telefonoInput.value;
        objEmpleado.fecha = fechaInput.value;
        objEmpleado.hora = horaInput.value;

        if (isValid) {
            console.log(objEmpleado, 'ladsjflkjads');
            agregarEmpleado();

            isValid=false;
            return callBack();
        }

}

function agregarEmpleado() {
    listaEmpleados.push({...objEmpleado});

    mostrarEmpleados();

    formulario.reset();

    limpiarObjeto();
}

// CLEAN THE FORM ONCE YOU ADD A NEW APPOINTMENT
function limpiarObjeto() {
    objEmpleado.id = '',
    objEmpleado.nombre = '',
    objEmpleado.apellido = '',
    objEmpleado.cedula = '',
    objEmpleado.correo = '',
    objEmpleado.telefono = '',
    objEmpleado.fecha = '',
    objEmpleado.hora = ''

}

// MOSTRANDO EMPLEADOS EN LA TABLA

function mostrarEmpleados() {

    limpiarHTML();

    const divEmpleados = document.querySelector('.div-citas');

    listaEmpleados.forEach(empleado => {
        const {id, nombre, apellido, cedula, correo, telefono, fecha, hora} = empleado;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${nombre} - ${apellido} - ${cedula} - ${correo} - ${telefono} - ${fecha} - ${hora}`;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(empleado);

        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id);

        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);
    })
}

// CARGANDO LOS EMPLEADOS
function cargarEmpleado(empleado) {
    const { id, nombre, apellido, cedula, correo, telefono, fecha, hora} = empleado;

    
    nombreInput.value = nombre;
    apellidoInput.value = apellido;
    cedulaInput.value = cedula;
    correoInput.value = correo;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;

    objEmpleado.id = id;

    formulario3.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

// EDITANDO EL EMPLEADO

function editarEmpleado() {
    
    objEmpleado.nombre = nombreInput.value;
    objEmpleado.apellido = apellidoInput.value;
    objEmpleado.cedula = cedulaInput.value;
    objEmpleado.correo = correoInput.value;
    objEmpleado.telefono = telefonoInput.value;
    objEmpleado.fecha = fechaInput.value;
    objEmpleado.hora = horaInput.value;

    listaEmpleados.map(empleado => {

        if (empleado.id === objEmpleado.id) {
            
            empleado.id = objEmpleado.id;
            empleado.nombre = objEmpleado.nombre;
            empleado.apellido = objEmpleado.apellido;
            empleado.cedula = objEmpleado.cedula;
            empleado.correo = objEmpleado.correo;
            empleado.telefono = objEmpleado.telefono;
            empleado.fecha = objEmpleado.fecha;
            empleado.hora = objEmpleado.hora;
        }

    });

    limpiarHTML();
    mostrarEmpleados();

    formulario3.reset();

    formulario3.querySelector('button[type="submit"]').textContent = 'Agregar';

    editando = false;
}

function eliminarEmpleado(id) {
    
    listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);

    limpiarHTML();
    mostrarEmpleados();
}

function limpiarHTML() {
    const divEmpleados = document.querySelector('.div-citas');

    while(divEmpleados.firstChild){
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
}