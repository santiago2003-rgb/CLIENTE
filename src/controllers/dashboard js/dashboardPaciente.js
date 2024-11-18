//Objetivo: Recibir datos del back y hacerles render(render=PINTARLOS)
//PASO 1 quemar o simular los datos
let pacientes = [
    {
        id: 1,
        nombres: "Heidy Julieth Quiceno",
        anioNacimiento: "2006-12-13",
        ciudad: "Medellin",
        correo: "heidyquiceno270@gmail.com",
        telefono: "3044523732",
        ips: "Sura confama",
        grupoIngresos: "C",
        tienePoliza: true,
        fechaAfiliacion: "2020-06-15"
    },
    {
        id: 2,
        nombres: "Carlos Andrés Gómez",
        anioNacimiento: "1998-04-23",
        ciudad: "Bogotá",
        correo: "carlosgomez123@gmail.com",
        telefono: "3101234567",
        ips: "Nueva EPS",
        grupoIngresos: "B",
        tienePoliza: false,
        fechaAfiliacion: "2018-11-05"
    },
    {
        id: 3,
        nombres: "Laura Marcela Torres",
        anioNacimiento: "2002-08-16",
        ciudad: "Cali",
        correo: "lauratorres89@hotmail.com",
        telefono: "3159876543",
        ips: "Coomeva",
        grupoIngresos: "A",
        tienePoliza: true,
        fechaAfiliacion: "2021-02-10"
    },
    {
        id: 4,
        nombres: "Juan David Pérez",
        anioNacimiento: "1995-09-30",
        ciudad: "Barranquilla",
        correo: "juandavidperez91@yahoo.com",
        telefono: "3124567890",
        ips: "Sanitas",
        grupoIngresos: "C",
        tienePoliza: false,
        fechaAfiliacion: "2019-07-22"
    }
]

//PASO 2. Crear una referencia a una etiqueta de html donde vamos a renderizar
let fila = document.getElementById("fila")

//PASO 3. Se recorren los datos para obtenerlos de forma separada
pacientes.forEach(function(paciente){
    console.log(paciente    )
    //PASO 4. Se crean columnas
    let columna = document.createElement("div")
    columna.classList.add("col")

    //PASO 5.Se crea tarjetas
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    //PASO 6. Se crea una etiqueta para poner el nombre
    let nombre = document.createElement("h2")
    nombre.textContent = paciente.nombres

    //PASO FINAL. (ORDENANDO LAS CARTAS)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})