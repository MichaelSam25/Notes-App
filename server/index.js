const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const NoteModel = require("./Models/Notes")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://michaelsamymuthu:KPWLtlCTUDYb5oq3@cluster0.vdtoa3x.mongodb.net/sample")

app.get("/get", (req, res) => {
    NoteModel.find()
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

app.delete("/delete/:id", (req, res) => {
    const {id} = req.params;
    NoteModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

app.post("/add", (req, res) => {
    const task = req.body.task
    NoteModel.create({
        task:task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is Running")
})