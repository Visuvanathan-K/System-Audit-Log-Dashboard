# System Audit Log Dashboard

A full-stack MERN application that enables security engineers to upload, search, filter, sort, and investigate system audit logs through an interactive dashboard.

## 🌐 Live Demo

Frontend:
[https://system-audit-log-dashboard.vercel.app/](https://system-audit-log-dashboard.vercel.app/)

Backend API:
[https://system-audit-log-dashboard.onrender.com](https://dashboard.render.com/web/srv-d9fvrs68deks73boqtp0)

---

# Project Overview

System Audit Log Dashboard is designed to simplify the investigation of security audit logs.

The application allows users to:

- Upload thousands of audit log records
- View logs in a responsive dashboard
- Search across multiple fields
- Filter by status, role, and action
- Sort by different columns
- Paginate large datasets efficiently
- View dashboard statistics

The application follows a client-server architecture using the MERN stack.

---

# Tech Stack

## Frontend

- React.js
- Vite
- Material UI
- Axios
- React Router

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

# Features

### Bulk Upload

- Upload JSON audit log files
- Supports large datasets
- Stores logs in MongoDB using bulk insertion

### Dashboard

- Displays all uploaded audit logs
- Responsive Material UI table

### Search

Searches across:

- Actor
- Role
- Action
- Resource

### Filters

- Status
- Role
- Action

### Sorting

Server-side sorting

Examples:

- Timestamp
- Actor
- Status
- Action

### Pagination

Server-side pagination for efficient handling of large datasets.

### Dashboard Statistics

Displays:

- Total Logs
- Successful Logs
- Failed Logs
- Today's Logs

---

# Project Structure

```
System-Audit-Log-Dashboard/

│
├── client/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── context/
│ │ ├── hooks/
│ │ ├── pages/
│ │ └── App.jsx
│
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── services/
│ ├── config/
│ └── server.js
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/System-Audit-Log-Dashboard.git

cd System-Audit-Log-Dashboard
```

---

# Backend Setup

Navigate to backend

```bash
cd server
```

Install packages

```bash
npm install
```

Create `.env`

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string
```

Run server

```bash
npm run dev
```

Server starts at

```
http://localhost:5000
```

---

# Frontend Setup

Navigate to client

```bash
cd client
```

Install packages

```bash
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000
```

Run

```bash
npm run dev
```

Frontend starts at

```
http://localhost:5173
```

---

# API Endpoints

## Upload Logs

POST

```
/api/audit/upload
```

Body

```json
[
  {
    "actor": "priya.nair@company.com",
    "role": "admin",
    "action": "DELETE_USER",
    "resource": "/api/users/334",
    "status": "SUCCESS",
    "timestamp": "2026-07-21T10:20:00Z"
  }
]
```

---

## Get Logs

GET

```
/api/audit/logs
```

Supports

- page
- limit
- search
- status
- role
- action
- sortBy
- sortOrder

Example

```
/api/audit/logs?page=1&limit=10&search=admin
```

---

## Dashboard Statistics

GET

```
/api/audit/stats
```

---

# Deployment

## Frontend

Hosted on Vercel

```
https://system-audit-log-dashboard.vercel.app/
```

Environment Variable

```env
VITE_API_URL=https://system-audit-log-dashboard.onrender.com
```

---

## Backend

Hosted on Render

Environment Variable

```env
MONGODB_URI=your_mongodb_connection_string
```

---

# Technical Decisions

## Why React?

React provides a component-based architecture that makes the UI modular, reusable, and easier to maintain. It also offers efficient rendering through the Virtual DOM.

---

## Why Vite?

Vite was selected because it provides:

- Faster startup
- Instant Hot Module Replacement
- Optimized production builds
- Better developer experience than Create React App

---

## Why Express.js?

Express is lightweight and ideal for building REST APIs. Its middleware support simplifies routing, request handling, and validation.

---

## Why MongoDB?

Audit logs have a flexible schema and can grow rapidly. MongoDB is well suited for storing large collections of JSON documents without requiring rigid relational schemas.

---

## Why Mongoose?

Mongoose provides:

- Schema validation
- Model abstraction
- Cleaner database interactions
- Middleware support

---

## Why Server-Side Pagination?

Instead of sending every audit log to the browser, pagination retrieves only the required records.

Benefits:

- Faster page loading
- Reduced network usage
- Lower browser memory consumption
- Better scalability

---

## Why Server-Side Search?

Searching on the server avoids loading the entire dataset into the browser, making searches efficient even with thousands of records.

---

## Why Server-Side Sorting?

Sorting in MongoDB ensures that only correctly ordered records are returned to the client, reducing browser workload and improving scalability.

---

## Why Material UI?

Material UI provides:

- Responsive components
- Accessibility
- Consistent design
- Faster UI development

---

## Why Axios?

Axios simplifies HTTP communication with:

- Automatic JSON handling
- Better error handling
- Request configuration
- Interceptors

---

## Why Separate Service Layer?

The project follows a layered architecture:

```
Routes
   ↓
Controllers
   ↓
Services
   ↓
Models
   ↓
MongoDB
```

Benefits:

- Better separation of concerns
- Easier testing
- Improved maintainability
- Cleaner business logic

---

## Why Environment Variables?

Sensitive information such as MongoDB connection strings and API URLs are stored in environment variables instead of source code.

This improves security and simplifies deployment across environments.

---

# Future Improvements

- Authentication and authorization
- JWT-based login
- CSV upload support
- Export logs to CSV/PDF
- Real-time audit monitoring
- Advanced analytics dashboard
- Date range filters
- Dark mode
- Docker support
- Unit and integration tests

---

# Author

**Visuvanathan K**

B.Tech Computer Science and Engineering


# License

This project is licensed under the MIT License.
