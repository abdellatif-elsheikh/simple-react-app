import { Card } from "../UI/Card/Card";
import { FormControl } from "../UI/FormControl/FormControl";
import { Container } from "../UI/Container/Container";
import { Button } from "../UI/Button/Button";
import { useState } from "react";

export const Form = (props) => {

    const [inputsValue, setInputsValue] = useState({
        name: '',
        age: ''
    })

    const collectDataHandler = (e) => {
        const input = e.target.name
        setInputsValue((prev) => {
            return {
                ...prev,
                [input]: e.target.value
            }

        })
    }

  const formDataHandler = (e) => {
    e.preventDefault();
    props.onSaveData(inputsValue)
  };

  return (
    <Container>
      <Card>
        <form onSubmit={formDataHandler}>
          <FormControl>
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            id="username" 
            name="name" 
            value={inputsValue.username}
            onChange={collectDataHandler}/>
          </FormControl>

          <FormControl>
            <label htmlFor="userAge">Age (years)</label>
            <input 
            type="number" 
            id="userAge" 
            name="age" 
            min="6" 
            max="80"  
            value={inputsValue.userAge} 
            onChange={collectDataHandler}/>
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Container>
  );
};
