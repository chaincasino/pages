let ContractAddresses = {
    BonusDivestServiceImpl: '0x6312e4332f0c30d604fdde91e470d350b26255a2',
    BonusServiceImpl: '0x40160ddb05bb97ab04802f8470113ff24d92b911',
    CommonStorage: '0x21705d84182b45bbf4be8a61a1691300232b3139',
    Migrations: '0x2b2929aaa8542f6dc7f1cf9d37340734b3893c44',
    StandardToken: '0x56c71b77416b097fec1aec314e12b89ea4684e36',
    TokenServiceImpl: '0xd6ea6f5a0ab768321b3585902e89a2b2a5ead6d1',
    Slot: '0xc1ab0c83e44747794ec4b3d27addb3dcbd9ac6ca'
};

let transactionConfig = {
    bonusInvestConfig: {
        to: ContractAddresses.BonusServiceImpl,
        gas: 210000,
        value: 1,
        uom: 'ether',
        selector: 'bonusInvestCode'
    },
};

let QrList = [
    transactionConfig.bonusInvestConfig
];


let vueApp = new Vue({
    el: '#vueEl',
    data: {
        title: 'chain casino',
        qrGenerator: null,

        // # web3 providers
        isMetaMaskEnabled: false,
        web3: null, // meta mask etc provider


        // # services
        bonusService: null,
        tokenService: null

        // # games
    }

    , methods: {


        init: function () {

            // # rename this
            let t = this;

            // # init meta mask alike web3 provider
            t.isMetaMaskEnabled = !!window.web3;

            if (t.isMetaMaskEnabled) {
                t.web3 = window.web3;
                console.log("use MetaMask");
            } else {
                t.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/qePENhv4I7T4cLaAUOVr"));
                console.log("use infura service..");
            }


            // # instantiate the qr code plugin
            t.qrGenerator = new EthereumQRPlugin();

            // # start render rq codes.
            t.renderQrCodes();

        },

        // ##  =================================== utils ===================================
        renderQrCodes: function () {

            let t = this;
            for (let i = 0; i < QrList.length; i++) {
                t.drawQrCode(QrList[i]);
            }

        },

        drawQrCode: function (config) {

            let t = this;

            const configDetails = {
                size: 180,
                selector: '#' + config.selector,
                options: {
                    margin: 2
                }
            };

            const sendDetails = {
                to: config.to,
                value: t.web3.toWei(config.value, config.uom),
                gas: config.gas
            };

            t.qrGenerator.toCanvas(sendDetails, configDetails);
        },

        sendEth: function (config) {
            let t = this;
            t.web3.eth.sendTransaction(
                {
                    to: config.to,
                    value: t.web3.toWei(config.value, config.uom),
                    gas: config.gas,
                    data: t.web3.toHex(123)
                },
                function (error, hash) {
                    if (error) {
                        console.log("error happens");
                        console.log(error);
                    } else {
                        console.log("tx ok");
                        console.log(hash);
                    }
                    // config.callback(error, hash);
                }
            );

        }


    }
});


$(function () {
    vueApp.init();
});
