import {React,useState, useNavigate}from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useHistory,useLocation } from 'react-router-dom';
import style from "./style.css"

export default function Login(props) {

    const [data,setdata] = useState({
        email: "",
        password: ""
    })
    const [status,setstatus] = useState();
    const navigate = useHistory()
    function handleonchange (e) {
        let newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setdata(newdata)
    }
    const location = useLocation();
    function handleonsubmit (e) {
      e.preventDefault();
        let itr = 0;
        // const location = useLocation();
        //   console.log(location.state);
        let data1 = location.state;
        console.log(data1);
        for(let i = 0;i<data1.length;i++){
        
            if(data1[i].email === data.email && data1[i].password === data.password){
              navigate.push({
                pathname: '/about'
              });
                itr = 1;
                break;
            } 
        }
        if(itr === 0){
            setstatus("Enter correct email or password");
        }
    }
  return (
    <div className='container con'>
    <h2 className='signup header' >Login Page</h2>
      <Form className='signup' onSubmit = {handleonsubmit}>
      <div className='container'>{status}</div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label' >Email address</Form.Label>
        <Form.Control className='textarea' onChange={(e)=>{handleonchange(e)}} id = "email" value = {data.email} type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label' >Password</Form.Label>
        <Form.Control className='textarea' onChange={(e)=>{handleonchange(e)}} id = "password" value= {data.password}type="password" placeholder="Password" />
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
