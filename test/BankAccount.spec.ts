import { BankAccount } from "../src/BankAccount"
import { Id } from "../src/Id";

describe("BankAccount",()=>{
    it("expect that the Id and the balance are stored properly",()=>{
        const bankAccount=new BankAccount(new Id(12),123.14);
        expect(bankAccount.getId().toNumber()).toBe(12);
        expect(bankAccount.getBalance()).toBe(123.14);
    })
    it("shouldn't be possible to be instanciated with a negative balance",()=>{
        expect(()=>new BankAccount(new Id(17),-3)).toThrow();
    })
    it("can be charged correctly",()=>{
        const bankAccount=new BankAccount(new Id(17),3.14);
        bankAccount.charge(7.21);
        expect(bankAccount.getBalance()).toBe(10.35);
    })
    it("can be withDraw correctly",()=>{
        const bankAccount=new BankAccount(new Id(17),10.35);
        bankAccount.withDraw(7.21);
        expect(bankAccount.getBalance()).toBeCloseTo(3.14,3);
    })
    it("can be withDraw correctly to 0",()=>{
        const bankAccount=new BankAccount(new Id(17),10.35);
        bankAccount.withDraw(10.35);
        expect(bankAccount.getBalance()).toBe(0);
    })
    it("can not withDraw more money than the balance",()=>{
        const bankAccount=new BankAccount(new Id(17),10.35);
        expect(()=>{bankAccount.withDraw(10.36)}).toThrow();
        expect(bankAccount.getBalance()).toBeCloseTo(10.35,3);
    })
    it("cannot be possibile to charge a negative amount",()=>{
        const bankAccount=new BankAccount(new Id(17),3.14);
        expect( ()=>bankAccount.charge(-2.23)).toThrow();
    })
    it("cannot be possibile to charge a negative amount",()=>{
        const bankAccount=new BankAccount(new Id(17),3.14);
        expect( ()=>bankAccount.withDraw(-2.23)).toThrow();
    })
    
})