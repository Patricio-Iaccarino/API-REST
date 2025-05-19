import express from "express";

const server = express()
const PORT = 8080

server.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`))

//Endpoints
server.get("/", (req, res) => {
    res.send("Ruta Base")
}) 