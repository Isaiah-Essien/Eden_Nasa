import './navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
function Navibar() {
  return (
    <div className={`navigation`}>
      <header>
        <>
          {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) =>
            expand === 'lg' ? (
              <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                <Container fluid>
                  <Link to ="/HomePage" className='logo'><span>E</span>DEN</Link>
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
                      <Link to="/AboutPage" className="nav-link">About</Link>
                      <Link to="/MarketPage" className="nav-link">Marketplace</Link>
                        <NavDropdown
                          title="Ressources"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        className='dropmenu'>
                          <Link to ="/" className='menuitem'>Blog</Link>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action4" className='menuitem'>Forum</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action5" className='menuitem'>Market Insights</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2">Contact Us</Nav.Link>
                        <Link to="/FaqPage" className="nav-link">FAQ</Link>
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