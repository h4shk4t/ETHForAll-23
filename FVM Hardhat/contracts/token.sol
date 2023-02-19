// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract token {
    mapping(address => uint256) public balance;
    uint256 _totalSupply;

    function mint(address to, uint256 value) public {
        balance[to] += value;
        _totalSupply += value;
    }

    function burn(address from, uint256 value) public {
        require(balance[from] >= value);
        balance[from] -= value;
        _totalSupply -= value;
    }

    function transfer(address to, uint256 value) public {
        require(balance[msg.sender] >= value);
        balance[msg.sender] -= value;
        balance[to] += value;
    }

    function transferFrom(address from, address to, uint256 value) public {
        require(balance[from] >= value);
        balance[from] -= value;
        balance[to] += value;
    }

    function balanceOf(address _usr) public view returns (uint256) {
        return balance[_usr];
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    fallback() external payable {}

    receive() external payable {}
}
