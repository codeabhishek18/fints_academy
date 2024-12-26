import { Schema } from "mongoose"

const folderSchema = new Schema({
    name:
    {
        type: String,
        required: true
    },
    parentId:
    {
        type: Schema.Types.ObjectId,
        ref: 'Folder',
        default: null
    },
    user:
    {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    course:
    {
        type: Schema.Types.ObjectId,
        ref:  'Course'
    }
},{timestamps: true})