import { useState } from "react";

function Employee() {
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState([
  { id: "EMP001", name: "John Doe", department: "HR", salary: "40000" },
  { id: "EMP002", name: "Jane Smith", department: "IT", salary: "55000" }
]);
const [name, setName] = useState("");
const [department, setDepartment] = useState("");
const [salary, setSalary] = useState("");
const [search, setSearch] = useState("");
function addEmployee() {
  if (name === "" || department === "" || salary === "") {
    alert("Please fill all fields");
    return;
  }

  const newEmployee = {
    id: "EMP00" + (employees.length + 1),
    name,
    department,
    salary,
  };

  setEmployees([...employees, newEmployee]);

  setName("");
  setDepartment("");
  setSalary("");
  setShowForm(false);
}
const filteredEmployees = employees.filter((emp) =>
  emp.name.toLowerCase().includes(search.toLowerCase())
);
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
       value={search}
       onChange={(e) => setSearch(e.target.value)}
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
          onClick={() => setShowForm(!showForm)}
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
       {filteredEmployees.map((emp) => (
        <tr key={emp.id}>
        <td>{emp.id}</td>
        <td>{emp.name}</td>
        <td>{emp.department}</td>
        <td>₹{emp.salary}</td>
        </tr>
        ))}
        </tbody>
      </table>

      {showForm && (
        <div
          style={{
            background: "#222",
            padding: "20px",
            marginTop: "20px",
            border: "1px solid white",
            borderRadius: "10px",
          }}
        >
          <h3>Add New Employee</h3>

          <input
          type="text"
         placeholder="Employee Name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         />
          <br />
          <br />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <br />
          <br />

          <input
        type="number"
        placeholder="Salary"
        value={salary}
       onChange={(e) => setSalary(e.target.value)}
       />
          <br />
          <br />

          <button onClick={addEmployee}>
            Add Employee
          </button>
          <br />
          <br />
          <button onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Employee;