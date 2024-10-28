let nombreMedico = document.getElementById("nombreMedico")
let matriculaMedico = document.getElementById("matriculaMedico")
let especialidadMedico = document.getElementById("especialidadMedico")
let salarioMedico = document.getElementById("salarioMedico")
let ipsMedico = document.getElementById("ipsMedico")
let correoMedico = document.getElementById("correoMedico")
let telefonoMedico = document.getElementById("telefonoMedico")
let direccionMedico = document.getElementById("direccionMedico")
let disponnibleFinSemana = document.getElementById("disponibleFinSemana")

let botonRegistroMedico = document.getElementById("botonRegistroMedico")

botonRegistroMedico.addEventListener("click", function(evento) {
    evento.preventDefault()

    let datosFormularioMedico = {
        nombres: nombreMedico.value,
        matriculaProfesional: matriculaMedico.value,
        especialidad: especialidadMedico.value,
        salario: salarioMedico.value,
        ips: ipsMedico.value,
        correo: correoMedico.value,
        telefono: telefonoMedico.value,
        direccion: direccionMedico.value,
        disponibleFinDeSemana: disponnibleFinSemana.value
    }

    console.log(datosFormularioMedico)

    Swal.fire({
        title: "Registro exitoso",
        text: "Ya eres parte de nuestra gran familia",
        icon: "success"
    });
})