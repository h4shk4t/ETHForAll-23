import React from 'react';
import Dropdown from './dropdown';


const Swap: React.FC<{}> = () => {
    var array=[
        {
            token: 'ETH',
        },
        {   
            token: 'Token2',
        },
        {
            token: 'Token3',
        },
    ]
  return (
    <div className="centerstuff">
        <div className='heading'>
            Swap
        </div>
        <div className='swapdiv'>
            <br/><br/><br/>
            <div className='swapform'>
                <form>
                    <Dropdown array={array} Name="fromtoken"/>
                <br/>
                <Dropdown array={array} Name="totoken"/>
                    <button className='swapbutton'>
                        Swap
                    </button>
                </form>
            </div>    
        </div>
    </div>
  );
};

export default Swap;
