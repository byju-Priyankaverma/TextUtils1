import {React, useState} from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import style from "./style.css"

export default function Signup() {
    const [data,setdata] = useState([{
        name: "",
        email: "",
        password: ""
    }])
    const [status,setstatus] = useState();
    const [data1,setdata1] = useState({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useHistory()
    function handleonchange (e) {
        let newdata = {...data1};
        newdata[e.target.id] = e.target.value;
        setdata1(newdata)
    }
    function handleonsubmit (e) {
      e.preventDefault();
        let newdata = data.slice();
        newdata.push(data1);
        setdata(newdata);
        navigate.push({
          pathname: '/login',
          state: newdata 
        });
        
    }
  return (
    <div className='container con'>
      <h2 className='signup header' >Sign Up Page</h2>
      <Form className='signup' onSubmit = {handleonsubmit}>
      <div className='container'>{status}</div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label' >Name</Form.Label>
        <Form.Control className='textarea' onChange={(e)=>{handleonchange(e)}} id = "name" value = {data1.name} type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label' >Email address</Form.Label>
        <Form.Control className='textarea' onChange={(e)=>{handleonchange(e)}} id = "email" value = {data1.email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label' >Password</Form.Label>
        <Form.Control className='textarea' onChange={(e)=>{handleonchange(e)}} id = "password" value= {data1.password} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button className='btn' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
