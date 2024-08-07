// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PaymentGateway {
    IERC20 public token;

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    event Transfer(address indexed payer, address indexed receiver, uint256 amount);

    function pay(address receiver, uint256 amount)  external returns  (bool) {
        address payer = msg.sender;
        uint256 payerBalance = token.balanceOf(payer);

        require(payerBalance >= amount, "Insufficient balance for the transaction");
        require(token.transferFrom(payer, receiver, amount), "Transfer failed");

        emit Transfer(payer, receiver, amount);
        return true;
    }
}