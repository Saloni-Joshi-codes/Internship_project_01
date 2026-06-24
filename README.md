# HRMS Payroll Dashboard

Enterprise HRMS & Payroll Automation Dashboard

Technology Stack:
- React
- Node.js
- Express
- MongoDB

Project Duration: 2 Months
Project Start Date: 10 June 2026

Project Modules:

### Employee Management
- Employee CRUD Operations
- Employee Search by Department
- Salary Filtering

### Payroll Management
- Payroll Data Model
- Salary Tracking
- Bonus and Deduction Management
- Net Salary Calculation

### Security Features
- JWT Authentication
- Protected Routes
- Role Based Access Control

## Future Enhancements

- React Frontend Dashboard
- Employee Profile Management
- Attendance Tracking
- Payroll Reports
- Admin Dashboard Analytics

## Authentication API

POST /auth/login

Request:

{
  "email": "admin@email.com",
  "password": "123456"
}

Response:

{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}