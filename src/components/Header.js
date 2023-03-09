import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
function Header() {
  return (
    <header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
           
                <Navbar.Brand>ProShop</Navbar.Brand>
            

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {/* <SearchBox /> */}
                <Nav className="ml-auto">

                   
                        <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
               
                     <NavDropdown id='username'>
                          
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                          
                            <NavDropdown.Item >Logout</NavDropdown.Item>

                        </NavDropdown>
                   
                          
                                <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                           
                     


                  
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