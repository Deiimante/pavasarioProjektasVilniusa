import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="p-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Transactions</h2>
          <p className="text-muted">Monitor and manage your recent financial activity.</p>
        </div>

        <button className="btn btn-primary fw-semibold">
          + Add Transaction
        </button>
      </div>

      {/* SEARCH + FILTERS */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Search transactions..."
          style={{ maxWidth: "260px" }}
        />

        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">Category</button>
          <button className="btn btn-outline-secondary">Date Range</button>
          <button className="btn btn-outline-secondary">Type</button>
          <button className="btn btn-outline-secondary">Status</button>
          <button className="btn btn-outline-danger">Clear all</button>
        </div>
      </div>

      {/* TABLE */}
      <div className="card shadow-sm border-0">
        <div className="table-responsive">
          <table className="table align-middle mb-0">

            <thead className="table-light">
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>

                  <td className={item.amount > 0 ? "text-success fw-bold" : "text-danger fw-bold"}>
                    {item.amount > 0 ? "+" : "-"}${Math.abs(item.amount)}
                  </td>

                  <td>
                    {item.status === "Completed" ? (
                      <span className="badge bg-success-subtle text-success border border-success px-3 py-2">
                        Completed
                      </span>
                    ) : (
                      <span className="badge bg-warning-subtle text-warning border border-warning px-3 py-2">
                        Pending
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}
