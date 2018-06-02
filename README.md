# Run Hello World sample on IBM Starter Network Plan


Pre-req: 

Set up your IBM Blockchain Platform network on the IBM Cloud Environment:
* While this sample can be run on either IBM Starter Plan or the IBM Enterprise plan, this is a sample to learn some of the basics so I would suggest using the Starter Plan. Create a IBM Starter plan on Bluemix at https://console.bluemix.net/catalog/services/blockchain

* Install & Instantiate fabcar chaincode with chiancode name "fabcar" (chaincode can be found here: https://github.com/hyperledger/fabric-samples/tree/master/chaincode/fabcar/go)

Step 1: clone the repo

```git clone https://github.com/asararatnakar/fabcarStarter.git```

Step2 : Replace creds.json with your ConnectionProfile available on Starter Plan
        (For similicity we will use Org1 ConnectionProfile.)

Step 3: Install node modules with the following command
    ```npm install```

Step 4: Run the app
       (Ignore docker commands, http://hyperledger-fabric.readthedocs.io/en/latest/write_first_app.html?highlight=fabcar#enrolling-the-admin-user)
 

    node enrollAdmin.js
    node registerUser.js  


    Then on follow the instructions from here:

    http://hyperledger-fabric.readthedocs.io/en/latest/write_first_app.html?highlight=fabcar#querying-the-ledger
    

s

