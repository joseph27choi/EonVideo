import React from 'react'
import SearchBox from '../components/SearchBox'
import Carousel from '../components/Carousel'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import VideoEmbedder from '../components/VideoEmbedder';

const StudioPage = () => {

    return (
        <div>
            <StyledHeader>
                <h1>EON STUDIO</h1>
                <StudioBtn>
                    <StudioLink to="/">GO TO EON PLAY</StudioLink>
                </StudioBtn>
            </StyledHeader>
            <StyledContainer>
                <SearchBox />
                <VideoEmbedder />
            </StyledContainer>
        </div>
    )
}

export default StudioPage

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