import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard</h1>
      <p>Welcome to Employee Payroll Dashboard</p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            width: "200px",
          }}
        >
          <Link
          to="/employees"
          style={{ textDecoration: "none", color: "white" }}
>
         <h3>Employees</h3>
        <p>Total Employees</p>
        </Link>
        
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            width: "200px",
          }}
        >
        <Link
        to="/payroll"
        style={{ textDecoration: "none", color: "white" }}
>
        <h3>Payroll</h3>
        <p>Salary Records</p>
        </Link>
    
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            width: "200px",
          }}
        >
          <Link
        to="/reports"
        style={{ textDecoration: "none", color: "white" }}
>
       <h3>Reports</h3>
       <p>Monthly Summary</p>
</Link>
        
        </div>
      </div>
    </div>
  );
}

export default Dashboard;