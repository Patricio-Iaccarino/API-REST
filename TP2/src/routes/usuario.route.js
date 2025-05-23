import express from "express"
import usuarioController from "../controllers/usuario.controller"

const router = express.Router()

router.get("/usuarios", usuarioController.getUsers)
//router.post("/usuarios", usuarioController.postUsers)
//router.patch("/usuarios", usuarioController.patchUsers)

export default router