let accounts = [];

function getAllAccounts() {
    return accounts;
}

function getOneAccount(id) {
    for(let account of accounts) {
        if(account.id == id) {
            return account;
        }
    }
    return false;
}

function recordAccount(account) {
    accounts.push(account);
}

function updateAccount(id,newamount) {
    console.log(id,newamount);
    for(let account of accounts) {
        if(account.id == id) {
            account.amount += newamount;
            return true;
        }
    }
    return false;
}

function deleteAccount(id) {
    let found = false;
    for(let account of accounts) {
        if(account.id == id) {
            found = true;
        }
    }
    if(accounts.length>0 && found) {
        accounts = accounts.filter(account => account.id != id);
        return true;
    }
    return found;
}

module.exports = {getAllAccounts, getOneAccount,recordAccount,updateAccount,deleteAccount};