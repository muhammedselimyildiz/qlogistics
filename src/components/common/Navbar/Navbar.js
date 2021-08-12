import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Navbar, Image, Container } from "react-bootstrap"
import Logo from '../../../images/Logo.png'

const NavbarC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="dark-blue">
          <Container>
          <Navbar>
      <Image src={Logo} alt="Logo" fluid/>
      <AnchorLink href='#home'>Home</AnchorLink>
      <AnchorLink href='#whyq'>Why QLogistics</AnchorLink>
      <AnchorLink href='#features'>Features</AnchorLink>
      <AnchorLink href='#product'>Product</AnchorLink>
      <AnchorLink href='#contact'>Contact</AnchorLink>
    </Navbar>
          </Container>
        
        </div>
      </div>
    </div>
    
  )
}

export default NavbarC
