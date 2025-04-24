import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>Menú</button>
      <Collapse in={isOpen} id="dropdown-menu">
        <div className="card">
          <div className="card-header">Opciones del menú</div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Opción 1</li>
              <li className="list-group-item">Opción 2</li>
              <li className="list-group-item">Opción 3</li>
            </ul>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default DropdownMenu;