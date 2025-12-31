# Contacts Backend API

A RESTful API for managing personal contacts with JWT authentication. Built with Node.js, Express, and MongoDB.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)

## Features

- 🔐 JWT authentication with bcrypt password hashing
- 👤 User registration and login
- 📋 Full CRUD operations for contacts
- 🔒 Private contact lists (users can only access their own data)
- ⚡ Centralized error handling
- 🕒 Auto-generated timestamps

## Tech Stack

- **Backend:** Node.js, Express v5.2.1
- **Database:** MongoDB with Mongoose v9.1.1
- **Authentication:** JWT, bcrypt
- **Dev Tools:** nodemon, dotenv

## Installation

1. **Clone and install**
   ```bash
   git clone https://github.com/your-username/mycontacts-backend.git
   cd mycontacts-backend
   npm install
   ```

2. **Configure environment**
   
   Create `.env` file:
   ```env
   PORT=4001
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

3. **Run the application**
   ```bash
   npm run dev  # Development mode
   npm start    # Production mode
   ```

Server runs on `http://localhost:4001`

## API Endpoints

### Authentication
All contact endpoints require `Authorization: Bearer <token>` header.

### User Routes

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/users/register` | Public | Register new user |
| POST | `/api/users/login` | Public | Login and get JWT token |
| GET | `/api/users/current` | Private | Get current user info |

**Register/Login Request:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Login Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Contact Routes

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/contacts` | Private | Get all user contacts |
| POST | `/api/contacts` | Private | Create new contact |
| GET | `/api/contacts/:id` | Private | Get contact by ID |
| PUT | `/api/contacts/:id` | Private | Update contact |
| DELETE | `/api/contacts/:id` | Private | Delete contact |

**Contact Request/Response:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "1234567890"
}
```

## Database Schemas

**User Model:**
- username (String, required)
- email (String, required, unique)
- password (String, required, hashed)

**Contact Model:**
- user_id (ObjectId, ref: User)
- name (String, required)
- email (String, required)
- phone (String, required)

Both models include auto-generated `createdAt` and `updatedAt` timestamps.

## Project Structure

```
mycontacts-backend/
├── configs/
│   └── dbConnection.js
├── controllers/
│   ├── contactController.js
│   └── userController.js
├── middleware/
│   ├── errorHandle.js
│   └── validateTokenHandler.js
├── models/
│   ├── contactModel.js
│   └── userModel.js
├── routes/
│   ├── contactRoutes.js
│   └── userRoutes.js
├── constants.js
├── server.js
└── package.json
```

## Error Responses

Standard error format:
```json
{
  "title": "Error Type",
  "message": "Detailed error message"
}
```

**Status Codes:** 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Server Error)

## Testing

Use Postman, Thunder Client, or cURL:

```bash
# Register
curl -X POST http://localhost:4001/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"test123"}'

# Login
curl -X POST http://localhost:4001/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'

# Get contacts
curl -X GET http://localhost:4001/api/contacts \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## License

ISC License

---
