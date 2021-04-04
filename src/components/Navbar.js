import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../asset/Image/new_resize_logo.png'

export default function Navigationbar() {
    return (<>
        <Navbar expand="lg" className="nav-cll">
            <Navbar.Brand href="/"><img id="navbar-brand-img" src={logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-link">
                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                    <NavLink exact to="/photography" className="nav-link">Photography</NavLink>
                    <NavLink exact to="/films" className="nav-link">Films</NavLink>
                    <NavLink exact to="/contactus" className="nav-link">Contact Us</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>)
}
