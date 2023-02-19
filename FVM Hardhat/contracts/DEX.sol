// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "./token.sol";

contract DEX is token {
    address public tokenAddr;

    constructor(address _tokenAddr) token() {
        require(
            _tokenAddr != address(0),
            "Token address does not exist (null)"
        );
        tokenAddr = _tokenAddr;
    }

    function getVault() public view returns (uint) {
        return token(payable(tokenAddr)).balanceOf(address(this));
    }

    function addLiquidity(uint _amount) public payable returns (uint) {
        uint liquidity;
        uint balanceETH = address(this).balance;
        uint IITTokenReserve = getVault();
        token IITToken = token(payable(tokenAddr));

        if (IITTokenReserve == 0) {
            IITToken.transferFrom(msg.sender, address(this), _amount);
            liquidity = balanceETH;
            // Not sure what the next code is doing
            mint(msg.sender, liquidity);
        } else {
            uint ethReserve = balanceETH - msg.value;
            uint IITAmount = (msg.value * IITTokenReserve) / (ethReserve);
            require(
                _amount >= IITAmount,
                "Amount of tokens sent is less than the minimum tokens required"
            );
            IITToken.transferFrom(msg.sender, address(this), IITAmount);
            liquidity = (totalSupply() * msg.value) / ethReserve;
            mint(msg.sender, liquidity);
        }
        return liquidity;
    }

    function removeLiquidity(uint _amount) public returns (uint, uint) {
        require(_amount > 0, "Amount can't be zero");
        uint ethReserve = address(this).balance;
        uint _totalSupply = totalSupply();

        uint ethAmount = (ethReserve * _amount) / _totalSupply;
        uint IITAmount = (getVault() * _amount) / _totalSupply;

        burn(msg.sender, _amount);
        payable(msg.sender).transfer(ethAmount);
        token(payable(tokenAddr)).transfer(msg.sender, IITAmount);

        return (ethAmount, IITAmount);
    }

    // Automated Market Maker
    function getAmountOfTokens(
        uint256 inputAmount,
        uint256 inputReserve,
        uint256 outputReserve
    ) public pure returns (uint256) {
        require(inputReserve > 0 && outputReserve > 0, "invalid reserves");
        uint256 inputAmountWithFee = inputAmount * 99;
        uint256 numerator = inputAmountWithFee * outputReserve;
        uint256 denominator = (inputReserve * 100) + inputAmountWithFee;
        return numerator / denominator;
    }

    function ethToIITToken(uint _minTokens) public payable {
        uint256 totalTokens = getVault();
        uint256 tokensBought = getAmountOfTokens(
            msg.value,
            address(this).balance - msg.value,
            totalTokens
        );
        require(tokensBought >= _minTokens, "Insufficient withdrawal");

        token(payable(tokenAddr)).transfer(msg.sender, tokensBought);
    }

    function tokenToETH(uint _tokensSold, uint _minEth) public {
        uint256 totalTokens = getVault();
        uint256 ethBought = getAmountOfTokens(
            _tokensSold,
            totalTokens,
            address(this).balance
        );
        require(ethBought >= _minEth, "Insufficient withdrawal");
        token(payable(tokenAddr)).transferFrom(
            msg.sender,
            address(this),
            _tokensSold
        );
        payable(msg.sender).transfer(ethBought);
    }
}
