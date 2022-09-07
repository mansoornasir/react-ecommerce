import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Products from './Products'
import Product from './Product'
import Logout from './Logout'
import Register from './Register'
import Error from './Error'
import { NotificationContainer } from "react-notifications";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const App = () => {




    return (

        <Router>
            <NotificationContainer />
            <Navbar bg="dark" variant="dark" className="mb-5">
                <Container>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/products">Products</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                        <Link className="nav-link" to="/logout">Logout</Link>
                        <Link className="nav-link" to="/logout">Cart</Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='container'>

                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/logout" element={<Logout />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/product/:id" element={<Product />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App