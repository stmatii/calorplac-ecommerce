import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useCartContext } from '../Context/cartContext'
import { Container } from 'react-bootstrap'

export const NavBar = ()=> {

    const {iconCart} = useCartContext()

    return <>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Link to='/'>
                <Navbar.Brand href="#home">CalorPlac</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">      
                    <Link to='/'>      
                    <Nav.Link>Paneles Yeso</Nav.Link></Link>
                    <Nav.Link to='/'>Paneles Fibro</Nav.Link>
                   </Nav>
                    <Nav>
                    <Link to="/cart">{iconCart()}
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </>

}

      

export default NavBar