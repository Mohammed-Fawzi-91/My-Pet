import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log('cklicked')
  };

  return (
    <div >
      <button className="toggle-btn" onClick={toggleSidebar}>
      <MenuIcon className="menu"></MenuIcon>
      </button>
      <ul className={`sidebar ${isOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
