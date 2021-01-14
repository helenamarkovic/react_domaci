import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Link to='/'>
                <Navbar.Brand >
                    Kalkulator
            </Navbar.Brand>
            </Link>
            <Link to='/uputstvo'>
                <Navbar.Brand >
                    Uputstvo
            </Navbar.Brand>
            </Link>
        </Navbar>
    )
}
