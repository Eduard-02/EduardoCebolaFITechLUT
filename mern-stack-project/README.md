# Goalsetter API – Backend

This is the backend API for the Goalsetter MERN app. It handles user authentication, goal CRUD operations, and communicates with MongoDB using Mongoose.

## Features

- JWT-based authentication
- RESTful API for goal management
- MongoDB with Mongoose
- Express server with error handling middleware

## Setup

### Environment Variables

Create a `.env` file in the root directory with the following:

- MONGO_URI=your_mongodb_uri
- JWT_SECRET=your_secret_key
- PORT=8000

### Install Dependencies

```bash
npm install
```

## Run the Server
```bash
npm run server
```
- API will run on http://localhost:5000
- Nodemon is enabled for development

## API Endpoints

- POST /api/users/register – Register new user
- POST /api/users/login – Login and get token
- GET /api/goals – Get user goals (protected)
- POST /api/goals – Create a goal (protected)
- PUT /api/goals/:id – Update a goal (protected)
- DELETE /api/goals/:id – Delete a goal (protected)

## Stack Used
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
