import usuarioModel from "../models/usuario.model.js"

const getUsers = async () => {
    const data = await usuarioModel.getUsers()
    return data
}  

const postUsers = async () => {
    const data = await usuarioModel.postUsers()
    return data
}  

const patchUsers = async () => {
    const data = await usuarioModel.patchUsers()
    return data
}  

export default {
    getUsers,
    postUsers,
    patchUsers
}