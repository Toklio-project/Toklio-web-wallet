var config = {
    apiUrl: "http://wallet.tokl.io:1985/",
    mainnetExplorerUrl: "http://explorer.tokl.io/",
    testnetExplorerUrl: "https://testnet.xmrchain.com/",
    stagenetExplorerUrl: "http://139.162.60.17:8082/",
    nettype: 0, /* 0 - MAINNET, 1 - TESTNET, 2 - STAGENET */
    coinUnitPlaces: 12,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    coinSymbol: 'TOKL',
    openAliasPrefix: "tokl",
    coinName: 'Toklio',
    coinUriPrefix: 'Toklio:',
    addressPrefix: 0x269d,
    integratedAddressPrefix: 0x5a1f,
    subAddressPrefix: 0xab20,
    addressPrefixTestnet: 0x5e20,
    integratedAddressPrefixTestnet: 0x1463a0,
    subAddressPrefixTestnet: 0xab2a0,
    addressPrefixStagenet: 0x4fb9f,
    integratedAddressPrefixStagenet: 0x3bd620,
    subAddressPrefixStagenet: 0x56a0,
    feePerKB: new JSBigInt('2000000000'),//20^10 - not used anymore, as fee is dynamic.
    dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 10, // minimum mixin for hardfork v8 is 10 (ring size 11)
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: false
};
