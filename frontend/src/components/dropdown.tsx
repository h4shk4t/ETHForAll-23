import React from 'react';

const Dropdown: React.FC<{
    array: {
        token: string,
    }[], 
    Name: string,
}> = (array,Name) => {

    return (
        <div className='dropdown'>
            <div className="ethval">
                <input type="number" placeholder="0.00" id="token"/>
            </div>
            <div className="ethdropdown">
                <select name="tokentype" style={{
                    background:"rgba(4, 138, 127, 0.5)",
                    color:"white",
                    width:"6.9375rem",
                    height:"1.7rem",
                    fontFamily:"Roboto",
                }}>
                    <option value="" disabled selected>Select Token</option>
                    {array.array.map((item) => (
                        <option key={item.token} value={item.token}>
                            {item.token}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
  
export default Dropdown
