# Run fabcar sample on IBM Starter Network Plan


Step 1: clone the repo

```git clone https://github.com/asararatnakar/fabcarStarter.git```

Step2 : Replace creds.json with your ConnectionProfile available on Starter Plan
        (For similicity we will use Org1 ConnectionProfile.)

Step 3: Install node modules with the following command
    ```npm install```

Step 4: Run the app
       (Ignore docker commands, http://hyperledger-fabric.readthedocs.io/en/latest/write_first_app.html?highlight=fabcar#enrolling-the-admin-user)
 
    ```
    node enrollAdmin.js
    node registerUser.js  
    ```

    Then follow the instructions from here

    http://hyperledger-fabric.readthedocs.io/en/latest/write_first_app.html?highlight=fabcar#querying-the-ledger
    



