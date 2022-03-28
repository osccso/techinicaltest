import React from 'react'
import {StyledNav} from './StyledComps'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <StyledNav>
      <Link className="link" to = "/">HOME</Link>
      <Link className="link" to = "register">REGISTER</Link>
      <Link className="link" to = "lists">USERS</Link>
    </StyledNav>
  )
}

export default Navbar