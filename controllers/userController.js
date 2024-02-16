import userModel from "../models/userModel.js";

const userController = {

    getUsers: async (req, res) => {
        try {
            const users = await userModel.getUsers()
            res.send(users)
        }catch (e) {
            console.error(e);
        }
    },

    getUser: async (req, res) => {
        try {
            const id = req.params.id
            const user = await userModel.getUser(id)
            res.send(user)
        }catch (e) {
            console.error(e);
        }
    }, 

    createUser: async (req, res) => {
        try {
            const { user_name, user_email, user_password, rol, is_active } = req.body
            const user = await userModel.createUser(user_name, user_email, user_password, rol, is_active)
            res.status(201).send(user)
        }catch (e) {
            console.error(e);
        }
    }, 

    deleteUser: async (req, res) => {
        try {
            const id = req.params.id
            const user = await userModel.deleteUser(id)
            res.send(user)
        }catch (e) {
            console.error(e);
        }
    }, 

    modifyUser: async (req, res) => {
        try {
            const id = req.params.id
            const { user_name, user_email, user_password, is_active } = req.body
            const user = await userModel.modifyUser(user_name, user_email, user_password, is_active, id)
            res.send(user)
        }catch (e) {
            console.error(e);
        }
    },

}

export default userController;
