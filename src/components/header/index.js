import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './index.css'


const Header=()=>{
    return <Navbar expand="lg" className="nav" fixed='top'>
    <Container className='navContainer'>
      <Navbar.Brand className='logo'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/" className="Navlink">FirstPage</NavLink>
          <NavLink to="/secondPage" className="Navlink">SecondPage</NavLink>
          <NavLink to="/thirdPage" className="Navlink">ThirdPage</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Header