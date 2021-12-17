import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input'
import { signup } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './style.css';
import { IoIosContact } from "react-icons/io";

/**
* @author
* @function SignupPage
**/

const SignupPage = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const handleSignupUser = (e) => {

        e.preventDefault();

        if(firstName == ""){
            alert('First Name is Required...!!!')
        }
        if(lastName == ""){
            alert('Last Name Is Required...!')
        }
        if(email == ""){
            alert('Valid Email Required...!')
        }
        if(password == ""){
            alert('Password Required...!!!')
        }

        const user = {
            firstName, lastName, email, password
        }

        dispatch(signup(user))

    }

    if(auth.authenticated){
        return <Redirect to={`/`} />
    }

  return(
    <>
        <Container fluid className="main-container">
                <Row style={{ paddingTop: '170px', borderRadius: '10px' }}>
                    <Col md={{ span: 6, offset: 3 }} >
                        <Form className="form" onSubmit={handleSignupUser}>
                        <h1 className="text"> <IoIosContact className="text" />  </h1>
                            <Row>
                                <Col md={6}>
                                    <Input
                                    placeholder="First Name"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                    placeholder="Last Name"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Input
                                placeholder="Enter Your Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Link className="navbar-link" to={`/signin`}> If Allready have An Account </Link>
                            <br />

                            <Button className="btn" type="submit">
                                Submit
                                </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
    </>
   )

 }

export default SignupPage