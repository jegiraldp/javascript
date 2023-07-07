const { tareaUno, tareaDos } = require("./tareas");

async function main() {
  console.time("midiendo tiempo");

  const vU = await tareaUno();
  const vD = await tareaDos();

  console.timeEnd("midiendo tiempo");

  console.log("tarea uno " + vU);
  console.log("tarea dos " + vD);
}

main();
