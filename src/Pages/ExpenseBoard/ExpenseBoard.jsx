import ExpenseTracker from "../../reUsable/expenseTracker/ExpenseTracker";
import "../ExpenseBoard/expense.scss";
import { useGetInfo } from "../../Hooks/useGetInfo";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Config/firebase-config";

const ExpenseBoardTracker = () => {
  function handleAddExpenses() {
    console.log("Expenses add");
  }
  const navigate = useNavigate();
  const { userName, userImg } = useGetInfo();

  async function handleSignOut() {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <main className="mainContainer">
      <div className="heading">
        <div className="header">
          <h2> {userName} Expense Tracker</h2>
          <p className="subheader">Manage and Track Your Financial Expenses</p>
        </div>
        <div className="imgContainer">
          <img src={userImg} alt="profileImg" className="profileImg" />
          <button className="btn sign-out-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      <div className="cardContainer">
        <a href="" className="btn add-expense-btn" onClick={handleAddExpenses}>
          Add Expenses
        </a>
        <ExpenseTracker />
      </div>
    </main>
  );
};

export default ExpenseBoardTracker;
