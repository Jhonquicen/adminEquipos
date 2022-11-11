const Equipo = require("../models/equipo.model");

//Controlador para traer todas las instacias de una colección, se usa para Listar
module.exports.get_all = (req, res) => {
    Equipo.find().sort({nombre: 1})
        .then(equipos => res.json(equipos))
        .catch( err =>{
            console.log(err);
            res.status(400).json(err);
        });
}

//Controlador para crear objetos en la colección
module.exports.create_equipo = (req, res) => {
    Equipo.create(req.body)  // (req,body) es el cuerpo de la solicitud axios.put(url) nombre:(""), posicion:("")
        .then(equipo => res.json(equipo))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
}

//Actualizar un objeto en especifico
module.exports.editar_equipo = (req, res) => {
    Equipo.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }) // el params es el id 
    .then(item=> res.json(item))
    .catch(err => res.status(400).json(err));
}

//Obtener un solo objeto de la colección basado en la condición,se usa para detallar
module.exports.get_equipo = (req, res) => {
    Equipo.findOne({ _id: req.params.id }) //este .id tiene que coincidir con el id de la ruta
        .then(player => res.json(player))
        .catch(err => res.status(404).json({ message: "Error" + err }));
}

//Borrar un objeto en especifico
module.exports.delete_equipo = (req, res) => {
    Equipo.deleteOne({_id: req.params.id})//regresa algo en el body
        .then(result => res.json(result))
        .catch(err => res.json({message: "Hubo un error "+err}));
}
