const Refrigerantes = require('../model/RefrigerantesSchema');

module.exports = {
    listar: async (req, res) => {
        Refrigerantes.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ titulo: 1 });
    },

    incluir: async (req, res) => {
        let obj = new Refrigerantes(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Refrigerantes(req.body);
        Refrigerantes.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        Refrigerantes.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },

    obterPeloId: async (req, res) => {
        Refrigerantes.findOne({ _id: req.params.id }, function (err, obj) {
            if (err)
                res.status(400).send(err);
            res.status(200).json(obj);
        });
    },

    filtrar: async (req, res) => {
        Refrigerantes.find({
            $or: [
                { titulo: { $regex: req.params.filtro, $options: "i" } },
            ],
        }, function (err, objetos) {
            if (err)
                res.status(400).send(err);
            res.json(objetos);
        }).sort({ titulo: -1 });

    },

};
