const { tareaUno, tareaDos } = require("./tareas");

async function main() {
  console.time("midiendo tiempo");
  const resultados = await Promise.all([tareaUno(), tareaDos()]);
  console.timeEnd("midiendo tiempo");

  console.log("tarea uno " + resultados[0]);
  console.log("tarea dos " + resultados[1]);
}

main();
