import React, { useState } from 'react';
import { Form } from './Components/Form/Form';
import { DisplayData } from './Components/DisplayData/DisplayData';
import HandelFromData from './Components/Form/HandelFormData';
import ErrorsHandler from './Components/ErrorsHandler/ErrorsHandler';

const initialData = []

function App() {

  const [usersData, setUsersData] = useState(initialData)
  const [errorMessage, setErrorMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const collectUserData = (userData) => {
    setUsersData((prevState) => {
      return [
        ...prevState,
        userData
      ]
    })
  }

  const displayErrorMessage = (message) => {
    if (message) {
      setErrorMessage(message)
      setIsError(true)
      return
    }
  }
 

  const closeErrorPage = (bool) => {
    setIsError(bool)
  }

  return (
    <div>
    <HandelFromData onSaveData={collectUserData} onErrors={displayErrorMessage}/>
    {
    usersData.length > 0 && <DisplayData  data={usersData}/>
    }
    {isError && <ErrorsHandler 
    message={errorMessage}
    onCloseErrorPage={closeErrorPage}
    />}
     simple
    </div>
  );
}

export default App;
