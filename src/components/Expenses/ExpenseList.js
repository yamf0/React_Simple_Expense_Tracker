import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"

import Card from "../common/Card"
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function ExpenseList(props) {
    const expenses = props.expenses

    const [filteredYear, setFilteredYear] = useState('2023')
    const filterChangeHandler = (filterYear) => {
        setFilteredYear(filterYear)
    }

    const filteredExpenses = expenses.filter((item) => {
        const year = item.date.getFullYear()
        return year == filteredYear
    })

    let filteredExpensesContent = <h2 className="expenses-list__fallback">No Expenses found</h2>

    if (filteredExpenses.length > 0){
        filteredExpensesContent = filteredExpenses.map((item) => {
                return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
            })
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ul className="expenses-list">
                    {filteredExpensesContent} 
                </ul>
            </Card>
        </div>
    )
}

export default ExpenseList