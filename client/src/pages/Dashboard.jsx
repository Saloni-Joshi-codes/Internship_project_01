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
          <h3>Employees</h3>
          <p>Total Employees</p>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            width: "200px",
          }}
        >
          <h3>Payroll</h3>
          <p>Salary Records</p>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            width: "200px",
          }}
        >
          <h3>Reports</h3>
          <p>Monthly Summary</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;