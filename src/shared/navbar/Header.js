import React, { useState } from 'react';
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

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menu = <>
        <NavItem>
            <NavLink to="/components/">Components</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="https://github.com/reactstrap/reactstrap">
                GitHub
            </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Options
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    </>
    return (
            <Navbar
                className="p-2"
                color="dark"
                dark
                sticky='top'
            >
                <NavbarBrand to="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} className='d-sm-block d-md-none' />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mx-auto" 
                    
                    navbar>
                        {menu}
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
                <Nav className='d-none d-lg-flex'>
                    {menu}
                </Nav>
            </Navbar>
    );
}

export default Header;