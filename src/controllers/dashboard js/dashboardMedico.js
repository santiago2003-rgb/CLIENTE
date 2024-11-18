let medicos = [
    {
        id: 1,
        nombres: "Dr. Juan Pérez",
        matriculaProfesional: "MP12345",
        especialidad: "Cardiología",
        salario: 12000000,
        ips: "Clínica del Corazón",
        correo: "juan.perez@clinicacorazon.com",
        telefono: "+57 3001234567",
        direccion: "Calle 45 #12-34, Bogotá",
        disponibleFinDeSemana: true
    },
    {
        id: 2,
        nombres: "Dra. María Gómez",
        matriculaProfesional: "MP54321",
        especialidad: "Pediatría",
        salario: 9000000,
        ips: "Hospital Infantil",
        correo: "maria.gomez@hospitalinfantil.com",
        telefono: "+57 3107654321",
        direccion: "Carrera 15 #78-90, Medellín",
        disponibleFinDeSemana: false
    },
    {
        id: 3,
        nombres: "Dr. Carlos Ramírez",
        matriculaProfesional: "MP67890",
        especialidad: "Dermatología",
        salario: 10000000,
        ips: "Centro Dermatológico",
        correo: "carlos.ramirez@centroderma.com",
        telefono: "+57 3209876543",
        direccion: "Avenida 68 #45-67, Cali",
        disponibleFinDeSemana: true
    },
    {
        id: 4,
        nombres: "Dra. Laura Torres",
        matriculaProfesional: "MP98765",
        especialidad: "Ginecología",
        salario: 11000000,
        ips: "Maternidad Feliz",
        correo: "laura.torres@maternidadfeliz.com",
        telefono: "+57 3158765432",
        direccion: "Diagonal 75 #22-10, Barranquilla",
        disponibleFinDeSemana: false
    }
]

let fila = document.getElementById("fila")

medicos.forEach(function(medico){
    console.log(medico)
    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    let nombre = document.createElement("h2")
    nombre.textContent = medico.nombres

    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})