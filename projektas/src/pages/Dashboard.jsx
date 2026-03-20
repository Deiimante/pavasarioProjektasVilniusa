// import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; 

export default function Dashboard() {
//   const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   // navigate("/login");
  // };

  const handleNew = () => {
    // navigate("/Transactions");
  };

  const iconsPacs = [
    {
      name: "bag-smile",
      viewBox: "0 0 24 24",
      content: (
        <>
          <path d="M3.79418 12.0291c0.53717 -2.68581 0.80575 -4.02874 1.69322 -4.89367 0.16402 -0.15986 0.34148 -0.30533 0.5304 -0.43482C7.03998 6 8.4095 6 11.1485 6h1.703c2.739 0 4.1085 0 5.1307 0.70061 0.1889 0.12949 0.3664 0.27496 0.5304 0.43482 0.8875 0.86493 1.1561 2.20786 1.6932 4.89367 0.7712 3.856 1.1568 5.784 0.2692 7.1502 -0.1608 0.2474 -0.3484 0.4762 -0.5594 0.6823C18.75 21 16.7838 21 12.8515 21h-1.703c-3.93234 0 -5.89852 0 -7.0641 -1.1384 -0.21104 -0.2061 -0.39864 -0.4349 -0.55936 -0.6823 -0.88766 -1.3662 -0.50206 -3.2942 0.26914 -7.1502Z" stroke="currentColor" strokeWidth="1.5"></path>
          <path d="M9 6V5c0 -1.65685 1.3431 -3 3 -3s3 1.34315 3 3v1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
          <path d="M9.1709 15c0.41183 1.1652 1.5231 2 2.8293 2s2.4175 -0.8348 2.8293 -2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
        </>
      )
    },
    {
      name: "car",
      viewBox: "0 0 16 16",
      content: (
        <path d="m14.66895 7.9668 -3.8662 -1.38915 -1.61575 -2.0293A1.495 1.495 0 0 0 8.02685 4H4.0288a1.4991 1.4991 0 0 0 -1.24 0.65575l-1.3557 1.9917A2.4942 2.4942 0 0 0 1 8.0537V12a0.5 0.5 0 0 0 0.5 0.5h1.07105a1.9903 1.9903 0 0 0 3.8579 0h3.1421a1.9903 1.9903 0 0 0 3.8579 0H14.5a0.5 0.5 0 0 0 0.5 -0.5v-3.5625a0.5 0.5 0 0 0 -0.33105 -0.4707ZM4.5 13a1 1 0 1 1 1 -1 1.00135 1.00135 0 0 1 -1 1Zm7 0a1 1 0 1 1 1 -1 1.00125 1.00125 0 0 1 -1 1Zm2.5 -1.5h-0.57105a1.9903 1.9903 0 0 0 -3.8579 0h-3.1421a1.9903 1.9903 0 0 0 -3.8579 0H2v-3.4463a1.49885 1.49885 0 0 1 0.26 -0.84425l1.3555 -1.9907A0.4996 0.4996 0 0 1 4.0288 5h3.99805a0.4964 0.4964 0 0 1 0.38235 0.17725l1.6997 2.13425a0.50035 0.50035 0 0 0 0.22215 0.1592L14 8.78905Z" fill="currentColor" strokeWidth="0.5"></path>
      )
    },
    {
      name: "restaurant",
      viewBox: "0 0 16 16",
      content: (
        <>
          <path d="M4.5 1h1v5H4.5Z" fill="currentColor" strokeWidth="0.5"></path>
          <path d="M7 5.5a2 2 0 0 1 -4 0V1H2v4.5a3 3 0 0 0 2.5 2.955V15h1V8.455A3 3 0 0 0 8 5.5V1h-1Z" fill="currentColor" strokeWidth="0.5"></path>
          <path d="M11 1h-0.5v14h1V10h1.5a1 1 0 0 0 1 -1V4a2.89 2.89 0 0 0 -3 -3Zm2 8h-1.5V2.045c1.44 0.28 1.5 1.77 1.5 1.955Z" fill="currentColor" strokeWidth="0.5"></path>
        </>
      )
    },
    {
      name: "flash",
      viewBox: "0 0 32 32",
      content: (
        <path d="M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37 1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56 1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.09 1.09 0 0 1-.39-.08ZM17.75 13l2-9H11.8L9.26 15h5.91l-1.59 10.28L23 13Z" fill="currentColor"></path>
      )
    },
    {
      name: "money",
      viewBox: "0 0 16 16",
      content: (
        <>
          <path d="M1 11h14v1H1Z" fill="currentColor" strokeWidth="0.5"></path>
          <path d="M1 13h14v1H1Z" fill="currentColor" strokeWidth="0.5"></path>
          <path d="M12 5a1 1 0 1 0 1 1 1 1 0 0 0 -1 -1Z" fill="currentColor" strokeWidth="0.5"></path>
          <path d="M8 8a2 2 0 1 1 2 -2 2.00225 2.00225 0 0 1 -2 2Zm0 -3a1 1 0 1 0 1 1 1.001 1.001 0 0 0 -1 -1Z" fill="currentColor" strokeWidth="0.5"></path>
          <path d="M4 5a1 1 0 1 0 1 1 1 1 0 0 0 -1 -1Z" fill="currentColor" strokeWidth="0.5"></path>
          <path d="M14 10H2a1.00255 1.00255 0 0 1 -1 -1V3a1.00255 1.00255 0 0 1 1 -1h12a1.00255 1.00255 0 0 1 1 1v6a1.00135 1.00135 0 0 1 -1 1Zm0 -7H2v6h12Z" fill="currentColor" strokeWidth="0.5"></path>
        </>
      )
    }
  ];


  const activities = [
    { id: 1, name: "Apple Store", category: "Gadgets & Tech", amount: -199.00, time: "2h ago", icon: "bag-smile", colorClass: "danger" },
    { id: 2, name: "Salary Deposit", category: "Monthly Income", amount: 4200.00, time: "Yesterday", icon: "money", colorClass: "success" },
    { id: 3, name: "Utility Bill", category: "Bills & Utilities", amount: -85.00, time: "2 days ago", icon: "flash", colorClass: "warning" },
    { id: 4, name: "Coffee Shop", category: "Food & Drinks", amount: -5.50, time: "3 hours ago", icon: "restaurant", colorClass: "info" },
    { id: 5, name: "House Payment", category: "Housing", amount: -1200.00, time: "Last week", icon: "money", colorClass: "primary" },
    { id: 6, name: "Shell Gas Station", category: "Transport", amount: -55.00, time: "Yesterday", icon: "car", colorClass: "secondary" },
  ];

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* SIDEBAR */}
        <div className="col-auto p-0">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="col p-4 bg-light">
          
          {/* HEADER */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="text-start">
                <h2 className="fw-bold">Financial Overview</h2>
                <p className="text-muted">Welcome back, here's what's happening with your money.</p>
            </div>
            
            <div className="d-flex gap-2">
              <div>
                <input type="text" class="form-control" placeholder="Search transactions..."></input>
              </div>
              <button className="btn btn-primary" onClick={handleNew}>
                + New Transaction
              </button>
            </div>
          </div>

          {/* TOP CARDS */}
          <div className="row g-4 mb-4">
            <div className="col-md-4">
                
              <div className="card shadow-sm border-0 p-4 bg-primary text-white ">
               
                  <div className="d-flex justify-content-between">

                    <p className="mb-1 opacity-75">Total Balance</p>
                    <svg id="Finance--Streamline-Carbon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="16" width="16">
                        <desc>
                            Finance Streamline Icon: https://streamlinehq.com
                        </desc>
                        <defs></defs>
                        <title>finance</title>
                        <path d="M1 14h14v1H1Z" fill="#ffffff" stroke-width="0.5"></path>
                        <path d="M13.5 5.5a0.5 0.5 0 0 0 0.5 -0.5V3.5a0.5 0.5 0 0 0 -0.33 -0.47l-5.5 -2a0.5 0.5 0 0 0 -0.34 0l-5.5 2A0.5 0.5 0 0 0 2 3.5v1.5a0.5 0.5 0 0 0 0.5 0.5h0.5v6.5H2v1h12v-1h-1V5.5ZM3 3.85l5 -1.82L13 3.85V4.5H3ZM9 12h-2V5.5h2ZM4 5.5h2v6.5H4Zm8 6.5h-2V5.5h2Z" fill="#ffffff" stroke-width="0.5"></path>
                        <path id="_Transparent_Rectangle_" d="M0 0h16v16H0Z" fill="none" stroke-width="0.5"></path>
                    </svg>
                  </div>

                  <h2 className="fw-bold text-white d-flex justify-content-start">$12,450.00</h2>
                  <small className="d-flex justify-content-start">↑ +2.5% this month</small>

              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 p-4">

                <div className="d-flex justify-content-between">

                  <p className="mb-1 text-muted">Monthly Income</p>
                  
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="Arrow-Down--Streamline-Solar-Ar" height="24" width="24">
                    <desc>
                      Arrow Down Streamline Icon: https://streamlinehq.com
                    </desc>
                    <path d="m12 4 0 16m0 0 6 -6m-6 6 -6 -6" stroke="#198754" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                  </svg>
                </div>

                <h2    className="d-flex justify-content-start fw-bold ">$5,200.00</h2>
                <small className="d-flex justify-content-start fw-bold text-success">+12% vs last month</small>

              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 p-4">
                <div className="d-flex justify-content-between">
                  <p className="mb-1 text-muted">Monthly Expenses</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Line-Arrow-Up-1--Streamline-Core-Remix" height="14" width="14">
                    <desc>
                      Line Arrow Up 1 Streamline Icon: https://streamlinehq.com
                    </desc>
                    <g id="Free Remix/Interface Essential/line-arrow-up-1--arrow-up-keyboard">
                      <path id="Union" fill="#dc3545" fill-rule="evenodd" d="M6.55806 0.190505c0.24407 -0.2440732 0.63979 -0.2440788 0.88387 -0.000013L11.3606 4.10895c0.2441 0.24407 0.2441 0.6398 0 0.88388 -0.244 0.24409 -0.6398 0.2441 -0.8838 0.00003L7.625 2.14127l0 11.22653c0 0.3452 -0.27982 0.625 -0.625 0.625s-0.625 -0.2798 -0.625 -0.625l0 -11.22647 -2.85152 2.85152c-0.24407 0.24407 -0.6398 0.24407 -0.88388 0 -0.24408 -0.24408 -0.24408 -0.63981 0 -0.88389L6.55806 0.190505Z" clip-rule="evenodd" stroke-width="1"></path>
                    </g>
                  </svg>
                </div>
                <h2    className="d-flex justify-content-start fw-bold">$3,120.00</h2>
                <small className="d-flex justify-content-start text-danger fw-bold">↑ +5.4% vs last month</small>
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION */}
          <div className="row g-4 mb-4">
            {/* SPENDING ANALYSIS */}
            <div className="col-lg-8">

              <div className="card shadow-sm border-0 p-4 h-100">
                <div className="mb-5">
                  <h4 className="fw-bold mb-1 d-flex justify-content-start">Spending Analysis</h4>
                  <p   className="text-muted mb-1 d-flex justify-content-start">Breakdown of your monthly expenses</p>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-center flex-fill border-end">
                    <small className="text-uppercase fw-semibold text-muted">Total Spent</small>
                    <h2 className="fw-bold mb-0 text-primary">$3,120</h2>
                  </div>

                  <div className="flex-fill ps-4">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                        <span className="text-muted">Housing</span>
                        <span className="fw-bold">$1,248 <small className="text-muted fw-normal">(40%)</small></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                        <span className="text-muted">Food & Dining</span>
                        <span className="fw-bold">$780 <small className="text-muted fw-normal">(25%)</small></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                        <span className="text-muted">Entertainment</span>
                        <span className="fw-bold">$468 <small className="text-muted fw-normal">(15%)</small></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                        <span className="text-muted">Others</span>
                        <span className="fw-bold">$624 <small className="text-muted fw-normal">(20%)</small></span>
                      </li>
                    </ul>
                    <button className="btn btn-sm btn-link mt-2 p-0 text-decoration-none fw-semibold">
                      View Full Report &rarr;
                    </button>
                  </div>
                </div>
              </div>

                
            </div>

            {/* RECENT ACTIVITY */}
           <div className="col-lg-4">
  <div className="card shadow-sm border-0 rounded-4 h-100">
    {/* Reduced padding from p-1 to p-3 for better internal balance, or p-2 for ultra-tight */}
    <div className="card-body p-3">
      
      {/* Header Area: Reduced margin-bottom */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="fw-bold m-0" style={{ fontSize: '0.95rem' }}>Recent Activity</h6>
        <button className="btn btn-sm btn-light text-primary fw-semibold px-2 py-0 rounded-pill" style={{ fontSize: '0.75rem' }}>
          View All
        </button>
      </div>

      {/* Activity List: Tight gap */}
      <div className="d-flex flex-column gap-0">
        {activities.map((item) => {
  // Find the matching icon object
  const iconData = iconsPacs.find(icon => icon.name === item.icon);

  return (
    <div 
      key={item.id} 
      className="d-flex align-items-center justify-content-between py-2 px-1 rounded-2 list-item-hover"
      style={{ cursor: 'pointer', transition: 'background 0.2s ease', borderBottom: '1px solid #f8f9fa' }}
    >
      <div className="d-flex align-items-center overflow-hidden">
        {/* Icon Container */}
        <div 
          className={`bg-${item.colorClass}-subtle text-${item.colorClass} rounded-circle me-2 flex-shrink-0`} 
          style={{ width: '32px', height: '32px', display: 'grid', placeItems: 'center' }}
        >
          {iconData && (
            <svg
              viewBox={iconData.viewBox}
              width="18"
              height="18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'currentColor' }} // Uses the text-{colorClass} from parent
            >
              {iconData.content}
            </svg>
          )}
        </div>
        
        <div className="overflow-hidden">
          <p className="mb-0 fw-semibold text-dark text-truncate" style={{ fontSize: '0.85rem', lineHeight: '1.2' }}>
            {item.name}
          </p>
          <small className="text-muted d-block text-truncate" style={{ fontSize: '0.7rem' }}>
            {item.category}
          </small>
        </div>
      </div>

      <div className="text-end flex-shrink-0 ms-2">
        <p className={`mb-0 fw-bold ${item.amount < 0 ? 'text-danger' : 'text-success'}`} style={{ fontSize: '0.85rem' }}>
          {item.amount < 0 ? '-' : '+'}${Math.abs(item.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <small className="text-muted opacity-75 d-block" style={{ fontSize: '0.7rem' }}>
          {item.time}
        </small>
      </div>
    </div>
  );
})}
      </div>

    </div>
  </div>
</div>
          </div>

          {/* SAVINGS GOAL */}
          <div className="card shadow-sm border-0 p-4">
            <h4 className="d-flex justify-content-start fw-bold mb-1">Savings Goal</h4>
            <p  className="d-flex justify-content-start text-muted mb-1">You're $200 away from your vacation goal!</p>
            <div className="progress" style={{ height: "10px" }}>
              <div className="progress-bar bg-primary" style={{ width: "80%" }}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}