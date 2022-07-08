class Account {
    constructor(id, name, age, amount=0) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.amount = amount;
    }

    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    };

    
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    };

    
    setAge(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    };

    
    setamount(amount) {
        this.amount = amount;
    }
    getamount() {
        return this.amount;
    };
}

module.exports = Account;