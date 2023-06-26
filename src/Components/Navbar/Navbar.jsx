import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import { Link } from "react-router-dom";

function ProductNavbar(props) {



    return (
        <Navbar expand="lg" className="app_navbar" bg="dark">
            <Container fluid>
                <Navbar.Brand className="nav-heading">The Pen World</Navbar.Brand>
                <Link to="/addproduct" className="links">Add Product</Link>
                    <Nav
                        className="me-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default ProductNavbar;