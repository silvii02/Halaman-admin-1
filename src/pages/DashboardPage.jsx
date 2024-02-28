import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faTableCellsLarge, faBoxOpen, faListUl } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
  return (
    <>
    <div className='dashboard'>
    <div className="button-group">
      <button className="purple-button">
        <FontAwesomeIcon icon={faUsers} size="3x" className="icon" /> {/* Menggunakan size="3x" untuk memperbesar ikon */}
        <span>Total Users</span>
        <p>1</p>
      </button>
      <button className="blue-button">
        <FontAwesomeIcon icon={faTableCellsLarge} size="3x" className="icon" /> {/* Menggunakan size="3x" untuk memperbesar ikon */}
        <span>Total Categories</span>
        <p>2</p>
      </button>
      <button className="green-button">
        <FontAwesomeIcon icon={faBoxOpen} size="3x" className="icon" /> {/* Menggunakan size="3x" untuk memperbesar ikon */}
        <span>Total Products</span>
        <p>1</p>
      </button>
      <button className="red-button">
        <FontAwesomeIcon icon={faListUl} size="3x" className="icon" /> {/* Menggunakan size="3x" untuk memperbesar ikon */}
        <span>Total Orders</span>
        <p>1</p>
      </button>
    </div>
    </div>
    </>
  );
};

export default DashboardPage;
