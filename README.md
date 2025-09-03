# 📝 Task Management API

A backend API for a **Task Management (To-Do) Application**, built with **Node.js, Express, and MongoDB**.  
Users can register, login, and manage their tasks by categorizing them, setting deadlines, and marking them complete or incomplete.

---

## 🚀 Features
- 🔑 User registration & login with JWT authentication
- 👤 User-specific task management
- 📝 CRUD operations for tasks (create, read, update, delete)
- 📂 Task categorization (work, personal, shopping, other)
- ⏳ Deadlines for tasks (with validation that they can’t be in the past)
- ✅ Mark tasks as complete/incomplete
- 🛡️ Protected routes with authentication middleware

---

## 🛠️ Tech Stack
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **JWT Authentication**
- **bcrypt.js** for password hashing
- **morgan** for request logging
- **dotenv** for environment variables

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/<your-username>/task-backend.git

# Navigate into the folder
cd task-backend

# Install dependencies
npm install
🔑 Environment Variables

Create a .env file in the project root with:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

▶️ Run the Server
# Development
npm run dev

# Production
npm start


Server runs on: http://localhost:5000

📌 API Endpoints
Auth Routes

POST /api/auth/register → Register a new user

POST /api/auth/login → Login and get token

Task Routes (Protected)

GET /api/tasks → Get all tasks for logged-in user

POST /api/tasks → Create a new task

GET /api/tasks/:id → Get a single task

PUT /api/tasks/:id → Update a task

DELETE /api/tasks/:id → Delete a task

PATCH /api/tasks/:id/complete → Toggle task completion

GET /api/tasks/category/:category → Get tasks by category

✅ Future Improvements

🌍 Add role-based access control (admin/users)

📧 Email notifications for deadlines

🔄 Password reset functionality

📱 Connect to frontend (React or mobile app)

👨‍💻 Author

Everestus Ezeigbo
