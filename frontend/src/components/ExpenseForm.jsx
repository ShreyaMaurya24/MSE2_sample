import { useState } from "react"
import API from "../services/api"

function ExpenseForm(){

const [title,setTitle]=useState("")
const [amount,setAmount]=useState("")
const [category,setCategory]=useState("")

const addExpense = async(e)=>{

e.preventDefault()

const token = localStorage.getItem("token")

await API.post("/expenses",
{title,amount,category},
{headers:{Authorization:token}}
)

alert("Expense Added")

}

return(

<form onSubmit={addExpense}>

<input
placeholder="Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<input
placeholder="Amount"
onChange={(e)=>setAmount(e.target.value)}
/>

<input
placeholder="Category"
onChange={(e)=>setCategory(e.target.value)}
/>

<button type="submit">Add Expense</button>

</form>

)

}

export default ExpenseForm