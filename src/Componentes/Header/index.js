import React from "react";
import './styleHeader.css'
import Logo from '../../assets/teslaLogoSmall.svg' 
import { Dropdown } from "react-bootstrap";

const Header = () => {
    return(
         <div className="header">
            <div className="header_logo">
                <img src={Logo} alt='Logo da Marca'></img>
            </div>
            <div className="header_center">
               <p className="ghostItem">Model S</p>
               <p className="ghostItem">Model 3</p>
               <p className="ghostItem">Model X</p>
               <p className="ghostItem">Model Y</p>
               <p className="ghostItem">Solar Roof</p>
               <p className="ghostItem">Solar Panel</p>
            </div>
            
            <div className="header_right">
            <p className="ghostItem">Shop</p>
            <p className="ghostItem">Account</p>
            <p className="ghostItem">Menu</p>
            </div>
            
            <div className="revealGhostItems">
            <Dropdown>
  <Dropdown.Toggle className="revealItems">
    Menu
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item className="listItens" href="#/action-1">Model S</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-2">Model 3</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-3">Model X</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-4">Model Y</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-5">Solar Roof</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-6">Solar Panels</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-7">Existing Invetory</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-8">Used Inventory</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-9">Trade-in</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-10">Test Drive</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-12">Powerwall</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-13">Commercial Energy</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-14">Utilities</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-15">Charging</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-16">Find Us</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-17">Support </Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-18">Investor Relations</Dropdown.Item>
    <Dropdown.Item className="listItens" href="#/action-19">Shop</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </div>
        </div> 
        
    )
}

export default Header;
