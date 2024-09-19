import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'


const Header=()=>{
    return <Navbar expand="lg" className="nav" fixed='top'>
    <Container className='navContainer'>
      <Navbar.Brand className='logo'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" >FirstPage</Nav.Link>
          <Nav.Link href="/secondPage" >SecondPage</Nav.Link>
          <Nav.Link href="/thirdPage">ThirdPage</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Header