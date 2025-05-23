import usuarioService from "../services/usuario.service.js"


const getUsers = async (req, res) => {
    const data = await usuarioService.getUsers()
    res.send(data)
}

const postUsers = async (req, res) => {
    const data = await usuarioService.postUsers()
    res.send(data)
}

const patchUsers = async (req, res) => {
    const data = await usuarioService.patchUsers()
    res.send(data)
}

export default {
    getUsers,
    postUsers,
    patchUsers
}