//_Definitions.js
//_ContractAddresses.js
//_TransactionConfigs.js
//_ABIs.js
//_Web3Utils.js


let vueApp = new Vue({
        el: '#vueEl',
        data: {
            // # web3 providers
            browserWeb3Enabled: false
            , browserWeb3: null // meta mask etc provider
            , abi: null
            , targetBinCode: null
            , commonStorageAddress: null

        }


        ,
        methods: {

            // # init page
            init: function () {

                //  rename this
                let t = this;

                //  init meta mask alike web3 provider
                t.browserWeb3Enabled = !!window.web3;

                if (t.browserWeb3Enabled) {
                    t.browserWeb3 = window.web3;
                    log("use MetaMask");
                }
            }

            // # address role manages
            ,
            deploy: function () {

                let t = this;


                log(t.abi);
                log(t.targetBinCode);
                log(t.commonStorageAddress);

                if (!t.abi || !t.targetBinCode) {
                    log("bad input");
                    return;
                }

                var newContract = t.browserWeb3.eth.contract(t.abi);


                //https://segmentfault.com/a/1190000013841167


                if (t.commonStorageAddress) {
                    newContract.new(
                        t.commonStorageAddress,
                        {
                            from: t.browserWeb3.eth.accounts[0],
                            data: t.targetBinCode,
                            gas: '288628',
                            gasPrice: 4
                        }, function (e, contract) {
                            console.log(e, contract);
                            if (e !== 'undefined') {
                                if (typeof contract.address !== 'undefined') {
                                    console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                                } else {
                                    console.log('Contract mined! transactionHash: ' + contract.transactionHash);
                                }
                            }
                        });
                } else {
                    newContract.new(
                        {
                            from: t.browserWeb3.eth.accounts[0],
                            data: t.targetBinCode,
                            gas: '288628',
                            gasPrice: 4
                        }, function (e, contract) {
                            console.log(e, contract);
                            if (e !== 'undefined') {
                                if (typeof contract.address !== 'undefined') {
                                    console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                                } else {
                                    console.log('Contract mined! transactionHash: ' + contract.transactionHash);
                                }
                            }
                        });
                }


            }

        }
    })
;


$(function () {
    try {
        vueApp.init();
    } catch (e) {
        log(e);
    }
});