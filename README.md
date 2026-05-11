# 🚀 GenAI Interview Assistant (Full Stack)

An AI-powered full stack web application that helps users prepare for interviews by analyzing their resume and job description to generate personalized interview questions, skill gap analysis, and a structured preparation roadmap.

---

## 🌐 Live Demo

Link -: https://genai-interview-assistant.vercel.app/

---

## 📸 Features

* 🤖 AI-generated technical & behavioral interview questions
* 📊 Resume vs Job Description match score
* 📉 Skill gap analysis
* 🗓️ Day-wise preparation roadmap
* 📄 Resume-based PDF generation
* 🔐 User authentication (JWT based)
* ⚡ Fast and responsive UI

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React (Vite)
* React Router
* Axios
* SCSS

### 🔹 Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* Google Gemini API
* Puppeteer (PDF generation)
* JWT Authentication
* Multer (file uploads)

---

## ⚙️ Environment Variables

### 🔹 Frontend (`/frontend/.env`)

.env
VITE_API_URL=http://localhost:3000


### 🔹 Backend (`/backend/.env`)

.env

GOOGLE_GENAI_API_KEY=your_key_here
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
FRONTEND_URL=http://localhost:5173


---

## 💻 Local Setup

### 1️⃣ Clone the repository


git clone https://github.com/your-username/genai-interview-assistant.git
cd genai-interview-assistant

---

## 🔹 Frontend Setup

cd frontend
npm install


Create `.env` file:

.env

VITE_API_URL=http://localhost:3000


Run frontend:


npm run dev


---

## 🔹 Backend Setup


cd backend
npm install


Create `.env` file:

.env

GOOGLE_GENAI_API_KEY=your_key_here
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
FRONTEND_URL=http://localhost:5173


Run backend:

npm run dev

---

## 🚀 Deployment

### 🔹 Frontend Deployment

Deploy frontend using Netlify:

* Connect GitHub repo
* Build command:

  npm run build

* Publish directory:

  dist

* Add environment variable:

  VITE_API_URL=https://your-backend-url.onrender.com


---

### 🔹 Backend Deployment

Deploy backend using Render:

* Create new Web Service

* Connect GitHub repo

* Add environment variables:

  * GOOGLE_GENAI_API_KEY
  * MONGODB_URI
  * JWT_SECRET
  * FRONTEND_URL

* Start command:

  npm start


---

## 🔗 API Endpoints

| Method | Route                         | Description               |
| ------ | ----------------------------- | ------------------------- |
| POST   | /api/auth/register            | Register user             |
| POST   | /api/auth/login               | Login user                |
| POST   | /api/interview/               | Generate interview report |
| GET    | /api/interview/               | Get all reports           |
| GET    | /api/interview/report/:id     | Get report by ID          |
| POST   | /api/interview/resume/pdf/:id | Generate resume PDF       |
| DELETE | /api/interview/report/:id     | Delete report             |

---

## ⚠️ Important Notes

* Always use HTTPS in production
* Do not expose API keys in frontend
* Add `_redirects` file in frontend (Netlify):

/*    /index.html   200


* Ensure backend URL is correct in frontend `.env`
* Configure CORS properly in backend

---

## 📁 Project Structure

```
genai-interview-assistant/
│
├── frontend/   # React frontend
├── backend/    # Node.js backend
└── README.md   # Main documentation
```

---

## 👨‍💻 Author

**Amit Thakur**

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

---

## 🚀 Future Improvements

* Dark mode UI
* Interview analytics dashboard
* Multi-language support
* Real-time mock interviews

---

## 🧠 Note

This project demonstrates full stack development skills including frontend, backend, API integration, authentication, and AI-based features.
