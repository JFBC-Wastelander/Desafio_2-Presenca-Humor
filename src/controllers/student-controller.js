import Student from "../models/student-model.js"

export const store = async (req, res) => {
    try {
        let content = await Student.create(req.body)
        res.status(201).json(content)
    } catch (err) {
        res.status(400).json(err)
    }
}

export const index = async (req, res) => {
    try {
        let content = await Student.find().exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err)
    }
}

export const show = async (req, res) => {
    try {
        let content = await Student.findById(req.params.id).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err)
    }
}