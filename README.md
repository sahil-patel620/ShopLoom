# 🛒 E-Commerce Web Application

A full-stack eCommerce web application built using React and Spring Boot. This project demonstrates a scalable architecture with seamless frontend-backend integration, dynamic product management, and a responsive user interface.

---

## 🚀 Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* CSS / SCSS
* Axios

### Backend

* Spring Boot
* REST APIs
* Spring Data JPA

### Database

* MySQL

### Tools & Platforms

* Git & GitHub
* Postman
* Vercel (Frontend Deployment)
* (Add backend hosting if used)

---

## ✨ Features

* 🛍️ Browse and view products
* 🔍 Search and filter products
* 🛒 Add to cart functionality
* 🔄 Dynamic data fetching from backend
* 📱 Fully responsive design
* ⚡ Fast and smooth user experience

---

## 📸 Screenshots

<!-- Add your project screenshots here -->

<!-- Example:
![Home Page](./screenshots/home.png)
![Product Page](./screenshots/product.png)
-->

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Setup Backend (Spring Boot)

```bash
cd backend
```

* Configure `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

* Run the backend:

```bash
mvn spring-boot:run
```

Backend will start on:

```
http://localhost:8080
```

---

### 3️⃣ Setup Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend will start on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints (Sample)

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /api/products      | Get all products  |
| GET    | /api/products/{id} | Get product by ID |
| POST   | /api/cart          | Add item to cart  |

---

## 📁 Project Structure

```
project-root/
│
├── frontend/        # React App
├── backend/         # Spring Boot App
├── screenshots/     # Images for README
└── README.md
```

---

## 💡 Future Enhancements

* 🔐 User Authentication (JWT)
* 💳 Payment Integration
* 🧑‍💼 Admin Dashboard
* 📦 Order Management System

---

## 🙌 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📬 Contact

* GitHub: https://github.com/sahil-patel620
* Email: [sp453771@gmail.com](mailto:sp453771@gmail.com)

---

⭐ If you like this project, give it a star!
