import { useState, useEffect } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} id="navbar" >
        <Container fluid>
          <Navbar.Brand href="/" className="d-flex">
            <h1 className="mx-3">
              <i className="bi bi-gem"></i>
            </h1>
            <h1>Techserve</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggler">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex justify-content-around flex-wrap ms-auto">
            <Nav className="px-5 py-3">
              <Nav.Link href="#banner" className={activeLink === 'banner' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>About Us</Nav.Link>
              <Nav.Link href="#pricing" className={activeLink === 'pricing' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Services</Nav.Link>
              <Nav.Link href="#newsletter" className={activeLink === 'newsletter' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>News</Nav.Link>
              <Nav.Link href="#newsletter" className={activeLink === 'newsletter' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Contacts</Nav.Link>
              <Nav.Link href="#newsletter" className={activeLink === 'newsletter' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Sign In</Nav.Link>
            </Nav>
              <button className="btn text-center ">TRY IT FREE</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}