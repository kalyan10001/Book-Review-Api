# 📚 Book Review REST API

A RESTful API built using **Node.js**, **Express.js**, and **MongoDB** that allows users to register, log in, add books, write reviews, and search books.

---

## 🔧 Features

- ✅ JWT-based user authentication
- 📚 Add, view, and search books (pagination, filters)
- ⭐ One review per user per book with rating & comment
- 🧼 Clean, modular code structure
- 🔐 Secure protected routes using middleware

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- JSON Web Token (JWT)
- dotenv

---

---

## 📌 API Endpoints

### 🔐 Authentication

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| POST   | `/api/auth/signup` | Register a new user     |
| POST   | `/api/auth/login`  | Login and receive token |

### 📘 Books

| Method | Endpoint                    | Description                                         |
|--------|-----------------------------|-----------------------------------------------------|
| POST   | `/api/books`                | Add new book *(auth required)*                     |
| GET    | `/api/books`                | Get all books (pagination, filters by author/genre)|
| GET    | `/api/books/:id`            | Get book by ID with reviews + average rating       |
| GET    | `/api/books/search?q=...`   | Search books by title/author (case-insensitive)    |

### 📝 Reviews

| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| POST   | `/api/books/:id/reviews`    | Submit a review *(auth required)*    |
| PUT    | `/api/reviews/:id`          | Update your own review *(auth)*      |
| DELETE | `/api/reviews/:id`          | Delete your own review *(auth)*      |

---

---

## ▶️ How to Run

```bash
git clone https://github.com/your-username/Book-Review-Api.git
cd Book-Review-Api/backend
npm install
npm run start
