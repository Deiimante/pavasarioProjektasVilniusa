import { useNavigate } from "react-router-dom";

export default function Signup() {
  const nav = useNavigate();

  const handleSignup = () => {
    localStorage.setItem("auth", "true");
    nav("/dashboard");
  };

  return (
    <div className="auth">
      <div className="card">
        <h2>Sign Up</h2>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button onClick={handleSignup}>Create Account</button>
      </div>
    </div>
  );
}