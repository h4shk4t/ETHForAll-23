import React from 'react';
import Dropdown from './dropdown';
import {ethers} from 'ethers'

const Mint: React.FC<{}> = () => {
    var array=[
        {
            token: 'tFIL',
        },
        {   
            token: 'Token2',
        },
        {
            token: 'Token3',
        },
    ]
    const mintfunction = async () => {  
		const contractaddress =  '0xB9D6152acd7b9c282F0a8559906d708EdF677A75'
        const abi = [
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "src",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "guy",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "wad",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "src",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "dst",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "wad",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "allowance",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "usr",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "wad",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "usr",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "_wad",
						"type": "uint256"
					}
				],
				"name": "burn",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "filLocked",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "usr",
						"type": "address"
					}
				],
				"name": "getBalance",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_wad",
						"type": "uint256"
					}
				],
				"name": "mint",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "name",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "priceOfFIL",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "symbol",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "totalSupply",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "dst",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "wad",
						"type": "uint256"
					}
				],
				"name": "transfer",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "src",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "dst",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "wad",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		];
        const val = document.getElementById("token") as HTMLInputElement | null
        if (val != null){
            var w = parseFloat(val.value);
			    // @ts-ignore

            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const mintcontract = new ethers.Contract(contractaddress, abi,signer)
            const tx = await mintcontract.mint(w,{value:String(ethers.utils.parseEther(String(w/80)))})
            await tx.wait(1)
            console.log(tx)
    }
}

    return (
        <div className="centerstuff">
        <div className='heading'>
        Mint
    </div>
    <div className='swapdiv'>
    <br/><br/><br/>
    <div className='swapform'>
            <Dropdown array={array} Name="token"/>
            <button className='swapbutton' onClick={mintfunction}>
                Mint
            </button>
    </div>    
    </div>
</div>
)}

export default Mint