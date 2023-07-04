import React from 'react';
import './index.css';

export default function Sidebar() {
 

  return (
    <>
      <div className='sidebar '>
        <button className="toggle-button">
        </button>
        <ul className="sidebar-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Passwords</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
