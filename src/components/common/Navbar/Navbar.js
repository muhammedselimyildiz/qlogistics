import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Navbar, Nav, Container, Image } from "react-bootstrap"
import Logo from '../../../images/Logo.png'

const NavbarC = () => {
  return (
    <Navbar>
      <Image src={Logo} alt="Logo" fluid/>
      <AnchorLink href='#home'>Home</AnchorLink>
      <AnchorLink href='#whyq'>Why QLogistics</AnchorLink>
      <AnchorLink href='#features'>Features</AnchorLink>
      <AnchorLink href='#product'>Product</AnchorLink>
      <AnchorLink href='#contact'>Contact</AnchorLink>
    </Navbar>
  )
}

export default NavbarC
