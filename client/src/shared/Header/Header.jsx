import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Gear, Search } from 'react-bootstrap-icons';
import logo from '../../assets/images/logo.jpg';
const Header = () => {
  return (
    <div className='header'>
      <Navbar className='margin-7 ' collapseOnSelect expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#home'>
            <img src={logo} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className='mt-2' id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link className='active' href='#features'>
                MOVIES
              </Nav.Link>
              <Nav.Link href='#action/'>TV SHOWS</Nav.Link>
              <Nav.Link href='#action/'>ARABIC</Nav.Link>
              <NavDropdown title='KIDS CHANNEL' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/'>Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link
                eventKey={2}
                href='#'
                style={{ background: 'rgb(70 66 66)', borderRadius: '19px' }}
              >
                <Search size={20} />
              </Nav.Link>
              <NavDropdown
                title={<Gear size={20} />}
                id='collasible-nav-dropdown'
              >
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
