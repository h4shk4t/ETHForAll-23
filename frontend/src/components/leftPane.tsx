import React from 'react';
import swap from '../assets/swap.svg'; 
import deposite from '../assets/deposit.svg';
import borrow from '../assets/borrow.svg';
import logo from '../assets/denero.svg'
import { useHistory } from "react-router-dom";

const LeftPane: React.FC = () => {
  const history = useHistory();
  const handleSwap = () => {
    history.push('/swap');
  }
  const handleDeposite = () => {
    history.push('/deposite');
  }
  const handleBorrow = () => {
    history.push('/borrow');
  }

  return (
    <div>
        <div className="sidePane">
          <div className='logo'>
            <img src={logo} alt="logo" className='logo'/>
          </div>

          <div className='swap'>
            <button onClick={handleSwap} >
              <img src={swap} alt="swap" />
            </button>
          </div>
          <div className='swap'>
            <button onClick={handleDeposite}>
             <img src={deposite} alt="deposite" />
            </button>
          </div>
          <div className='swap'>
            <button onClick={handleBorrow}>
              <img src={borrow} alt="borrow" />
            </button>
          </div>
        </div>
    </div>
  );
};

export default LeftPane;
