//Declaraciones
const servidorHTTP = require('express');
const app = servidorHTTP();
const port = process.env.PORT || 3000;
//Configuraciones

app.get("/",(req, res)=>{
    res.send('Pagina principal. Servidor en Node.js')
})
app.get('*',(req, res)=>{
    res.send('404 | Pagina no encontrada')
})

//Procesos - Mensajes para el desarrollador

app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto',port);
})