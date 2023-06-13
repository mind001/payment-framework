// File: banking.js

class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error('Insufficient funds');
    }
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;

// File: banking.test.js

const BankAccount = require('./banking');

describe('BankAccount', () => {
  let account;

  beforeEach(() => {
    account = new BankAccount(1000);
  });

  test('should have correct initial balance', () => {
    expect(account.getBalance()).toBe(1000);
  });

  test('should deposit correct amount', () => {
    account.deposit(500);
    expect(account.getBalance()).toBe(1500);
  });

  test('should withdraw correct amount', () => {
    account.withdraw(300);
    expect(account.getBalance()).toBe(700);
  });

  test('should throw error for insufficient funds', () => {
    expect(() => account.withdraw(1500)).toThrow('Insufficient funds');
  });
});

// unit-test

npm install --save-dev jest
npx jest

