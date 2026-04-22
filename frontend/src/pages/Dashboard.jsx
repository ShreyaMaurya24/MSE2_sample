import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Dashboard(){

return(

<div className="container">

<h1>Dashboard</h1>

<ExpenseForm/>

<h3>Your Expenses</h3>

<ExpenseList/>

</div>

)

}

export default Dashboard