// routes/userDetailRoutes.js
const express = require("express");
const UserDetail = require("../models/UserDetail");
const router = express.Router();

// Route to create a new userDetailRoute
router.post("/", async (req, res) => {
  // const userDetail = new UserDetail(req.body);
  const newUserDetail = new UserDetail(req.body);

  try {
    const savedUserDetail = await newUserDetail.save();
    res.status(201).json(savedUserDetail);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to get all userDetailRoutes
router.get("/", async (req, res) => {
  try {
    const userDetailRoutes = await UserDetail.find();
    res.status(200).json(userDetailRoutes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to get a userDetailRoute by ID
router.get("/:id", async (req, res) => {
  try {
    const userDetailRoute = await UserDetail.findById(req.params.id);
    if (!userDetailRoute) {
      return res.status(404).json({ error: "UserDetail not found" });
    }
    res.status(200).json(userDetailRoute);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
