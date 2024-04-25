import inquirer from "inquirer";

const currency : any = {
      USD : 2,
      EUR :0.91,
      GBR :0.76,
      INR :74.54,
      PKR :280,
};

let user_answer = await inquirer.prompt(
   [
         
      {  name: 'form' ,
         message : 'Enter From Currency',
         type : 'list',
         choices : ['USD','EUR','GBR','INR','PKR'],
      },
      {  name : 'to',
         message :'Enter To Currency',
         type : 'list',
         choices :['USD','EUR','GBR','INR','PKR'],
      },
       {   name: 'amout',
           message : 'Enter You Amount', 
           type : 'list',          
      },

   ]

)
 let  fromAmount = currency [user_answer.from] 
 let  toAmount = currency [user_answer.to] 
 let amount = user_answer.amount
 let baseAmount = amount / fromAmount //USD BASE  CURRENCY //4
 let convertedAmount = baseAmount * toAmount 
 console.log (convertedAmount);