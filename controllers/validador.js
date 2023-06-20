let boton=document.getElementById("botonagenda")

let cajaNombres=document.getElementById("usuario")
let cajaCorreo=document.getElementById("correo")
let cajaTelefono=document.getElementById("telefono")
let cajaFecha=document.getElementById("fecha")
let cajaHora=document.getElementById("hora")

//Quiero programar el evento de hacer clic en el boton
boton.addEventListener("click",function(infoEvento){
    infoEvento.preventDefault()

    let usuario=cajaNombres.value
    let correo=cajaCorreo.value
    let telefono=cajaTelefono.value
    let fecha=cajaFecha.value
    let hora=cajaHora.value
    

    let errores=[]
    let citas
    let datosMemoria=JSON.parse(localStorage.getItem("datos"))
    if(!datosMemoria){
        citas=[]
    }else{
        citas=datosMemoria
        //citas=citas.push(datosMemoria)
    }
    
    if(!usuario){
        errores.push("El nombre es obligatorio")
        cajaNombres.classList.add("is-invalid")
    }

    if(!correo){
        errores.push("El correo es obligatorio")
        cajaCorreo.classList.add("is-invalid")
    }

    if(!telefono){
        errores.push("El telefono es obligatorio")
        cajaTelefono.classList.add("is-invalid")
    }

    if(!fecha){
        errores.push("La fecha es obligatoria")
        cajaFecha.classList.add("is-invalid")
    }

    if(hora=='Seleccione una hora'){
        errores.push("La hora es obligatorio")
        cajaHora.classList.add("is-invalid")
    }

    
    if(errores.length==0){
        
        let datosEnvio={
            usuario,
            correo,
            fecha,
            hora,
            telefono
        }
        citas.push(datosEnvio)
        
        //abrimos la memoria para almacenar la data
        localStorage.setItem("datos",JSON.stringify(citas))

    }

    /*Swal.fire(
        'Te esperamos!',
        'Su cita ha sido agendada',
        'success'
    )*/
})