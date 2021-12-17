import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input'
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../actions';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import './style.css';
import { IoIosContact } from "react-icons/io";

/**
* @author
* @function SigninPage
**/

const SigninPage = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const userLogin = (e) => {
        e.preventDefault();

        if (email == "") {
            alert(' Valid Email Is Required...!!')
        }

        if (password == "") {
            alert('Password Is Required...!!')
        }

        dispatch(signin({ email, password }))

    }

    if (auth.authenticated) {
        return <Redirect to={`/`} />
    }

    return (
        <>
            <Container fluid className="main-container">  
                <Row style={{ paddingTop: '170px', borderRadius: '10px' }}>
                    <Col md={{ span: 4, offset: 4 }} >
                   
                        <Form className="form" onSubmit={userLogin}>
                        <h1 className="text"> <IoIosContact />  </h1>
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

                            <Link className="navbar-link" to={`/signup`}> Create An Account </Link>
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

export default SigninPage;