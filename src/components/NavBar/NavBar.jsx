import {Link, NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


export const NavBar = ()=> {
    return <>
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to='/' className="" activeClassName="" >
                    <Navbar.Brand >CalorPlac</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Link to='/category/yeso'>
                        <Nav.Link href="#link">Paneles Yeso</Nav.Link>
                    </Link>
                    <Link to='/category/fibro'>
                        <Nav.Link href="#link">Paneles Fibro</Nav.Link>
                    </Link>
                    <Link to='/category/baño'>
                    <Nav.Link href="#link">Paneles Baño</Nav.Link> 
                    </Link>
                    <Link to="/cart">
                        cart               
                    </Link>                  
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>

}

export default NavBar