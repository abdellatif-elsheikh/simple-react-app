import React from "react";
import { Form } from "./Form";

const HandelFromData = (props) => {
  const collectFarmData = (collectedData) => {
    const userData = {
      ...collectedData,
      id: Math.random().toString()
    }
    
    const errorMessage = validateFarm(collectedData.name, collectedData.age);

    if (errorMessage.length === 0) {
      props.onSaveData(userData);
      return
    }
    props.onErrors(errorMessage)
    return
  };

  const validateFarm = (name, age) => {
    const nameLength = name.trim().length;

    let errorMessage = ''

    if(nameLength < 3 || nameLength > 50) {
      errorMessage = 'please enter a valid name (name must be 3 to 50 characters)'
      return errorMessage
    }
    if (+age < 6 || +age > 80) {
      errorMessage = 'allowed ages are from 6 to 80 (years old)'
      return errorMessage
    }
    return errorMessage
  };

  return (
    <>
      <Form onSaveData={collectFarmData} />
    </>
  );
};

export default HandelFromData;
