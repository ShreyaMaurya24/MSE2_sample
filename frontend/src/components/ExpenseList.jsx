import { useEffect,useState } from "react"
import API from "../services/api"

function ExpenseList(){

const [expenses,setExpenses]=useState([])

useEffect(()=>{

const fetchExpenses = async()=>{

const token = localStorage.getItem("token")

const res = await API.get("/expenses",{
headers:{Authorization:token}
})

setExpenses(res.data)

}

fetchExpenses()

},[])

return(

<div>

{expenses.map((exp)=>(

<div className="expense-item" key={exp._id}>

<span>{exp.title}</span>
<span>₹{exp.amount}</span>
<span>{exp.category}</span>

</div>

))}

</div>

)

}

export default ExpenseList