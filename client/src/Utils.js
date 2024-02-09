
function showSubmitFeedback(api_response, inputted_og, verbose){
    console.log(api_response);
    if (api_response.response === 'OK'){
      if (verbose){
        const inputted_data = JSON.parse(api_response.data);
        const confirmation = 'PREDICTED FOR ROUND NO.'+ inputted_data.racenumber +':\nP10: ' + inputted_data.p10 + '\nDNF: ' + inputted_data.dnf +  '\nFor: '+ inputted_data.league +'/'+inputted_data.username
        alert(confirmation);
      }
      return true;
    }
    else if (api_response.response === 'Err') {
      const error_cause = JSON.parse(JSON.stringify(api_response.data));
      if (error_cause === 'league'){
        alert('The given league '+inputted_og.league+' does not exist');
      }
      else if (error_cause === 'username'){
        alert('The given username ' + inputted_og.username + ' does not exist');
      }
      else{
        alert('Something else went wrong... res was' + api_response.response)
      }
      return false;
    }
}


export {showSubmitFeedback};
