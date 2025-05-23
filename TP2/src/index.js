import express from "express";
import userRoutes from "./routes/usuario.route.js"

const server = express()
const PORT = 8080

//MiddleWare
server.use(express.json)

//Endpoint Entidad Usuario
//Esta en las rutas ahora

server.use("/", userRoutes)

//Levanta el Servidor
server.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`))


//Endpoints... Esto ahora va en el controlador
//server.get("/", (req, res) => {
  //  res.send("Ruta Base")
//}) 