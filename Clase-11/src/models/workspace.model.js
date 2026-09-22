import mongoose from "mongoose";
const workspaceSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
            required: true,
            maxlength: 30,
            trim: true
        },
        description: {
            type: String,
            maxlength: 200,
            trim: true   
        },
        fecha_creacion: {
            type: Date,
            default: Date.now
        }
    }
);
const Workspace = mongoose.model('EspacioTrabajo', workspaceSchema);
export default Workspace;

