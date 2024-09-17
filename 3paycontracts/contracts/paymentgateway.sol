// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract PaymentGateway is ReentrancyGuard{

    IERC20 public usdcToken;
    IERC20 public usdtToken;
    IERC20 public daiToken;
    IERC20 public maticToken;

    constructor(address _usdcAddress, address _usdtAddress, address _DaiAdDress) {
        if (_usdcAddress != address(0)) {
            usdcToken = IERC20(_usdcAddress);
        }
        if (_usdtAddress != address(0)) {
            usdtToken = IERC20(_usdtAddress);
        }
        if (_DaiAdDress != address(0)) {
            maticToken = IERC20(_DaiAdDress);
        }
    }

    event Transfer(address indexed payer, address indexed receiver, uint256 amount, string tokenType);

    function payWithUSDC(address receiver, uint256 amount) external returns (bool) {
        require(address(usdcToken) != address(0), "USDC token not set");
        return _transferTokens(usdcToken, receiver, amount, "USDC");
    }

    function payWithDai(address receiver, uint256 amount) external returns (bool) {
        require(address(daiToken) != address(0), "Dai token not set");
        return _transferTokens(usdtToken, receiver, amount, "Dai");
    }
     function payWithUSDT(address receiver, uint256 amount) external returns (bool) {
        require(address(usdtToken) != address(0), "USDT token not set");
        return _transferTokens(usdtToken, receiver, amount, "USDT");
    }

    function payWithMATIC(address receiver, uint256 amount) external returns (bool) {
        require(address(maticToken) != address(0), "MATIC token not set");
        return _transferTokens(maticToken, receiver, amount, "MATIC");
    }

    function _transferTokens(IERC20 token, address receiver, uint256 amount, string memory tokenType) internal returns (bool) {
        address payer = msg.sender;
        uint256 payerBalance = token.balanceOf(payer);

        require(payerBalance >= amount, string(abi.encodePacked("Insufficient balance for the transaction: ", tokenType)));
        require(token.transferFrom(payer, receiver, amount), string(abi.encodePacked(tokenType, " Transfer failed")));

        emit Transfer(payer, receiver, amount, tokenType);
        return true;
    }
}
