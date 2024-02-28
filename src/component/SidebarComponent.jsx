import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUsers, faTableCellsLarge, faBox, faListUl } from '@fortawesome/free-solid-svg-icons';
import logoimage from "../assets/img/logo.png";

function SidebarComponent() {
  return (
    <div className="sidebar inter-medium">
      <img src={logoimage} alt="logo-img" />
      <h1>Hello, Admin</h1>
      <ul>
        <li><Link to="/"><FontAwesomeIcon icon={faHouse} style={{ color: 'black' }} /> Dashboard</Link></li>
        <li><Link to="/customers"><FontAwesomeIcon icon={faUsers} style={{ color: 'black' }} /> Customers</Link></li>
        <li><Link to="/category"><FontAwesomeIcon icon={faTableCellsLarge} style={{ color: 'black' }} /> Category</Link></li>
        <li><Link to="/product"><FontAwesomeIcon icon={faBox} style={{ color: 'black' }} /> Products</Link></li>
        <li><Link to="/order"><FontAwesomeIcon icon={faListUl} style={{ color: 'black' }} /> Orders</Link></li>
      </ul>
    </div>
  );
}

export default SidebarComponent;
