import { Schema, model} from "mongoose"

interface ITask {
    name: string;
    time: number;
}


const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for thr e task "]
    },
    time: {
        type: Number,
        required: [true, "Please input time for task"]
    }
})

export default model<ITask>("Task", TaskSchema)
