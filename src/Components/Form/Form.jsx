import { Card } from "../UI/Card/Card";
import { FormControl } from "../UI/FormControl/FormControl";
import { Container } from "../UI/Container/Container";
import { Button } from "../UI/Button/Button";
import { useRef, useState } from "react";

export const Form = (props) => {

  const nameInputRef = useRef()
  const ageInputRef = useRef()

    // const [inputsValue, setInputsValue] = useState({
    //     name: '',
    //     age: ''
    // })

    // const collectDataHandler = (e) => {
    //     const input = e.target.name
    //     setInputsValue((prev) => {
    //         return {
    //             ...prev,
    //             [input]: e.target.value
    //         }
    //     })
    // }

  const formDataHandler = (e) => {
    e.preventDefault();
  
    const userData = {
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
    }
    props.onSaveData(userData)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''

    // setInputsValue({
    //   name: '',
    //   age: ''
    // })
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
            // value=''
            // onChange={collectDataHandler}
            ref={nameInputRef}
            />
          </FormControl>

          <FormControl>
            <label htmlFor="userAge">Age (years)</label>
            <input 
            type="number" 
            id="userAge" 
            name="age" 
            min="6" 
            max="80"  
            // value=''
            // onChange={collectDataHandler}
            ref={ageInputRef}
            />
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Container>
  );
};
