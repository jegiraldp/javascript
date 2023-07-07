function requestHandler(req, res) {
  User.findById(req.userId, function (err, user) {
    if (err) {
      return res.send(err);
    } else {
      Tareas.findById(user.tareasId, function (err, tareas) {
        if (err) {
          return res.send(err);
        } else {
          tareas.completed = true;
          tareas.save(function (err) {
            if (err) {
              return res.send(err);
            } else {
              res.send("Tarea completa");
            }
          });
        }
      });
    }
  });
}