const mongoose = require("mongoose");

const RefrigerantesSchema = new mongoose.Schema({
    marca: { type: String, required: true, unique: true },
    quantidade: { type: String, required: true },
    precoLata: { type: String, required: true }
});

module.exports = mongoose.model("Refrigerantes", RefrigerantesSchema);