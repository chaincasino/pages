let NETS = {
    main: {name: "MAIN", test: false},
    reposten: {name: "ROPSTEN TEST NET", test: true},
    kovan: {name: "KOVAN TEST NET", test: true},
    rinkeby: {name: "RINKEBY TEST NET", test: true},
};


let ContractAddressesOfNets = {
    main: {
        BonusDivestServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        BonusServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        CommonStorage: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        ControlServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        PeriodJob: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        StandardToken: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        TokenServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
    }
    , ropsten: {
        BonusDivestServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        BonusServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        CommonStorage: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        ControlServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        PeriodJob: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        StandardToken: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        TokenServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
    }
    , kovan: {
        BonusDivestServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        BonusServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        CommonStorage: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        ControlServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        PeriodJob: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        StandardToken: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        TokenServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
    }
    , rinkeby: {
        BonusDivestServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        BonusServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        CommonStorage: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        ControlServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        PeriodJob: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        StandardToken: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
        TokenServiceImpl: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
    }
};


let ContractAddresses = ContractAddressesOfNets.main;