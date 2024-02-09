import styled from 'styled-components';
import Select from "react-select";

const StyledBackgroundDiv = styled.div`
width: 100%;
height: 100%;
min-height: 600px;
overflow-y: scroll;
display: flex;
justify-content: center;
background-color: #fffdf6;
background: -webkit-linear-gradient(45deg, #a0495d, #000000);
background: linear-gradient(180deg, #a0495d, #000000);
`

const StyledFormBoxDiv = styled.div`
margin-top: 20px;
padding-bottom: 40px;
width: 50%;
min-width: 300px;
max-width: 800px;
height: 70%;
min-height: 500px;
background: rgba(0,0,0,0.3);
border: 1px solid #333;
box-shadow: 0px 0px 5px #333;`


const StyledFormDiv = styled.div`
width: 100%;
height: 100%;
align: center;
padding-bottom: 2%;
padding-top: 2%;
`

const StyledForm = styled.form`
display: flex;
height: 100%;
flex-direction: column;
justify-items: center;
align-items: center;
justify-content: center;
gap: 5%;
overflow-y: scroll;
`

const StyledInputDiv = styled.label`
height: 60px;
min-width: 200px;
width: 80%;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
` 

const StyledInput = styled.input`
  height: 100%;
  border: 1px solid #333;
  border-radius: 0;
  cursor: pointer;
  font-size: 16px;
  text-align: center; 

  &:focus {
        box-shadow: 0 0 0 1px black;
        outline: none;}

  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: italic;
`
const StyledLabel = styled.label`
  color: ${props => props.invalid ? 'red' : 'white'};
`

const StyledDeadlineDiv = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr);
`
const StyledDeadlineLabel = styled.label`
  color: ${props => props.invalid ? 'red' : 'white'};
  font-weight: 300;
`

const StyledButton = styled.button`
  background-color: #333;
  width: 80%;
  color: white;
  padding: 10px;
  margin-top: 30px;
  border: 1px solid #333;
  border-radius: 0;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  &:hover {
    background-color: #606060;

  }
  opacity: ${props => !props.enabled ? 0.5 : 1};

  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: italic;
  text-transform: uppercase;
`

const StyledSelect = styled(Select)`

  .Select__control {
    height: 100%;
    border: 1px solid #333;
    border-radius: 0;
    cursor: pointer;
    font-size: 16px;

  }

  .Select__control:hover {
    border-color: #333;
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    outline: none;

  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: #3c3d3e;

  }

  .Select__styles {
    
  }
`;

const StyledPlayerTitleDiv = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align:left;
  margin-left: 30px;
  overflow-y: scroll;
  overflow-x: scroll;
`


export {  StyledPlayerTitleDiv, StyledDeadlineDiv, StyledDeadlineLabel, StyledButton, StyledForm, StyledFormBoxDiv, StyledFormDiv, StyledInput, StyledInputDiv, StyledLabel, StyledSelect, StyledBackgroundDiv};