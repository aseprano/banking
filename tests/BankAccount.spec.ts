import { BankAccount } from "../src/BankAccount"

describe("bank account", ()=>{
    it("starts with an id = 0", ()=>{
        const bankAccount = new BankAccount();
        expect(bankAccount.getId()).toEqual(0);
    })
    it("starts with 5€", ()=>{
        const bankAccount = new BankAccount();
        expect(bankAccount.getBalance()).toEqual(5);
    })
    it("can be credited", ()=>{
        const bankAccount = new BankAccount();
        bankAccount.charge(12.7);
        expect(bankAccount.getBalance()).toEqual(17.7);
    })
    it("can be debited", ()=>{
        const bankAccount = new BankAccount();
        bankAccount.withdraw(4);
        expect(bankAccount.getBalance()).toEqual(1);
    })
    it("can't debit more than balance", ()=>{
        const bankAccount = new BankAccount();
        expect(()=>bankAccount.withdraw(5.01)).toThrow();
        expect(bankAccount.getBalance()).toEqual(5);
    })
    it("can debit exact amount of the balance", ()=>{
        const bankAccount = new BankAccount();
        bankAccount.withdraw(5)
        expect(bankAccount.getBalance()).toEqual(0);
    })
})