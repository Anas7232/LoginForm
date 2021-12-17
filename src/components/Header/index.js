import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions';
import './style.css';
import { IoIosFolderOpen, IoIosContact } from "react-icons/io";

/**
* @author
* @function Header
**/

const Header = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <Navbar collapseOnSelect expand="lg" className="navbar_top">
        <Container>
        <Link className="navbar-brand" to="/"> <IoIosFolderOpen className="icon" /> </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              {
                  !auth.authenticated ? 
                  <li>
                      <Link className="nav-link" to={`/signin`}> SignUp </Link>
                      <Link className="nav-link" to="/signin"> SignIn </Link>
                  </li>
                  : null
              }
            
          </Nav>
          <Nav>


           {
               auth.authenticated ? 
               <li>
                   <Link eventKey={2} className="nav-link" to={`#`} onClick={() => {
                       dispatch(logout())
                   }}>
                        <IoIosContact className="logout_icon" />
                 LogOut
               </Link>
               </li> : null
           }



          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )

}

export default Header