import React, {useEffect} from 'react';
import {ethers} from 'ethers';
import { round } from 'lodash';
const Dashboard: React.FC<{}> = () => {
    const enableEthereum = async () => {
	// @ts-ignore
        await ethereum.request({ method: 'eth_requestAccounts' });
    }
    var balance;
    const getbal = async () => {
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
		    // @ts-ignore

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const mintcontract = new ethers.Contract(contractaddress, abi,signer)
        const filebal = (await signer.getBalance()).toHexString()
        const tokenbal = await mintcontract.getBalance(signer.getAddress())  
        const filedep = (tokenbal/80)*(10**-18)
        balance=(round(parseInt(filebal)*(10**(-15))))*10**(-3)
		    // @ts-ignore

        document.getElementById("balance").innerHTML=balance+" tFIL";
        var borrowed = (round(parseInt(tokenbal)*10**(-15)))*(10**-3)
		    // @ts-ignore

        document.getElementById("borrowed").innerHTML="$"+borrowed;
		    // @ts-ignore

        document.getElementById("deposit").innerHTML=filedep+" tFIL";

    }

    useEffect(() => {
        getbal();
    }, [])
    return (
        <div className='dashboard'>
            <div>
                <div className="wallet1">
                <button className='metamask' onClick={enableEthereum}>Connected</button>
                </div> 
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='heading'>
                Dashboard
            </div>
            <div className='stuff'>
                        
                <div className='stuffandar'>
                    <div>
                        Desposited 
                    </div>
                    <div className='stuffval' id="deposit">
                    </div>
                </div>
                <div className='stuffandar-balance'>
                    <div>
                        Balance
                    </div>
                    <div className='stuffval' id='balance'>
                    </div>
                </div>
                <div className='stuffandar'>
                        <div>
                            Borrowed
                        </div> 
                        <div className='stuffval' id="borrowed"> 
                        </div>
                </div>
            </div>
        </div>
      );
    }
  

export default Dashboard;
