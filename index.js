const express = require("express");
const server = express();
const { PORT } = require("./config");
const { ModeloRouter } = require("./routes");

server.use("/", ModeloRouter);

server.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT}`);
});
