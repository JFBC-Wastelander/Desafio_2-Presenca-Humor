import { Schema, model } from "mongoose"

const studentSchema = new Schema ({
    name: {
        type: Schema.Types.String,
        required: true
    },
    age: {
        type: Schema.Types.Number,
        required: true,
        min: 0
    },
    class: {
        type: Schema.Types.String,
        enum: ["MORNING", "AFTERNOON", "NOCTURNAL", "NON-LISTED"],
        default: "NON-LISTED",
        required: true
    }
})

const Student = model("Student", studentSchema)

export default Student