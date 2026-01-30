# 🍳 Chef Claude – AI Recipe Generator

A simple, AI-powered React web app that generates cooking recipes based on the ingredients you have. Users can add ingredients one by one and let a free AI model suggest a complete recipe with step-by-step instructions.

This project demonstrates:
- React state management
- Environment variable security
- API integration with a free AI model (HuggingFace)
- Clean UI and component-based design

---

## 🚀 Features

- ➕ Add multiple ingredients dynamically  
- 🤖 Generate recipes using AI  
- ⏳ Loading state while AI is "thinking"  
- 🔐 Secure API key handling using `.env`  
- 🎨 Simple, clean user interface  

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite  
- **AI Model:** HuggingFace Inference API (Mixtral / Mistral)  
- **Styling:** CSS  
- **Build Tool:** Vite  

---

## 🧠 How It Works

- User adds ingredients  
- User clicks **"Get a recipe"**  
- React sends ingredients to HuggingFace API  
- AI generates recipe  
- Recipe is displayed on screen  


---

## 📁 Project Structure

```bash
chef_claude/
├── src/
│   ├── components/
│   │   ├── form.jsx
│   │   └── header.jsx
│   ├── ai.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── .env
├── .gitignore
├── index.html
├── package.json
└── vite.config.js

