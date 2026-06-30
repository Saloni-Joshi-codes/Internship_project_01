function Employee() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Employee Management</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search Employee..."
          style={{
            width: "300px",
            padding: "10px",
          }}
        />

        <button
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Add Employee
        </button>
      </div>

      <table
        border="1"
        width="100%"
        cellPadding="10"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>EMP001</td>
            <td>John Doe</td>
            <td>HR</td>
            <td>₹40,000</td>
          </tr>

          <tr>
            <td>EMP002</td>
            <td>Jane Smith</td>
            <td>IT</td>
            <td>₹55,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Employee;