{
   // Getter And Setter
   class BankAccount {
     public readonly id:string;
      public name:string;
      private _balance:string;
      constructor(id:string,name:string,_balance:string){
         this.id = id 
         this.name = name 
         this._balance = _balance
      }

      // addDeposit(amount:number){
      //    this._balance = this._balance + amount
      // }

      set deposit(amount:number){
         this._balance = this._balance + amount;
      }

      //getter
      get balance() {
         return this._balance
      }


      // getBalance() {
      //    return this._balance
      // }
   }

   const goribManusherAccount = new BankAccount('111' , 'manik', '200')
   // goribManusherAccount.balance = 0 
   // goribManusherAccount.addDeposit(20)
   goribManusherAccount.deposit = 50
   // const balance = goribManusherAccount.getBalance()
   // // console.log(balance)


   const myBalance = goribManusherAccount.balance
   console.log(myBalance)

}