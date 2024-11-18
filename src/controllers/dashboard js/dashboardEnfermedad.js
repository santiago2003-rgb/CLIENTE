let enfermedades = [
    {
        id: 1,
        nombre: "Gripe Común",
        sintomas: "Fiebre, tos, dolor de garganta, congestión nasal, dolor de cabeza",
        clasificacion: "Viral",
        grado: "Leve",
        probabilidadVida: "Alta"
    },
    {
        id: 2,
        nombre: "Diabetes Tipo 2",
        sintomas: "Aumento de la sed, micción frecuente, hambre constante, fatiga, visión borrosa",
        clasificacion: "Crónica",
        grado: "Moderada",
        probabilidadVida: "Alta con tratamiento"
    },
    {
        id: 3,
        nombre: "Neumonía",
        sintomas: "Fiebre alta, tos con flema, dolor en el pecho, dificultad para respirar",
        clasificacion: "Bacteriana/Viral",
        grado: "Grave",
        probabilidadVida: "Variable, depende del tratamiento y la condición del paciente"
    },
    {
        id: 4,
        nombre: "Cáncer de Pulmón",
        sintomas: "Tos persistente, pérdida de peso, dolor en el pecho, dificultad para respirar, fatiga",
        clasificacion: "Oncológica",
        grado: "Severo",
        probabilidadVida: "Baja sin tratamiento, mejora con intervención"
    }
]

let fila = document.getElementById("fila")

enfermedades.forEach(function(enfermedad){
    console.log(enfermedad)
    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    let nombre = document.createElement("h2")
    nombre.textContent = enfermedad.nombre

    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})