import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';



import { Button, Checkbox, Form } from 'semantic-ui-react';

const Create = () =>  {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(checkbox);
        // axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
        //     firstName,
        //     lastName,
        //     checkbox
        // }).then(() => {
          //  history.push('/read')
        //})


    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>

                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>

            </Form>
        </div>
    )
}


 export default Create;
