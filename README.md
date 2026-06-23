# HRMS Payroll Dashboard

Enterprise HRMS & Payroll Automation Dashboard

Technology Stack:
- React
- Node.js
- Express
- MongoDB

Project Start Date: 10 June 2026

Week 1 Goals:
- Authentication
- JWT Security
- Role Based Access

## Payroll Module

Features:
- Payroll data model
- Employee salary tracking
- Bonus and deduction management
- Net salary calculation

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