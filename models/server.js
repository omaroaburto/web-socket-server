const express =  require("express");
const cors = require("cors");  
const { socketController } = require("../sockets/controller");


class Server{
    constructor(){
        this.app =  express();
        this.port = process.env.PORT;
        this.server = require("http").createServer(this.app);
        this.io = require("socket.io")(this.server);

        //path rutas
        this.paths = {} 
        
        //Middlewares
        this.middlewares();
        //rutas
        this.routes(); 
        //sockets
        this.sockets();
    }

    middlewares(){
        //cors
        this.app.use(cors()); 
        //directorio público
        this.app.use(express.static('public')); 
    }

    //método de controla las rutas
    routes(){
        //this.app.use(this.paths.authPath, require('../routes/auth')); 
    }

    sockets(){
        this.io.on("connection", socketController);
    }

    listen(){
        this.server.listen(this.port,()=>{
            console.log("La aplicación está corriendo por el puerto ",this.port);
        })
    } 
}

module.exports = Server;