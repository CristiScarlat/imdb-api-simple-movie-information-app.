
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand>RegalVoice Movies</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/instructions" className="nav-link">Instructions</Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;