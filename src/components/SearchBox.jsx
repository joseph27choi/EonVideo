import React, { useRef, useState } from 'react'
import styled from 'styled-components';

const SearchBox = () => {

    const userInputRef = useRef(null);

    const handleSearchBtn = (e) => {
        console.log(userInputRef.current.value);
        userInputRef.current.value = "";
    }


    return (
        <div>
            <InputDiv>
                <SubmitBtn onClick={handleSearchBtn}>+</SubmitBtn>
                <Input placeholder='Search Video' type='text' ref={userInputRef} />
            </InputDiv>
        </div>

    )
}

export default SearchBox

const InputDiv = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    height: 3.5rem;
    width: 80%;
    background-color: white;
    
`;

const SubmitBtn = styled.button`
    font-size: 16px;
  padding: 0 1.5rem 0 1rem;

  border: none;
  border-radius: 5px 0 0 5px;

  height: 100%;
  width: 2rem;


  /* background-color: #ed2913c1; */
  background-color: white;
  color: #7e7e7e;

`;

const Input = styled.input`
  font-size: 16px;

  height: 100%;
  width: 100%;

  border: none;
`;

