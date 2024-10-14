const express = require('express');
const router = express.Router();
const { registerUser, getUserProfile } = require('../controllers/userController'); // We can remove loginUser if you’re not testing login right now

// Register route (no authentication needed)
router.post('/register', registerUser);

// Get user profile (remove authentication for now)
router.get('/profile', getUserProfile);

module.exports = router;
