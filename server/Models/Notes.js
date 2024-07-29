const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
    task: String,
    done: {
        type:Boolean,
        default: false
    }
})

const NoteModel = mongoose.model("notes", NoteSchema)
module.exports = NoteModel