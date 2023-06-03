import React from 'react';
import Carousel from '../components/Carousel';
import SearchBox from '../components/SearchBox';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PlayPage = () => {
    const videoFiles = ['video1.mp4', 'video2.mp4', 'video3.mp4'];


    return (
        <div>
            <StyledHeader>
                <h1>EON PLAY</h1>
                <StudioBtn>
                    <StudioLink to="/studio">GO TO EON STUDIO</StudioLink>
                </StudioBtn>
            </StyledHeader>
            <StyledContainer>
                <SearchBox />
                <Carousel videos={videoFiles} />
                <Carousel videos={videoFiles} />
            </StyledContainer>
        </div>
    );
};

export default PlayPage;

const StyledContainer = styled.div`
    height: 100vh;
  
  background-color: #e4e4e46e;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const StudioBtn = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`

const StudioLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`