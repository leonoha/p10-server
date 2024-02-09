import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {PostTableRequest }from './ApiCalls.js'
import {StyledBackgroundDiv, StyledButton, StyledLabel, StyledInput, StyledInputDiv} from './styles/ComponentStyles.js';
import LeagueTable from './LeagueTable.js';
import {showSubmitFeedback} from './Utils.js'

const StyledFormBoxDiv = styled.div`
margin-top: 7em;
padding-bottom: 20px;
width: 50%;
min-width: 300px;
max-width: 800px;
height: 30%;
justify-content: center;

background: rgba(0,0,0,0.3);

border: 1px solid #333;
box-shadow: 0px 0px 10px 333;
`
const StyledFormDiv = styled.div`
width: 100%;
height: 100%;
align: center;
`

const StyledForm = styled.form`
display: flex;
flex-direction: column;
height: 100%;
justify-items: center;
align-items: center;
justify-content: center;
gap: 15px;
`

function ViewLeague() {
  
    const [inputs, setInputs] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [data, setData] = useState({});

    // Get the last inputted leaguename if available
    useEffect(() => {
      const last_league = localStorage.getItem("last_league");
      if (last_league) {
        console.log(JSON.parse(last_league));
        const last_used = JSON.parse(last_league);
        setInputs(last_used);
      }
    }, []);

    console.log(inputs);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        console.log(isLoggedIn);


        const res_promise = PostTableRequest(formJson);
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
        localStorage.setItem('last_league', JSON.stringify({"league": value}))
      }

    return (
      <StyledBackgroundDiv>
        {isLoggedIn ? 
            (
               <LeagueTable data={JSON.stringify(data)}> </LeagueTable>
            ): (
              <StyledFormBoxDiv>
                <StyledFormDiv>
                  
                    <StyledForm onSubmit={handleSubmit}>

                    <StyledInputDiv>
                      <StyledLabel>League:</StyledLabel>
                      <StyledInput type="text" name="league" value={inputs.league || ""} required onChange={handleNameChange}></StyledInput>
                    </StyledInputDiv>
      
                    <StyledButton type="submit">SUBMIT</StyledButton>

                </StyledForm>

              </StyledFormDiv>
            </StyledFormBoxDiv>
      ) }

      </StyledBackgroundDiv>
    )
}

export default ViewLeague;
