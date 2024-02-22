import React from 'react';
import { useState, useEffect } from 'react';
import {GetDeadline, GetDrivers, PostPrediction} from './ApiCalls.js'
import MovingCar from './MovingCar.js';
import {StyledDeadlineDiv, StyledDeadlineLabel, StyledButton, StyledForm, StyledFormBoxDiv, StyledFormDiv, StyledInput, StyledInputDiv, StyledLabel, StyledSelect, StyledBackgroundDiv} from './styles/ComponentStyles.js'
import {showSubmitFeedback} from './Utils.js'


//var deadline_info = await getNextDeadline();
//var drivers = await getLatestDrivers();


async function getLatestDrivers(){
  // TODO: Fetch the driver list from api

  const ans = await GetDrivers();
  console.log(ans)
  var driver_ids = JSON.parse(ans.data);
  console.log(driver_ids);

  var drivers = [];
  const driver_res = driver_ids.drivers
  // Loop through the array
  for (var i = 0; i < driver_res.length; i++) {
      // Split the value by underscore if present
      var parts = driver_res[i].split('_');
      
      // If the value contains an underscore
      if (parts.length > 1) {
          // Add the value after the underscore to the "value" key
          drivers.push( { label: parts[1], value: parts[1] } );
      } else {
          // If there's no underscore, add the value directly to the "label" key
          drivers.push( { label: driver_res[i], value: driver_res[i] });
      }
  }
  console.log(drivers)

  return drivers;
};


async function getNextDeadline(){
  const ans = await GetDeadline();
  var deadline_info_res = JSON.parse(ans);
  deadline_info_res.time = unixTimestampToDateTime(deadline_info_res.race_deadline);
  return deadline_info_res;
}


function unixTimestampToDateTime(unixTimestamp) {
  const timestamp = parseInt(unixTimestamp, 10);

  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const hour = date.getHours();
  const minute = date.getMinutes();

  const formattedResult = `${day} ${month}, ${hour}:${minute}`;

  return formattedResult;
}


function PredictionInput() {
    const [inputs, setInputs] = useState({});
    const [drivers, setDrivers] = useState({});
    const [deadlines, setDeadlines] = useState({});

    // Get the last inputted leaguename and username if available
    useEffect(() => {
      getNextDeadline().then((deadline)=> {
        setDeadlines(deadline);
        deadline_info = deadline;
      });
      getLatestDrivers().then((drivs)=> {
        setDrivers(drivs);
      });
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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        // do input checks before post: 

        const pred_promise = PostPrediction(formJson)
        pred_promise.then((pred_response) => {
          showSubmitFeedback(pred_response,formJson,true);
        });
    }

    const handlePredChange = (pred) => {
      const name = pred.label;
      const value = pred.value;
      console.log(name, value)
      setInputs(values => ({...values, [name]: value}))
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
        <StyledFormBoxDiv>
          <StyledFormDiv>
            <StyledForm onSubmit={handleSubmit} className='Form'>
                
                <StyledInputDiv>
                  <StyledLabel>League:</StyledLabel>
                  <StyledInput type="text" name="league" value={inputs.league || ""} required onChange={handleNameChange}></StyledInput>
                </StyledInputDiv>
                <StyledInputDiv>
                  <StyledLabel>Username:</StyledLabel>
                  <StyledInput type="text" name="username" value={inputs.username || ""} required onChange={handleNameChange}></StyledInput>
                </StyledInputDiv>
                <StyledInputDiv>
                <StyledLabel> DNF prediction:</StyledLabel>
                  <StyledSelect
                      name="dnf"
                      classNamePrefix="Select"
                      options={drivers}
                      value={inputs.dnf}
                      onChange={handlePredChange}
                      required
                  />
                </StyledInputDiv>
                <StyledInputDiv>
                <StyledLabel> P10 prediction:</StyledLabel>
                  <StyledSelect
                      name="p10"
                      classNamePrefix="Select"
                      options={drivers}
                      value={inputs.p10}
                      onChange={handlePredChange}
                      required
                  />
                </StyledInputDiv>
                <StyledDeadlineDiv>
                  <StyledLabel>Deadline for {deadlines.race_name} GP is:</StyledLabel>
                  <StyledDeadlineLabel> {deadlines.time} </StyledDeadlineLabel>
                </StyledDeadlineDiv>

                <StyledButton type="submit">SUBMIT</StyledButton>

            </StyledForm>
        </StyledFormDiv>
      </StyledFormBoxDiv>
      <MovingCar/>

      </StyledBackgroundDiv>

    )
}
export {unixTimestampToDateTime};
export default PredictionInput;
