import React, { useState,useEffect } from "react";
import {  Link,useNavigate } from "react-router-dom";
import { Col, Row, Form, Button } from "react-bootstrap";
import FormContainer from "../components/formcontainer";
import {useDispatch,useSelector} from 'react-redux'
import { useLoginMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/Authslice";


const Loginscreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const [login,{isLoading}]=useLoginMutation()

  const {userInfor}=useSelector((state)=>state.auth)

  useEffect(()=>{
    if(userInfor){
        navigate('/')
    }
  },[navigate,userInfor])

  const submithandler = async (e) => {
    e.preventDefault();
    try {
        const res=await login({email,password}).unwrap();
        dispatch(setCredentials({...res}));
        navigate('/')


    } catch (err) {
        console.log(err?.data?.message || err.error)
    }
    
  };
  return (
    <FormContainer>
      <h1>Sign in</h1>
      <Form onSubmit={submithandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>password </Form.Label>
          <Form.Control
            type="password"
            autoComplete="Enter-password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Sign in
        </Button>

        <Row className="py-3">
            <Col>
              New Customer ? <Link to='/register'>Register</Link>
            </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default Loginscreen;
