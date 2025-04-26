const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectedToDB = require("./config/mongoose-connect");
connectedToDB();

const incidentRoutes = require("./routes/incident-routes");
app.use("/incidents", incidentRoutes);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});