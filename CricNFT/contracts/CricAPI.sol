pragma solidity ^0.6.0;

import "@chainlink/contracts/src/v0.6/ChainlinkClient.sol";

contract APICric is ChainlinkClient {
    uint256 public runs;

    address private oracle;
    bytes32 private jobId;
    uint256 private fee;

    /**
     * Network: Rinkeby
     * Chainlink - 0x3A56aE4a2831C3d3514b5D7Af5578E45eBDb7a40
     * Chainlink JobID - 3b7ca0d48c7a4b2da9268456665d11ae
     * Fee: 0.1 LINK
     */
    constructor() public {
        setPublicChainlinkToken();
        oracle = 0x3A56aE4a2831C3d3514b5D7Af5578E45eBDb7a40;
        jobId = "3b7ca0d48c7a4b2da9268456665d11ae";
        fee = 0.1 * 10**18; // 0.1 LINK
    }

    /**
     * Create a Chainlink request to retrieve API response, find the target
     * data, then multiply by 1000000000000000000 (to remove decimal places from data).
     */
    function requestRunsData() public returns (bytes32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );

        // Set the URL to perform the GET request on
        request.add(
            "get",
            "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"
        ); //dummy api as of now

        // Set the path to find the desired data in the API response, where the response format is:
        request.add("path", "RAW.ETH.USD.VOLUME24HOUR");

        // Multiply the result by 1000000000000000000 to remove decimals
        int256 timesAmount = 10**18;
        request.addInt("times", timesAmount);

        // Sends the request
        return sendChainlinkRequestTo(oracle, request, fee);
    }

    /**
     * Receive the response in the form of uint256
     */
    function fulfill(bytes32 _requestId, uint256 _runs)
        public
        recordChainlinkFulfillment(_requestId)
    {
        runs = _runs;
    }
}
