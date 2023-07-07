const util = require("util");
const dormir = util.promisify(setTimeout);
module.exports = {
  async tareaUno() {
    try {
      throw new Error("Some problem");
      await dormir(4000);
      return "valor Uno";
    } catch (e) {
      console.log("Error en tareaUno "+e);
    }
  },

  async tareaDos() {
    try {
      await dormir(2000);
      return "valor Dos";
    } catch (e) {
      console.log(e);
    }
  },
};
