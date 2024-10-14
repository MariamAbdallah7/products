'use client'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './navBar.module.css'
import { InputGroup } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarImage from '../../../assets/Vector.svg'
import CartImage from '../../../assets/cart.svg'
import NavCeneterImage from '../../../assets/navCenterImage.svg'

export default function MainNavBar() {
  return (

    <Navbar expand="lg" className={classes.navBar}>
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className={classes.navContent} navbarScroll>
            <Nav.Link className={classes.home} href="/">HOME</Nav.Link>
            <Nav.Link className={classes.navElement}>MINASPACE</Nav.Link>
            <Nav.Link className={classes.navElement}>SHOP</Nav.Link>
            <Nav.Link className={classes.navElement}>BLOG</Nav.Link>
            <Nav.Link className={classes.navElement}>PAGES</Nav.Link>
            <Nav.Link className={classes.navElement} href="/dash-board">DashBoard</Nav.Link>
          </Nav>

          <div className={classes.navCenterWrapper}>
            <NavCeneterImage />
          </div>

          <div className={classes.navbarRight}>
            <Form className="d-flex">
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className={classes.placeholderColer}
                  aria-label="Search"
                />
              </InputGroup>
            </Form>

            <div className={classes.starWrapper}>
              <StarImage className={classes.star} />
              <span className={classes.counter}>0</span>
            </div>
            <div className={classes.starWrapper}>
              <CartImage />
              <span className={classes.counter}>0</span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}