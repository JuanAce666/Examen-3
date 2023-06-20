let memoria=JSON.parse(localStorage.getItem("datos"))

let contenedor=document.getElementById("contenedor")

//RECORRER LA MEMORIA
memoria.forEach(function(cita){

    let fila=document.createElement("div")
    fila.classList.add("row","my-5","shadow","text-center","p-5")

    let columnaUno=document.createElement("div")
    columnaUno.classList.add("col-4")

    let columnaDos=document.createElement("div")
    columnaDos.classList.add("col-8","border-start","p-4")

    let titulo=document.createElement("h1")
    titulo.textContent="CITA ASIGNADA"

    let usuario=document.createElement("h3")
    usuario.textContent=cita.usuario

    let correo=document.createElement("p")
    correo.textContent="Email: "+cita.correo

    //padres e hijos
    columnaUno.appendChild(titulo)
    columnaDos.appendChild(usuario)
    columnaDos.appendChild(correo)
    fila.appendChild(columnaUno)
    fila.appendChild(columnaDos)
    contenedor.appendChild(fila)



})
