import "./transactions.css";

export default function Transactions() {
  const data = [
    {
      date: "Oct 24, 2023",
      name: "Apple Store",
      category: "Shopping",
      amount: -999,
      status: "Completed",
    },
    {
      date: "Oct 23, 2023",
      name: "Starbucks",
      category: "Food & Drink",
      amount: -5.5,
      status: "Completed",
    },
    {
      date: "Oct 22, 2023",
      name: "Employer Inc",
      category: "Salary",
      amount: 4500,
      status: "Completed",
    },
    {
      date: "Oct 21, 2023",
      name: "Landlord Corp",
      category: "Rent",
      amount: -1200,
      status: "Pending",
    },
  ];

  return (
    <div className="transactions-container">

      {/* HEADER */}
      <div className="transactions-header">
        <div>
          <h1>Transactions</h1>
          <p>Monitor and manage your recent financial activity.</p>
        </div>

        <button className="add-btn">+ Add Transaction</button>
      </div>

      {/* SEARCH + FILTERS */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search transactions..."
          className="search"
        />

        <div className="filter-buttons">
          <button>Category</button>
          <button>Date Range</button>
          <button>Type</button>
          <button>Status</button>
          <button className="clear">Clear all</button>
        </div>
      </div>

      {/* TABLE */}
      <div className="table">
        <div className="table-header">
          <span>Date</span>
          <span>Description</span>
          <span>Category</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        {data.map((item, index) => (
          <div key={index} className="table-row">
            <span>{item.date}</span>
            <span>{item.name}</span>
            <span>{item.category}</span>

            <span className={item.amount > 0 ? "income" : "expense"}>
              {item.amount > 0 ? "+" : "-"}${Math.abs(item.amount)}
            </span>

            <span
              className={
                item.status === "Completed" ? "status done" : "status pending"
              }
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}