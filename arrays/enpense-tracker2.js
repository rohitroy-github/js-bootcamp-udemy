//account is a method containing all the information for the acccout 
const account =
 {
    name: 'Rohit Roy', //account holder name 
    expenses: [], //array for stroring expenses
    income: [], //array for storing income 
    //a function for adding new expense

    addExpense: function (description, amount) 
    {
        //pushing new expense into the expenses[] array
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    //a function for adding income into the income[] array

    addIncome: function (description, amount) 
    {
        //pushing into the income[] array
        this.income.push({
            description: description,
            amount: amount
        })
    },
    //a function for displaying account summary 

    getAccountSummary: function () 
    {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function (expense)//forEach function for checking each value in the array expenses
         {
            totalExpenses = totalExpenses + expense.amount;
        })

        this.income.forEach(function (income)
         {
            totalIncome = totalIncome + income.amount;
        })

        accountBalance = totalIncome - totalExpenses;

        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
} //end of method


//driver code 
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())