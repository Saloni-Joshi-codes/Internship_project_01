import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Employee Payroll System</h1>

      <div
        style={{
          width: "300px",
          margin: "30px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px"
        }}
      >
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer"
          }}
          onClick={() => navigate("/employees")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;