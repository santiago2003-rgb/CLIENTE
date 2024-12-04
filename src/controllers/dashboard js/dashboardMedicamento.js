import { buscarMedicamentos} from "../../services/serviciosMedicamento.js"

buscarMedicamentos()
.then(function(respuestaBack){
    console.log(respuestaBack)
    let fila = document.getElementById("fila")

    respuestaBack.forEach(function(medicamento){
    console.log(medicamento)
    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    let nombre = document.createElement("h2")
    nombre.textContent = medicamento.nombre
    
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})
})