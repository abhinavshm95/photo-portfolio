import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../asset/Image/logo.png';

export default function Navigationbar() {
    return (<>
        <Navbar expand="lg" className="nav-cll">
            <Navbar.Brand href="#home"><img id="navbar-brand-img" src={logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-link">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#photography">PHOTGRAPHY</Nav.Link>
                    <Nav.Link href="#fils">FILMS</Nav.Link>
                    <Nav.Link href="#contact">CONTACT US</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>)
}
