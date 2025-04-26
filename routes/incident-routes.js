const express = require("express");
const router = express.Router();

const { 
  getAllIncidents,
  createIncident,
  getIncidentById,
  deleteIncident 
} = require("../controllers/incident-controller");

router.get("/", getAllIncidents);
router.post("/", createIncident);
router.get("/:id", getIncidentById);
router.delete("/:id", deleteIncident);

module.exports = router;