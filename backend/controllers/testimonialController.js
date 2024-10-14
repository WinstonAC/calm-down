const Testimonial = require('../models/Testimonial');

// Get all testimonials
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().populate('user', 'name');
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new testimonial
const addTestimonial = async (req, res) => {
  const { user, message } = req.body;
  try {
    const newTestimonial = await Testimonial.create({ user, message });
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTestimonials, addTestimonial };
