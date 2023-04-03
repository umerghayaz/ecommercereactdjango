import React from 'react'
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

// import { LinkContainer } from 'react-router-bootstrap'
function Header() {
  return (
    <header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
        <LinkContainer to='/'>
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {/* <SearchBox /> */}
                <Nav className="ml-auto">

                <LinkContainer to='/cart'>
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            </LinkContainer>

                     <NavDropdown id='username'>
                     <LinkContainer to=''>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer >
                            <NavDropdown.Item >Logout</NavDropdown.Item>

                        </NavDropdown>
                   
                        <LinkContainer to='/login'>
                                <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                </LinkContainer>

                     


                  
                        <NavDropdown title='Admin' id='adminmenue'>
                         
                                <NavDropdown.Item>Users</NavDropdown.Item>
                         

                          
                                <NavDropdown.Item>Products</NavDropdown.Item>
                           

                          
                                <NavDropdown.Item>Orders</NavDropdown.Item>
                           
                        </NavDropdown>
                 


                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</header> )
}

export default Header