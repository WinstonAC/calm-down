import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventDetailsPage from './pages/EventDetailsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import EventSchedulePage from './pages/EventSchedulePage';
import RecordedMeditationsPage from './pages/RecordedMeditationsPage';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/event-details" element={<EventDetailsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/schedule" element={<EventSchedulePage />} />
        <Route path="/meditations" element={<RecordedMeditationsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

