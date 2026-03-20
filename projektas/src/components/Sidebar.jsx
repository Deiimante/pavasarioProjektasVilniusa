
const Sidebar = () => {

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   // navigate("/login");
  // };

  return (
    <div 
      className="d-flex flex-column flex-shrink-0 p-3 bg-white" 
      style={{ 
        width: "280px", 
        height: "100vh", // Makes it exactly the height of the screen
        position: "sticky", // Keeps it in place if the rest of the page scrolls
        top: 0 
      }}
    >
        <header className="p-4 d-flex justify-content-end">
            <div className="d-flex align-items-center gap-2">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded-3" style={{ width: '32px', height: '32px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="18" width="18">
                        <path fill="#ffffff" fillRule="evenodd" clipRule="evenodd" d="M1.25 4.5c0 -1.31168 1.06332 -2.375 2.375 -2.375h5.75v1.25h-5.75C3.27982 3.375 3 3.65482 3 4s0.27982 0.625 0.625 0.625H11c0.0995 0 0.1948 0.03951 0.2652 0.10983 0.0703 0.07033 0.1098 0.16571 0.1098 0.26517v1.25H9.5c-0.55229 0 -1 0.44772 -1 1v2c0 0.55228 0.44771 1 1 1h1.875v1.25c0 0.0995 -0.0395 0.1948 -0.1098 0.2652 -0.0704 0.0703 -0.1657 0.1098 -0.2652 0.1098H1.625c-0.43094 0 -0.19484 -0.0395 -0.26517 -0.1098 -0.07032 -0.0704 -0.10983 -0.1657 -0.10983 -0.2652v-7Zm11.375 1.75H13c0.5523 0 1 0.44772 1 1v2c0 0.55228 -0.4477 1 -1 1h-0.375v1.25c0 0.431 -0.1712 0.8443 -0.476 1.149 -0.3047 0.3048 -0.718 0.476 -1.149 0.476H1.625c-0.43098 0 -0.844302 -0.1712 -1.149048 -0.476C0.171205 12.3443 0 11.931 0 11.5v-7C0 2.49797 1.62297 0.875 3.625 0.875H10c0.3452 0 0.625 0.27982 0.625 0.625v1.875H11c0.431 0 0.8443 0.17121 1.149 0.47595 0.3048 0.30475 0.476 0.71807 0.476 1.14905v1.25Z" />
                    </svg>
                </div>
                <span className="fw-bold fs-5 mb-0">WealthWise</span>
            </div>
        </header>
      <hr />
      
      {/* "overflow-auto" ensures you can scroll the menu if it exceeds screen height */}
      <ul className="nav nav-pills flex-column mb-auto overflow-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
            Customers
          </a>
        </li>
      </ul>
      
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li><a className="dropdown-item" href="#" >Sign out</a></li>
          {/* <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button> */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;