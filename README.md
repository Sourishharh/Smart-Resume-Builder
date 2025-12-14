# Smart-Resume-Builder

Smart Resume Builder is a feature-rich full-stack MERN web application designed to help users create, customize, and manage professional, ATS-optimized resumes efficiently. The platform provides a real-time editing and preview experience, AI-powered content suggestions to improve resume quality, customizable templates, secure user authentication, and controlled resume sharing through public or private links, ensuring both flexibility and privacy in resume management.

---

## 🚀 Features

* AI-powered resume suggestions using **Gemini API**
* Real-time resume preview while editing
* Customizable, export-ready resume templates
* Download resumes as **PDF**
* Share resumes via a **unique public link**
* Control resume visibility with **Public / Private** access settings
* Secure authentication with **JWT**
* Protected routes and user-specific resume storage
* Responsive and modern UI with **React & Tailwind CSS**

---

## 🛠 Tech Stack

**Frontend**

* React.js
* Redux Toolkit
* Tailwind CSS

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**Authentication**

* JWT (JSON Web Tokens)

**AI Integration**

* Gemini API

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Sourishharh/Smart-Resume-Builder.git
cd Smart-Resume-Builder
```

### 2️⃣ Backend setup

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_key
GEMINI_API_KEY=your_gemini_api_key
GEMINI_BASE_URL=your_gemini_base_url
GEMINI_MODEL=your_gemini_model
```

Start the backend server:

```bash
npm run dev
```

---

### 3️⃣ Frontend setup

```bash
cd ../Frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🧪 Demo Flow

1. Register or log in securely
2. Create a new resume
3. Fill in personal, education, experience, and skills details
4. Generate AI-powered descriptions
5. Preview resume in real time
6. Download resume as a PDF

---

## 📌 Technical Highlights

* Designed and implemented end-to-end **MERN stack architecture** following industry best practices
* Developed secure **authentication and authorization** workflows using JWT
* Built scalable **REST APIs** with proper validation, error handling, and middleware
* Integrated **AI-driven content generation** to enhance user productivity
* Applied **state management with Redux Toolkit** for predictable application behavior
* Improved application performance through component optimization and clean code structure
* Ensured responsive design and cross-device compatibility

---

## 🎯 Use Case

This project demonstrates practical **full-stack development**, AI integration, and clean architecture—ideal for showcasing MERN stack proficiency and real-world problem solving.
