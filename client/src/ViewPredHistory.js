import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {PostPredHistoryRequest }from './ApiCalls.js'
import { StyledPlayerTitleDiv, StyledForm, StyledFormDiv,StyledBackgroundDiv, StyledButton, StyledLabel, StyledInput, StyledInputDiv} from './styles/ComponentStyles.js';
import PredHistory from './PredHistory.js';
import {showSubmitFeedback} from './Utils.js'


const StyledFormBoxDiv = styled.div`
margin-top: 7em;
padding-bottom: 20px;
width: 50%;
min-width: 300px;
max-width: 800px;
height: 40%;
justify-content: center;
background: rgba(0,0,0,0.3);
border: 1px solid #333;
box-shadow: 0px 0px 10px 333;
`

function ViewPredHistory() {
  
    const [inputs, setInputs] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [data, setData] = useState({});

    // Get the last inputted leaguename and username if available
    useEffect(() => {
      const last_username = localStorage.getItem("last_username");
      const last_league = localStorage.getItem("last_league");

      if (last_league) {
        console.log(JSON.parse(last_league));
        const found_league = JSON.parse(last_league);
        setInputs(values => ({...values, ["league"]: found_league.league}))

        setInputs(found_league);
      }
      if (last_username) {
        console.log(JSON.parse(last_username));
        const found_user = JSON.parse(last_username);
        setInputs(values => ({...values, ["username"]: found_user.username}))
      }
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        
        const res_promise = PostPredHistoryRequest(formJson);
        res_promise.then((res) => {
            if (showSubmitFeedback(res, inputs, false)){
              setData(res);
              setIsLoggedIn(true);
            };
        });
    }

    const handleNameChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value)
        setInputs(values => ({...values, [name]: value}))
        if (name ==='username'){
          localStorage.setItem('last_username', JSON.stringify({"username": value}))
        }
        if (name === 'league'){
          localStorage.setItem("last_league", JSON.stringify({"league": value}))
        }
      }
    return (
      <StyledBackgroundDiv>
        {isLoggedIn ? 
            (
              <div style={ {overflowX: "scroll"}}>
              <StyledPlayerTitleDiv>Prediction history for:</StyledPlayerTitleDiv>
              <StyledPlayerTitleDiv>{inputs.username}</StyledPlayerTitleDiv>

              <PredHistory data={JSON.stringify(data)}> </PredHistory>
              </div>
            ): (
              <StyledFormBoxDiv>
                <StyledFormDiv>
                    <StyledForm onSubmit={handleSubmit}>
                    <StyledInputDiv>
                      <StyledLabel>League:</StyledLabel>
                      <StyledInput type="text" name="league" value={inputs.league || ""}  required onChange={handleNameChange}></StyledInput>
                    </StyledInputDiv>
                    <StyledInputDiv>
                      <StyledLabel>Username:</StyledLabel>
                      <StyledInput type="text" name="username" value={inputs.username || ""} required onChange={handleNameChange}></StyledInput>
                    </StyledInputDiv>
                    <StyledButton type="submit">SUBMIT</StyledButton>
                </StyledForm>
              </StyledFormDiv>
            </StyledFormBoxDiv>
      ) }
      </StyledBackgroundDiv>
    )
}

export default ViewPredHistory;
