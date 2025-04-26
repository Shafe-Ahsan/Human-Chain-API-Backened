const incidentModel = require("../models/incident-model");
const validator = require("../validate/validator");


module.exports.getAllIncidents = async (req, res) => {
  try {
    const incidents = await incidentModel.find({});
    res.status(200).json(incidents);
  } catch (error) {
    console.error("Error fetching incidents:", error);
    res.status(500).json({ message: "Error fetching incidents", error: error.message });
  }
};


module.exports.createIncident = async (req, res) => {
  try {
    const { title, description, severity } = req.body;
    const error = validator({ title, description, severity });
    
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    
    const newIncident = await incidentModel.create({
      title,
      description,
      severity,
    });
    
    return res.status(201).json(newIncident);
  } catch (error) {
    console.error("Error creating incident:", error);
    res.status(500).json({ message: "Failed to create incident", error: error.message });
  }
};


module.exports.getIncidentById = async (req, res) => {
  try {
    const { id } = req.params;
    const incident = await incidentModel.findById(id);
    
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }
    
    return res.status(200).json(incident);
  } catch (error) {
    console.error("Error fetching incident:", error);
    res.status(500).json({ message: "Error fetching incident", error: error.message });
  }
};


module.exports.deleteIncident = async (req, res) => {
  try {
    const { id } = req.params;
    const incident = await incidentModel.findById(id);
    
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }
    
    await incidentModel.findByIdAndDelete(id);
    return res.status(204).send(); 
  } catch (error) {
    console.error("Error deleting incident:", error);
    res.status(500).json({ message: "Failed to delete incident", error: error.message });
  }
};