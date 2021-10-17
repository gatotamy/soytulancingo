import  mongoose  from "mongoose";

const ChangarroSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es necesario"],
    unique: true
  },
  imagen: {
    type: String,
    required: [true, "La imagen es necesaria"],
  },
  contenido: {
    type: String,
    required: [true, "El contenido es necesario"],
  },
  time: { type: Date, default: Date.now }

})

export default mongoose.models.Changarro || mongoose.model('Changarro', ChangarroSchema );