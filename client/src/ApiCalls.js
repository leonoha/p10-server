
export const GetDrivers = async () => {

  try {

    const response = await fetch('https://p10-client.onrender.com/api/drivers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Handle successful response
    const data = await response.json();
    console.log('Response from server:', data);
    
    return data;

  } catch (error) {
    console.error('Error during GET Deadlines request:', error);
  }

}


export const GetDeadline = async () => {

  try {

    const response = await fetch('https://p10-client.onrender.com/api/next_deadline', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Handle successful response
    const data = await response.json();
    console.log('Response from server:', data);
    
    return data;

  } catch (error) {
    console.error('Error during GET Deadlines request:', error);
  }

}


export const PostPrediction = async (predJson) => {


  try {

    const response = await fetch('https://p10-client.onrender.com/api/prediction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(predJson),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Handle successful response
    const data = await response.json();
    console.log('Response from server:', data);
    return data;

  } catch (error) {
    console.error('Error during POST Prediction request:', error);
  }

};

export const PostTableRequest = async (predJson) => {
    try {

      const response = await fetch('https://p10-server.onrender.com/api/league', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(predJson),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle successful response
      const data = await response.json();
      console.log('Response from server:', data);
      return data;

    } catch (error) {
      console.error('Error during POST request TableRequest:', error);
    }
};



export const PostPredHistoryRequest = async (formJson) => {

  try {
    const response = await fetch('https://p10-client.onrender.com/api/predHistory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJson),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Handle successful response
    const res = await response.json();
    console.log('Response from server:', res);
    return res;

  } catch (error) {
    console.error('Error during POST request to predHistory:', error);
  }
}

