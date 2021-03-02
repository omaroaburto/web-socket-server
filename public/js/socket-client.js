const ionline  = document.querySelector("#ionline");
const ioffline = document.querySelector("#ioffline");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");
const socket = io();

socket.on("connect",()=>{
    console.log("Se ha conectado el cliente");
    ioffline.style.display = 'none';
    ionline.style.display  = ''
});

socket.on("disconnect",()=>{
    console.log("Se ha desconectado el cliente");
    ioffline.style.display = '';
    ionline.style.display  = 'none'
});

socket.on("enviar-mensaje",(payload)=>{
    console.log(payload);
});

btnEnviar.addEventListener("click",()=>{
    const  mensaje =  txtMensaje.value;
    const payload = {
        mensaje,
        id: 131304,
        fecha: new Date().getTime()
    } 
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('Desde el server ',id)
    });
});