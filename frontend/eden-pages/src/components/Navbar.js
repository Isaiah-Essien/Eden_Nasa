import './navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Navibar() {
  return (
    <div className={`navigation`}>
      <header>
        <>
          {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) =>
            expand === 'lg' ? (
              <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                <Container fluid>
                  <Navbar.Brand href="#" className='logo'><span>E</span>DEN</Navbar.Brand>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        Sidebar Menu
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3" id='menu'>
                        <Nav.Link href="#action1">About</Nav.Link>
                        <NavDropdown
                          title="Ressources"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        className='dropmenu'>
                          <NavDropdown.Item href="#action3" className='menuitem'>Blog</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action4" className='menuitem'>Forum</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action5" className='menuitem'>Market Insights</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2">Contact Us</Nav.Link>
                        <Nav.Link href="#action2">FAQ</Nav.Link>
                      </Nav>
                        <Button variant="link" className='login'>Login</Button>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ) : null
          )}
        </>
      </header>
    </div>
  );
}

export default Navibar;