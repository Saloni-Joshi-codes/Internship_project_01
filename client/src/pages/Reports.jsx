function Reports() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Reports</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "25px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            border: "1px solid white",
            padding: "20px",
            width: "220px",
            borderRadius: "8px",
          }}
        >
          <h3>Total Employees</h3>
          <h2>2</h2>
        </div>

        <div
          style={{
            border: "1px solid white",
            padding: "20px",
            width: "220px",
            borderRadius: "8px",
          }}
        >
          <h3>Monthly Payroll</h3>
          <h2>₹1,04,000</h2>
        </div>

        <div
          style={{
            border: "1px solid white",
            padding: "20px",
            width: "220px",
            borderRadius: "8px",
          }}
        >
          <h3>Departments</h3>
          <h2>2</h2>
        </div>
      </div>
    </div>
  );
}

export default Reports;