const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());


mongoose.connect("mongodb://127.0.0.1:27017/sportsRentalDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


const EquipmentSchema = new mongoose.Schema({
    name: String,
    type: String,
    availability: Boolean,
    rentalPrice: Number
});

const Equipment = mongoose.model("Equipment", EquipmentSchema);



app.post("/equipment", async (req, res) => {
    try {
        const newEquipment = new Equipment(req.body);
        await newEquipment.save();
        res.status(201).json({ message: "Equipment added", data: newEquipment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get("/equipment", async (req, res) => {
    try {
        const equipmentList = await Equipment.find();
        res.status(200).json(equipmentList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get("/equipment/:id", async (req, res) => {
    try {
        const equipment = await Equipment.findById(req.params.id);
        if (!equipment) return res.status(404).json({ message: "Equipment not found" });
        res.status(200).json(equipment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.put("/equipment/:id", async (req, res) => {
    try {
        const updatedEquipment = await Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEquipment) return res.status(404).json({ message: "Equipment not found" });
        res.status(200).json({ message: "Equipment updated", data: updatedEquipment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.delete("/equipment/:id", async (req, res) => {
    try {
        const deletedEquipment = await Equipment.findByIdAndDelete(req.params.id);
        if (!deletedEquipment) return res.status(404).json({ message: "Equipment not found" });
        res.status(200).json({ message: "Equipment deleted", data: deletedEquipment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
         
app.listen(5678, () => console.log("Server running on port 5678"));
