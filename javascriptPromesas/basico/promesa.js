///
function requestHandler(req, res) {
  User.findById(req.userId)
    .then(function (user) {
      return Tareas.findById(user, tareasId);
    })
    .then(function (task) {
      tareas.completed = true;
      return tareas.save()
    })
    .then(function(){
        res.send("Tarea completa");
    })
    .catch(function (errores) {
      res.send(errores);
    });
}