import categoryModel from "../models/categoryModel.js";

const categoryController = {

    getCategories: async (req, res) => {
        try {
            const categories = await categoryModel.getCategories()
            res.send(categories)
        }catch (e) {
            console.error(e);
        }
    },

    getCategory: async (req, res) => {
        try {
            const id = req.params.id
            const category = await categoryModel.getCategory(id)
            res.send(category)
        }catch (e) {
            console.error(e);
        }
    }, 

    createCategory: async (req, res) => {
        try {
            const { category_name, state } = req.body
            const category = await categoryModel.createCategory(category_name, state)
            res.status(201).send(category)
        }catch (e) {
            console.error(e);
        }
    }, 

    deleteCategory: async (req, res) => {
        try {
            const id = req.params.id
            const category = await categoryModel.deleteCategory(id)
            res.send(category)
        }catch (e) {
            console.error(e);
        }
    }, 

    modifyCategory: async (req, res) => {
        try {
            const id = req.params.id
            const { category_name, state } = req.body
            const category = await categoryModel.modifyCategory(category_name, state, id)
            res.send(category)
        }catch (e) {
            console.error(e);
        }
    },

}

export default categoryController;
