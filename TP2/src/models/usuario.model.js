const users = [
    { id: 1, nombre: "Patricio Iaccarino", edad: 38, email: "patricio.iaccarino@gmail.com" },
    { id: 2, nombre: "Lionel Messi", edad: 37, email: "liomessi@gmail.com" },
    { id: 3, nombre: "Franco Colapinto", edad: 22, email: "franco43@gmail.com" },
]

const getUsers = async () => {
    return await users;
}  

const postUsers = async () => {
    return await users;
}  

const patchUsers = async () => {
    return await users;
}  

export default {
    getUsers,
    postUsers,
    patchUsers
}