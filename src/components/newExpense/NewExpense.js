import { useState } from "react"
import ExpenseForm from "./ExpenseForm"

import "./NewExpense.css"
const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        
        props.onAddExpense(enteredExpenseData)
    }

    const [addNewExpenseBool, setAddNewExpenseBool] = useState(false)

    const changeNewExpenseBoolHandler = () => {
        setAddNewExpenseBool(!addNewExpenseBool)
    }

    let defaultNewExpense = <div>
        <button className="new-expense" onClick={changeNewExpenseBoolHandler}>Add New Expense</button>
    </div>

    if (addNewExpenseBool) {
        defaultNewExpense = <ExpenseForm onChangeNewExpenseBool={changeNewExpenseBoolHandler} onSaveExpenseData={saveExpenseDataHandler} />
        }

    return (
        <div className="new-expense">
            {defaultNewExpense}
        </div>
    )
}

export default NewExpense