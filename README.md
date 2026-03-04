# 🎉 Synetr

> Smart Event Planning. Seamless Collaboration.

Synetr is a modern event planning platform that simplifies how people organize, manage, and collaborate on events — from small gatherings to large-scale experiences.

Planning events is chaotic.
Synetr makes it structured, collaborative, and stress-free.

---

## 🏆 Hackathon Submission

Event planning today is fragmented.

People struggle with:
- Scattered communication (WhatsApp, emails, calls)
- Budget mismanagement
- Vendor coordination issues
- Task tracking confusion
- Guest list management headaches

Synetr centralizes everything into one intelligent event planning system.

---

## 💡 What Synetr Solves

✅ Centralized event dashboard  
✅ Collaborative planning (multi-user access)  
✅ Budget tracking & expense management  
✅ Vendor management  
✅ Task assignment & progress tracking  
✅ Guest management  

No more spreadsheets.
No more scattered chats.
No more confusion.

---

## ⚙️ How It Works

1. A user creates an event.
2. They invite collaborators (co-planners).
3. Tasks are assigned and tracked.
4. Budgets are allocated and monitored.
5. Vendors are managed within the system.
6. Guests are tracked in one unified dashboard.

Everything lives in one organized workspace.

---

## 🏗️ Architecture

### 🔹 Frontend
- React (Vite)
- TailwindCSS
- shadcn/ui
- Responsive dashboard UI

### 🔹 Backend
- Node.js
- REST API
- Authentication (JWT)
- Database (PostgreSQL / MongoDB)

### 🔹 Core Modules
- Event Management
- Budget Engine
- Task Manager
- Vendor System
- Guest List Manager

---

## 🛠️ Tech Stack

Frontend:
- React + Vite
- TailwindCSS
- shadcn/ui
- TypeScript

Backend:
- Node.js
- Express
- TypeScript

Contracts:
- Stellar (Soroban)

---

## 📦 Project Structure

```
synetr/
├── frontend/     # React + Vite + TypeScript + Tailwind + shadcn
├── backend/      # Node + Express + TypeScript
├── contracts/    # Stellar (Soroban) smart contracts
└── README.md
```

### Contracts (Stellar)

Smart contracts are built on **Stellar** using **Soroban** (Rust → WASM). See [contracts/README.md](contracts/README.md) for setup and deployment.

---

## 🚀 Running Locally

### Clone repository

```bash
git clone https://github.com/Synetr/Synetr.git
cd synetr
```

### Frontend (React + Vite + TypeScript + Tailwind + shadcn)

```bash
cd frontend
npm install
npm run dev
```

Runs at `http://localhost:5173`.

### Backend (Node + Express + TypeScript)

```bash
cd backend
npm install
npm run dev
```

API runs at `http://localhost:3001` (e.g. `GET /health`, `GET /api`).