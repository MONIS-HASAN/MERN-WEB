const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// Create a new contact submission
router.post('/Contact', async (req, res) => {
  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    const savedContact = await contact.save();
    res.json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



module.exports = router;
