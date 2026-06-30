function Payroll() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Payroll Management</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Generate Payroll
        </button>

        <input
          type="text"
          placeholder="Search Employee..."
          style={{
            width: "280px",
            padding: "10px",
          }}
        />
      </div>

      <table
        border="1"
        width="100%"
        cellPadding="10"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Employee</th>
            <th>Basic Salary</th>
            <th>Bonus</th>
            <th>Total Salary</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John Doe</td>
            <td>₹40,000</td>
            <td>₹5,000</td>
            <td>₹45,000</td>
          </tr>

          <tr>
            <td>Jane Smith</td>
            <td>₹55,000</td>
            <td>₹4,000</td>
            <td>₹59,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Payroll;