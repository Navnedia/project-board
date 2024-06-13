import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from 'react-bootstrap/Button';

function NavigationBar({...props}) {
    return (
        <Navbar expand="md" className="bg-body-tertiary" sticky="top" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="/">Project Board</Navbar.Brand>
                <Navbar.Toggle aria-controls="expandNavbar" />
                <Navbar.Offcanvas id="expandNavbar" aria-labelledby="expandNavbarLabel" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="expandNavbarLabel">Project Board</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/user/projects">My Projects</Nav.Link>
                        </Nav>

                        <div className="d-flex">
                            <Button href="/createProject" variant="success" className="me-3">Create Project</Button>
                            <Button href="/login" variant="light">Login</Button>
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
