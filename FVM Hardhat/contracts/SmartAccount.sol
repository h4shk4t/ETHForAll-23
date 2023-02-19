// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "./IITStableCoin.sol";
import "./DEX.sol";

contract WalletContract {
    address IITCoinAddr = "";
    address DexAddr = "";

    IITStableCoin IITCoin = IITStableCoin(IITCoinAddr);
    DEX Dex = DEX(DexAddr);

    function mintToken(uint256 _value) public payable {
        IITCoin.mint(_value);
    }

    function burnToken(address usr, uint256 _value) public {
        IITCoin.burn(usr, _value);
    }

    function transfer(address to, uint256 val) public {
        IITCoin.transfer(to, val);
    }

    function transferFrom(address from, address to, uint256 val) public {
        IITCoin.transferFrom(from, to, val);
    }

    function approve(address user, uint256 val) public {
        IITCoin.approve(user, val);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getTokenBalance() public view returns (uint256) {
        return IITCoin.getBalance(address(this));
    }
}
