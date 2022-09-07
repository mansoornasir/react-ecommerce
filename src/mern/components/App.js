import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './Home'
import About from './About'
import Products from './Products'
import Product from './Product'
import Login from './Login'
import Register from './Register'
import Error from './Error'
import Footer from './Footer'
import { NotificationContainer } from "react-notifications";

const App = () => {
    return (
        <div>
            <NotificationContainer />
            <Router>
                <Navbar bg="dark" variant="dark" className="mb-5">
                    <Container>
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/home">Home</Link> 
                            <Link className="nav-link" to="/about">About</Link> 
                            <Link className="nav-link" to="/products">Products</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/register">Register</Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:pid" element={<Product />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Error />} />
                </Routes>

                <Footer />

            </Router>
        </div>
    );
};

export default App;
