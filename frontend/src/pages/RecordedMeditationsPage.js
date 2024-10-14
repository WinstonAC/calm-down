import React from 'react';

const RecordedMeditationsPage = () => {
  const meditations = [
    { title: 'Pre-run Visualization', src: '/audio/visualization.mp3' },
    { title: 'Mindful Breathing', src: '/audio/mindful-breathing.mp3' },
  ];

  return (
    <div>
      <h2>Recorded Running Meditations</h2>
      <ul>
        {meditations.map((meditation, index) => (
          <li key={index}>
            <h3>{meditation.title}</h3>
            <audio controls>
              <source src={meditation.src} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecordedMeditationsPage;
