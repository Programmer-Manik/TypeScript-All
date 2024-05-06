{
   // Encapsulation In OOP
   class BankAccount {
      public readonly id:string;
       public name:string;
       private _balance:string;
       constructor(id:string,name:string,_balance:string){
          this.id = id 
          this.name = name 
          this._balance = balance
       }
       addDeposit(amount:number){
          this._balance = this._balance + amount
       }
       getBalance() {
          return this._balance
       }
    }
 
    const goribManusherAccount = new BankAccount('111' , 'manik', '200')
    // goribManusherAccount.balance = 0 
    goribManusherAccount.addDeposit(2)
    const balance = goribManusherAccount.getBalance()
    // console.log(balance)
 
 
 
    class Student extends BankAccount {
       test(){
          this
       }
    }

   }