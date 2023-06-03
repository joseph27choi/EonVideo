import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Carousel = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (videos.length === 0) {
      setCurrentIndex(0);
    }
  }, [videos]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  if (videos.length === 0) {
    return <div>No videos found.</div>;
  }

  return (
    <SliderDiv className="carousel">
      <button onClick={handlePrevious}>＜</button>
      <VideoDiv>
        <Playback src={`${process.env.PUBLIC_URL}/videos/${videos[currentIndex]}`} controls />
      </VideoDiv>
      <button onClick={handleNext}>＞</button>
    </SliderDiv>
  );
};

export default Carousel;

const SliderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

const VideoDiv = styled.div`
  height: auto;
  width: 15rem;
`

const Playback = styled.video`
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
`