//importamos bibliotecas, cargar el modulo -- en este achivo
const express = require('express')
//importar el modulo de PATH
const path= require('path')
//creacion de la instancia
const app=express()
//Definir el puerto escuchar las solicitudes
const port = 3000

//creacion de las rutas 
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});

//Iniciar el Servidor
app.listen(port,()=>{
    console.log(`Servidor ejecutandose en http://localhost:${port}`)
})