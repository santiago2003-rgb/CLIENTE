let signosVitales = [
    {
        id: 1,
        nombre: "Frecuencia Cardíaca",
        valor: "72 bpm",
        fechaMedida: "2024-11-12"
    },
    {
        id: 2,
        nombre: "Presión Arterial",
        valor: "120/80 mmHg",
        fechaMedida: "2024-11-11"
    },
    {
        id: 3,
        nombre: "Temperatura Corporal",
        valor: "36.7°C",
        fechaMedida: "2024-11-10"
    },
    {
        id: 4,
        nombre: "Frecuencia Respiratoria",
        valor: "16 respiraciones por minuto",
        fechaMedida: "2024-11-09"
    }
]

let fila = document.getElementById("fila")

signosVitales.forEach(function(signoVital){
    console.log(signoVital)
    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    let nombre = document.createElement("h2")
    nombre.textContent = signoVital.nombre

    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})