//_Definitions.js
//_ContractAddresses.js
//_TransactionConfigs.js
//_ABIs.js
//_Web3Utils.js


let vueApp = new Vue({
        el: '#vueEl',
        data: {
            providerWeb3: null

        }


        ,
        methods: {

            // # init page
            init: function () {


                //  rename this
                let t = this;

                t.providerWeb3 = new Web3(new Web3.providers.HttpProvider(Definitions.infuraProviderUrl));


                t.startTest();

            }

            // # address role manages
            ,
            startTest: function () {

                let t = this;


                let abi = [{
                    "constant": true,
                    "inputs": [],
                    "name": "version",
                    "outputs": [{"name": "version_", "type": "string"}],
                    "payable": false,
                    "stateMutability": "pure",
                    "type": "function"
                }];


                let versioned = t.providerWeb3.eth.contract(abi).at('0xaE6BEFEF50fb39FbEe9Ebd56Ff5AF2f7019F2A1D');


                let version = versioned.version.call();
                console.log(version);

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