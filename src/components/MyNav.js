import React from 'react'

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

import ReactStars from "react-rating-stars-component";

import './MyNavbar.css'



function MyNav({ getSearchRate, getSearchTitle }) {

    const ratingChanged = (newRating)=> {
        getSearchRate(newRating)
    };
    return (
        <Navbar className="mynavbar" bg="dark" variant="dark">
            <Navbar.Brand className="MovieLogo" href="#home">Movie App</Navbar.Brand>
            <Nav className="mr-auto">
               
               
            </Nav>
            <Form inline className="InputArea">
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    fill='#ea9c46'
                />
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => getSearchTitle(e.target.value)} />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default MyNav