# Run Hello World sample on IBM Starter Network Plan


Pre-req: 

Get the code
* Clone this repo

```git clone https://github.com/markparz/fabcarStarter.git```

Set up your IBM Blockchain Platform network on the IBM Cloud Environment:
Start an instance of the IBM Blockchain Platform
* While this sample can be run on either IBM Starter Plan or the IBM Enterprise plan, this is a sample to learn some of the basics so I would suggest using the Starter Plan. Create a IBM Starter plan on Bluemix at https://console.bluemix.net/catalog/services/blockchain

Upload you smartcontract and start it running on a channel
* Click on the "Install code" tab on the left in the dashboard
* Install the fabcar.go chaincode. Choose org1-peer1 in the drop down box labeled "choose peer".
* Click "Install Chaincode"
* In the pop up name "Chaincode ID" as "fabcar" and "Chaincode Version" as "v0"
* Click the "Choose files" and select the fabcar.go file from your local machine.
* Instantiate the chaincode by clicking and selecting "Instantiate" under the 3 dots to the right of fabcar under the "Actions" column. No arguments are needed for this chaincode to instantiate. Choose "defaultchannel" in the channel dropdown. NOTE: This might take a minute to complete.

Set up Access from your local machine to the cloud instance
* Click on the "Overview tab"
* Click "Connection Profile" and select "RAW JSON", copy the entire file.
* On your local machine replace the contents of creds.json with the information you just copied from the ConnectionProfile available on Starter Plan
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

