async function requestHandler(req, res) {
  try {
    const user = await User.findById(req.UserId);
    const tareas = await Tareas.findById(user.tareasId);
    tareas.completed = true;
    await tareas.save();
    res.send("tarea completada");
  } catch (error) {
    res.send(error);
  }
}
