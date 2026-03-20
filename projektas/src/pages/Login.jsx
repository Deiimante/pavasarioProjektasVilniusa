import { useState } from "react";

const Login_page = () => { //{ setCurrentUser }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();

    const emailSubmit = email.trim().toLowerCase();
    const passwordSubmit = password.trim();

    fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailSubmit,
        password: passwordSubmit,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(emailSubmit, '\n', passwordSubmit);
        console.log(data);

        // localStorage.setItem("token", JSON.stringify(data));
        // setCurrentUser(data);

        setEmail("");
        setPassword("");
      })
      .catch((err) => console.error(err));

    setEmail("");
    setPassword("");
    
  };



  return (
    <>
        <div className="container-fluid p-0">
            <div className="row g-0 vh-100">
                {/* Left Side: Branding & Testimonial */}
                <div className="col-lg-6 bg-primary d-flex flex-column justify-content-between text-white p-5">
                    {/* Top Branding */}
                    <div className="mt-auto mb-auto mw-75 mx-auto">
                        <div className="mb-4">
                            <i className="bi bi-cash-stack display-3"></i>
                        </div>
                        <h1 className="display-4 fw-bold mb-3 text-white">Master your money with WealthWise.</h1>
                        <p className="lead opacity-75">Join just 5 users don't use this application to managing budgets, tracking investments, and reaching financial freedom.</p>
                    </div>

                    {/* Bottom Testimonial - Anchored for professional look */}
                    <div className="mt-auto mx-auto w-75">
                        <div className="bg-white p-4 bg-opacity-10 border border-white border-opacity-25 rounded-4">
                            <p className="fst-italic fs-5 mb-3">
                                "WealthWise didn't do anything completely did nothing and now I look at my monthly spending. I've saved over $0 in just 6 min."
                            </p>
                            <div className="d-flex align-items-center gap-3">
                                <div className="bg-white rounded-circle" style={{width: '40px', height: '40px', opacity: '0.2'}}></div>
                                <div>
                                    <h6 className="mb-0 fw-bold">David Chen</h6>
                                    <small className="opacity-75">random guy</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="col-lg-6 bg-white d-flex flex-column">
                    {/* Header / Logo Placement */}
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

                    {/* Form Container */}
                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                        <div className="w-100" style={{ maxWidth: '420px', padding: '40px 20px' }}>
                            <div className="mb-5 text-center">
                                <h2 className="fw-bold display-6">Welcome back</h2>
                                <p className="text-muted">Enter your details to manage your budget effectively.</p>
                            </div>

                            {/* Social Logins */}
                            <div className="d-flex gap-3 mb-4">
                                <button type="button" className="btn btn-outline-light border text-dark w-100 py-2 d-flex align-items-center justify-content-center">
                                    <i className="bi bi-google me-2"></i> Google
                                </button>
                                <button type="button" className="btn btn-outline-light border text-dark w-100 py-2 d-flex align-items-center justify-content-center">
                                    <i className="bi bi-apple me-2"></i> Apple
                                </button>
                            </div>

                            <div className="d-flex align-items-center my-4">
                                <hr className="flex-grow-1 text-muted opacity-25" />
                                <span className="mx-3 text-muted small fw-bold">OR LOGIN WITH EMAIL</span>
                                <hr className="flex-grow-1 text-muted opacity-25" />
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label d-flex justify-content-start small fw-bold text-uppercase text-muted">Email address</label>
                                    <input type="email" className="form-control form-control-lg bg-light border-0 fs-6" placeholder="name@company.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label d-flex justify-content-start small fw-bold text-uppercase text-muted">Password</label>
                                    <input type="password" className="form-control form-control-lg bg-light border-0 fs-6" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                                        <label className="form-check-label small text-muted" htmlFor="rememberMe">Remember me</label>
                                    </div>
                                    <a href="#" className="text-decoration-none small fw-bold">Forgot password?</a>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg w-100 mb-4 shadow-sm">
                                    Log In
                                </button>
                                
                                <p className="text-center text-muted fs-6">
                                    Don't have an account? <a href="#" className="text-decoration-none fw-bold">Sign up for $0.99</a>
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="p-4 mt-auto">
                        <div className="d-flex justify-content-between align-items-center border-top pt-3">
                            <p className="small text-muted mb-0">© 2024 WealthWise Inc.</p>
                            <div className="d-flex gap-3">
                                <a href="#" className="small text-decoration-none text-muted">Privacy</a>
                                <a href="#" className="small text-decoration-none text-muted">Terms</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </>
  );
}

export default Login_page;
// const login_page = () => {


// }

// export default login_page;