import Navbar from 'react-bootstrap/Navbar' 
import Container from 'react-bootstrap/Container' 
import Nav from 'react-bootstrap/Nav' 
import NavDropdown from 'react-bootstrap/NavDropdown' 

export const NavBar = ()=> {
    return(
        <>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">CalorPlac</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                    <NavDropdown title="Paneles" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Paneles Yeso</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Paneles Fibro</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Paneles Baño</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </>
)}

export default NavBar