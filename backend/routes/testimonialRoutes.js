const express = require('express');
const router = express.Router();

// Sample route for testimonial operations
router.get('/', (req, res) => {
  res.send('Testimonial routes are working!');
});

module.exports = router;
