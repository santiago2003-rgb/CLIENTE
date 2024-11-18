//OBJETIVO: Capturar los datos de un formulario

//1. por cada input, select, textarea del formularion se crea una variable

//2. por cada variable debo utilizar el DOM para asociasar el html con js

let nombrePaciente = document.getElementById("nombrePaciente")
let correoPaciente = document.getElementById("correoPaciente")
let telefonoPaciente = document.getElementById("telefonoPaciente")
let ciudadPaciente = document.getElementById("ciudadPaciente")
let anioNacimiento = document.getElementById("nacimientoPaciente")
let polizaPaciente = document.getElementById("polizaPaciente")
let ipsPaciente = document.getElementById("ipsPaciente")
let grupoIngresoPaciente = document.getElementById("ingresosPaciente")
let fechaAfiliacionPaciente = document.getElementById("afiliacionPaciente")

//3. Crear una variable para asociar al id del boton que tengo en mi html
let botonRegistroPaciente = document.getElementById("botonRegistroPaciente")

//4.Dectetamos acciones o evnetos del boton
botonRegistroPaciente.addEventListener("click", function(evento) {
    evento.preventDefault()

    //5. Se crea un JSON que capture todos los datos del formulario
    let datosFormularioPaciente = {
        nombres: nombrePaciente.value,
        anioNacimiento: anioNacimiento.value,
        ciudad: ciudadPaciente.value,
        correo: correoPaciente.value,
        telefono: telefonoPaciente.value,
        ips: ipsPaciente.value,
        grupoIngresos: grupoIngresoPaciente.value,
        tienePoliza: polizaPaciente.value,
        fechaAfiliacion: fechaAfiliacionPaciente.value
    }

    //6. Se envia los datos al back
    console.log(datosFormularioPaciente)

    Swal.fire({
        title: "Registro exitoso",
        text: "Ya eres parte de nuestra gran familia",
        icon: "success"
    });
})



