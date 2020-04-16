const path = require("path");

function render(file, res) {
  return res.sendFile(path.join(__dirname + `/../${file}.html`));
}

class ModeloController {
  async index(req, res) {
    return render("index", res);
  }
}

module.exports = new ModeloController();