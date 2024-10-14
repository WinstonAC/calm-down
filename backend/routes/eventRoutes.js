const express = require('express');
const router = express.Router();

// Sample route for event operations
router.get('/', (req, res) => {
  res.send('Event routes are working!');
});

module.exports = router;
