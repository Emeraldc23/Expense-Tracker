import { useState } from "react";
import { expenseDetails } from "../../../data/expenseTracker";
import "../expenseTracker/expenseTracker.scss";
import { useAddTransaction } from "../../Hooks/useAddTransactions";
import { useGetTransaction } from "../../Hooks/useGetTransaction";

const ExpenseTracker = () => {
  const [value, setValue] = useState({
    amount: "",
    description: "",
    category: "",
  });

  const [balance, setBalance] = useState({
    bal: 0,
    balIncom: 0,
    balExp: 0,
  });

  const [transactionPurpose, setTransactionPurpose] = useState("");
  const { addTransaction } = useAddTransaction();
  const { transaction } = useGetTransaction();

  function increaseBalance() {
    const amount = Number(value.amount);
    setBalance((prev) => {
      if (transactionPurpose === "income") {
        return {
          ...prev,
          bal: prev.bal + amount,
          balIncom: prev.balIncom + amount,
        };
      }
      if (transactionPurpose === "expense") {
        return {
          ...prev,
          bal: prev.bal - amount,
          balExp: prev.balExp + amount,
        };
      }
      return prev;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addTransaction({
        transactionAmount: value.amount,
        category: value.category,
        transactionType: transactionPurpose,
        description: value.description,
      });
      console.log("Successful");
    } catch (error) {
      console.log(error, "This didn't any data");
    }
    setValue({
      amount: "",
      description: "",
      category: "",
    });
    setTransactionPurpose("");
    increaseBalance();
  }
  return (
    <div className="expenseTracker">
      <div className="card">
        {expenseDetails.map((cardItem, index) => {
          const Icon = cardItem.icon;
          return (
            <div className="cardContent" key={index}>
              <div className="cardHeader">
                <p className="title">{cardItem.title}</p>
                <span className="icon">
                  <Icon />
                </span>
              </div>
              <div className="transaction">
                <h4>{`$ ${balance[cardItem.key]}`}</h4>
              </div>
            </div>
          );
        })}
      </div>

      {/* ADD EXPENSE FORM */}
      <div className="formContainer">
        <h3>Add new expenses</h3>
        <p>Enter the details of your new expenses</p>
        <form onSubmit={handleSubmit} className="form">
          <div className="amt">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              value={value.amount}
              placeholder="Enter your amount e.g 100"
              onChange={(e) => setValue({ ...value, amount: e.target.value })}
              required
            />
          </div>
          <div className="amt">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={value.category}
              onChange={(e) => setValue({ ...value, category: e.target.value })}
              required
            >
              <option value="" disabled selected>
                Select a category
              </option>
              <option value="food">Food</option>
              <option value="transportation">Transportation</option>
              <option value="entertainment">Entertainment</option>
              <option value="shopping">Shopping</option>
              <option value="utilities">Utilities</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
              <option value="travel">Travel</option>
              <option value="housing">Housing</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="amt">
            <label htmlFor="">Description</label>
            <input
              type="text"
              value={value.description}
              placeholder="transaction description"
              onChange={(e) =>
                setValue({ ...value, description: e.target.value })
              }
              required
            />
          </div>

          <div className="amt radio-div">
            <div className="income purpose">
              <label htmlFor="income">Income</label>
              <input
                type="radio"
                id="income"
                name="transactionType"
                value="income"
                checked={transactionPurpose === "income"}
                onChange={(e) => setTransactionPurpose(e.target.value)}
              />
            </div>
            <div className="expense purpose">
              <label htmlFor="expense">Expense</label>
              <input
                type="radio"
                id="expense"
                value="expense"
                checked={transactionPurpose === "expense"}
                onChange={(e) => setTransactionPurpose(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="transaction">
        <h2>Transactions</h2>
        <ul>
          {transaction.map((order, index) => {
            const { transactionAmount, description, transactionType } = order;
            return (
              <li key={index}>
                <h4>{description}</h4>
                <p
                  style={{
                    color: `${transactionType === "expense" ? "red" : "green"}`,
                  }}
                >
                  ${transactionAmount} - {transactionType}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
