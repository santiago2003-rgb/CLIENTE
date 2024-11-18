let medicamentos = [
    {
        id: 1,
        nombre: "Paracetamol",
        presentacion: "Tabletas 500 mg",
        dosis: "500 mg cada 8 horas",
        laboratorio: "Laboratorios Genéricos S.A.",
        fechaCaducidad: "2025-06-15",
        contraIndicaciones: "Hipersensibilidad al paracetamol, insuficiencia hepática",
        registro: "REG123456",
        tieneCopago: false
    },
    {
        id: 2,
        nombre: "Ibuprofeno",
        presentacion: "Jarabe 100 mg/5 ml",
        dosis: "10 ml cada 6 horas",
        laboratorio: "Pharma Salud",
        fechaCaducidad: "2024-11-30",
        contraIndicaciones: "Úlcera gástrica, insuficiencia renal severa",
        registro: "REG789012",
        tieneCopago: true
    },
    {
        id: 3,
        nombre: "Amoxicilina",
        presentacion: "Cápsulas 500 mg",
        dosis: "500 mg cada 12 horas",
        laboratorio: "Antibióticos Global",
        fechaCaducidad: "2026-03-22",
        contraIndicaciones: "Alergia a penicilinas, mononucleosis infecciosa",
        registro: "REG345678",
        tieneCopago: false
    },
    {
        id: 4,
        nombre: "Loratadina",
        presentacion: "Tabletas 10 mg",
        dosis: "10 mg una vez al día",
        laboratorio: "Alergias y Más",
        fechaCaducidad: "2025-08-10",
        contraIndicaciones: "Hipersensibilidad al principio activo",
        registro: "REG901234",
        tieneCopago: true
    }
]

let fila = document.getElementById("fila")

medicamentos.forEach(function(medicamento){
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