const EquipoController = require("../controllers/equipo.controller");

module.exports = app => {
    app.get('/api/equipos', EquipoController.get_all);
    app.post('/api/equipos', EquipoController.create_equipo);
    app.get('/api/equipos/:id', EquipoController.get_equipo);
    app.put('/api/equipos/:id', EquipoController.editar_equipo);
    app.delete('/api/equipos/:id', EquipoController.delete_equipo);
}

