import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/formcontainer";
import { useDispatch, useSelector } from "react-redux";

import { setCredentials } from "../slices/Authslice";
import { toast } from "react-toastify";
import { useUpdateProfileMutation } from "../slices/userApiSlice";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [update, { isLoading }] = useUpdateProfileMutation();

  const { userInfor } = useSelector((state) => state.auth);

  useEffect(() => {
    setName(userInfor.name);
    setEmail(userInfor.email);
  }, [userInfor.setName, userInfor.setEmail]);

  const submithandler = async (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      toast.error("Password is not matching");
    } else {
      try {

          const res = await update({
            _id: userInfor.id,
            name,
            email,
            password,
            confirmPassword,
          }).unwrap();
          dispatch(setCredentials({ ...res }));
          toast.success("Profile updated successfully");
        
      } 
      catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  };
  return (
    <FormContainer>
      <h1>Update Profile</h1>
      <Form onSubmit={submithandler}>
        <Form.Group className="my-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

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
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Label>Confirm password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Re-Enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Update
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ProfileScreen;
