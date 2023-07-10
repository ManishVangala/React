import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import  axios from 'axios'
import { Link, useNavigate, Route } from "react-router-dom";
import Read from './Read';


const Create = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [dob, setDob] = useState("")
  const [designation, setDesignation] = useState("")
  const history = useNavigate();

    // this is to make post method api call
    const handleSubmit = (e) =>{
        e.preventDefault(); 
        axios.post(`https://superadmin.homes247.in/crmbackend/executives`, {name:name,email:email, number:number,dob:dob,designation:designation  })
        .then(()=>{
          history("/")
        })

    }

  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>executives_name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)
        console.log(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>executives_email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>executives_number</Form.Label>
        <Form.Control type="text" placeholder="Enter number" onChange={(e)=>setNumber(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>executives_dob</Form.Label>
        <Form.Control type="text" placeholder="Enter DOB"  onChange={(e)=>setDob(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>exec_desig</Form.Label>
        <Form.Control type="text" placeholder="Enter designation" onChange={(e)=>setDesignation(e.target.value)} />
      </Form.Group>

      
      <Link to = "/">
      <Button variant="primary" type="submit" onClick={handleSubmit}>Submit
      </Button>

      </Link>
        
    </Form>
    </div>
  )
}

export default Create
