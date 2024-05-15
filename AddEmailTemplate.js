import React,{useState,useEffect} from 'react';
import {Form,Button, Container, Row, Col,Card } from "react-bootstrap";



export default function AddEmailTemplate() {

    const [validated, set_Validated] = useState(false);
    const [form_Data, set_Form_Data] = useState({
        title: "",
        Name: "",
        description: "",
    });
    const [addbutton,setAddbutton]=useState(true);
    const [removebutton,setRemovebutton]=useState(true);
    const [Cards, setCards] = useState([
        {
            title: "",
            Name: "",
            description: "",
        }
      ])
    

const submitFn = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    if(form_Data.title.trim().length >0 && form_Data.Name.trim().length>0 && form_Data.description.trim().length>0 && /^[a-zA-Z0-9]+$/.test(form_Data.title) &&  form_Data.title.length < 50 && form_Data.Name.length < 32)
        {
            let newCard = form_Data;
            setCards([...Cards,newCard]);
            set_Form_Data({
                title: "",
                Name: "",
                description: "",
            });
            setAddbutton(true);
            setRemovebutton(false);
        }
        
    set_Validated(true);
};
const chngFn = (event) => {
    const { name, value } = event.target;
                set_Form_Data({
                    ...form_Data,
                    [name]: value,
                });
                if(form_Data.title.trim().length >0 && form_Data.Name.trim().length>0 && form_Data.description.trim().length>0 && /^[a-zA-Z0-9]+$/.test(form_Data.title) &&  form_Data.title.length < 50 && form_Data.Name.length < 32)
                    {
                        setAddbutton(false);
                    }      
   
};

const removeItem=()=>{
    console.log('ffdfdf');
    let data = [...Cards];
    data.splice(-1, 1)
    setCards(data)
    if(data.length<2)
        {
            setRemovebutton(true); 
        }
}
  return (
    <>


        <Container className="mt-5">
            <Row>
                <Col
                    md={{
                        span: 6,
                        offset: 1,
                    }}
                >
                    
                    <Form noValidate validated={validated} >
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={form_Data.title}
                                onChange={chngFn}
                                minLength={6}
                                maxLength={50}
                                pattern="^[a-zA-Z0-9]+$"
                                required
                                isInvalid={
                                    validated &&
                                    !/^[a-zA-Z0-9]+$/.test(form_Data.title)
                                  &&  form_Data.title.length < 50
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid title (alphanumeric
                                characters only) and 50 characters only
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="Name"
                                value={form_Data.Name}
                                onChange={chngFn}
                                maxLength={32}
                                minLength={6}
                                required
                                isInvalid={
                                    validated && form_Data.Name.length < 32
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                Name 32 characters long.
                            </Form.Control.Feedback>
                        </Form.Group>
                       
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" aria-label="With textarea"
                                name="description"
                                value={form_Data.description}
                                onChange={chngFn}
                                required
                                isInvalid={
                                    validated 
                                    && form_Data.description.split(" ").length < 1
                                } />
                            
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid 50 character only.
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Button type="button" disabled={addbutton} onClick={submitFn}>Add</Button>

                        <Button variant="dark" disabled={removebutton} onClick={removeItem}>Remove</Button>
                    </Form>
                </Col>
                <Col
                    md={{
                        span: 4,
                        offset: 1,
                    }}
                >
                {Cards.map((item, index) => {
                    if(item.title.length > 0)
                    return (
                  <Card key={index} bg="info" text="white">
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.Name}</Card.Subtitle>
                    <Card.Text>{item.description}</Card.Text>
                </Card.Body>
            </Card>
                    )
        })}

                </Col>
            </Row>
        </Container>


      
    </>
  )
}
