const express = require("express");
const {getAllAccounts, getOneAccount,recordAccount,updateAccount,deleteAccount} = require("./accounts");
const account = require("./account");
const app = express();

app.use(express.json());

app.post('/account', (request,response)=> {
    try {
        const {id,name,age} = request.body;
        if(!id) throw new Error("Please provide an Id.");
        if(!name) throw new Error("Plese provide a name.");
        if(!age) throw new Error("Please provide the age.");
        
        let newAccount = new account(id,name,age);

        recordAccount(newAccount);
        response.status(200).json({Message: "The account was successfully  created"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.get('/account', (request,response) => {
    try {
        let result = getAllAccounts();
        if(!result) throw new Error("No accounts found.");
        response.status(200).json(result);
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.get('/account/:id', (request,response) => {
    try {
        let id = request.params.id;
        if(!id) throw new Error("Please provide id.");
        let result = getOneAccount(Number(id));
        if(!result) throw new Error("No account found.");
        response.status(200).json(result);
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.patch('/account',(request,response)=> {
    try {
        const {id, amount} = request.body;
        if(!id) throw new Error("Please provide id.");
        if(!amount) throw new Error("Please provide amount");
        let result = updateAccount(id,amount);
        if(!result) throw new Error("Account not found");
        response.status(200).json({Message: "Updated account amount"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.delete('/account',(request,response)=> {
    try {
        const {id} = request.body;
        if(!id) throw new Error("Please provide id.");
        let result = deleteAccount(id);
        if(!result) throw new Error("Account not found");
        response.status(200).json({Message: "Deleted account"});
    }catch(error) {
        response.status(401).json({
            Error: error.message
        });
    }
});

app.listen(3020, () => {
    console.log("server running on port:"+3020);
});