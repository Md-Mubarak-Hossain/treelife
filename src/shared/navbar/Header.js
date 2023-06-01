import React, { useState } from 'react';
import logo from '../../components/images/logo.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menu = <>
        <NavbarText className='mx-2 d-flex align-items-stretch'><Link to='/'
        className='link_style'>Home</Link></NavbarText>
        <NavbarText className='mx-2 d-flex align-items-stretch'><Link to='/tree' className='link_style'>Tree</Link></NavbarText>
        <NavbarText className='mx-2 d-flex align-items-stretch'><Link to='/golmo' className='link_style'>Golmo</Link></NavbarText>
        <NavbarText className='mx-2 d-flex align-items-stretch'><Link to='/birot' className='link_style'>Birot</Link></NavbarText>
        <NavbarText className='mx-2 d-flex align-items-stretch'><Link to='/' 
        className='link_style'>Log out</Link></NavbarText>
        <NavbarText className='mx-2 d-flex align-items-stretch'><Link to='/register' className='link_style'>Login</Link></NavbarText>
    </>
    return (
            <Navbar
                className="p-2"
                color="success"
                success
                sticky='top'
            >
                <NavbarBrand to="/" className='d-flex items-center justify-center'>
                    <img src={logo} alt="TreeLife"/>
                    <span className='link_style d-md-flex fw-extrabold ms-1 '>Green Tree, Green World</span>         
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className='d-sm-block d-md-none' />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" 
                    
                    navbar>
                        {menu}
                    
                    </Nav>
                </Collapse>
                <Nav className='d-none d-lg-flex'>
                    {menu}
               
                </Nav>
            </Navbar>
    );
}

export default Header;