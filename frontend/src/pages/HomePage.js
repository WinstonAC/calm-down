// HomePage.js
import React from 'react';
import styled from 'styled-components';

const runnerImg = '/runner.jpg';   // Absolute path from public folder
const meditatorImg = '/meditator.jpg';  // Absolute path from public folder

console.log('Runner image:', runnerImg);
console.log('Meditator image:', meditatorImg);



const HomePageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  background-color: #f4f4f4;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;

  img {
    max-width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    text-align: center;
    color: #333;
  }
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <ImageContainer>
        <img src={runnerImg} alt="Runner" />
        <h3>Stay Active</h3>
      </ImageContainer>
      <ImageContainer>
        <img src={meditatorImg} alt="Meditator" />
        <h3>Find Your Inner Peace</h3>
      </ImageContainer>
    </HomePageContainer>
  );
};

export default HomePage;
