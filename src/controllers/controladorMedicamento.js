let nombreMedicamento = document.getElementById("nombreMedicamento")
let presentacionMedicamento = document.getElementById("presentacionMedicamento")
let dosisMedicamento = document.getElementById("dosisMedicamento")
let laboratorioMedicamento = document.getElementById("laboratorioMedicamento")
let fechaCaducidadMedicamento = document.getElementById("fechaCaducidadMedicamento")
let contraIndicacionesMedicamento = document.getElementById("")
let registroMedicamento = document.getElementById("registroMedicamento")
let tieneCopago = document.getElementById("tieneCopago")

let botonRegistroMedicamento = document.getElementById("botonRegistroMedicamento")

botonRegistroMedicamento.addEventListener("click", function(evento) {
    evento.preventDefault()

    let datosFormularioMedicamento = {
        nombre: nombreMedicamento.value,
        presentacion: presentacionMedicamento.value,
        dosis: dosisMedicamento.value,
        laboratorio: laboratorioMedicamento.value,
        fechaCaducidad: fechaCaducidadMedicamento.value,
        contraIndicaciones: contraIndicacionesMedicamento.value,
        registro: registroMedicamento.value,
        tieneCopago: tieneCopago.value
    }

    console.log(datosFormularioMedicamento)

    Swal.fire({
        title: "Registro exitoso",
        text: "Ya eres parte de nuestra gran familia",
        icon: "success"
    });
})