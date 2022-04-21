module.exports = class Account {
    constructor(owner) {
      this.owner = owner;
      this.balance = 0;
    }
    credit(amount) {
      this.balance +=amount;
    }
    //get an account ddescription
    describe() {
      return `owner: ${this.owner}, balance: ${this.balance}`;
    }
  };