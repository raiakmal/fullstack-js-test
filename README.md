# Product Management Mini App

A simple fullstack product management app for TPT Digital Full Stack Developer Intern technical test.

---

## 🚀 Features

- Product list (table)
- Add, edit, delete product
- Product active/inactive status
- Loading & error states
- Responsive, clean UI (Tailwind CSS v4)
- REST API (Express + MongoDB Atlas)
- Unit tests (Jest + Supertest)

---

## 🛠️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/raiakmal/fullstack-js-test
cd fullstack-js-test
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

#### Environment Variables

Buat file `.env` di folder backend:

```
MONGODB_URI=<mongodb_connection_string>
PORT=5000
```

Contoh:

```
MONGODB_URI=mongodb+srv://user:password@cluster0.mongodb.net/productdb?retryWrites=true&w=majority
PORT=5000
```

#### Jalankan Backend

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

#### Environment Variables

Buat file `.env` di folder frontend:

```
VITE_API_URL=http://localhost:5000/api
```

#### Jalankan Frontend

```bash
npm run dev
```

---

## 🧪 Testing

### Backend Unit Test

```bash
cd backend
npm test
```

---

## 📸 Screenshots

### Dashboard

![Dashboard](frontend/public/screenshots/dashboard.png)

### Form Produk

![Form Produk](frontend/public/screenshots/form.png)

### 🎥 Demo Video

[![Watch the demo](https://img.youtube.com/vi/ItAT3tod35g/0.jpg)](https://youtu.be/ItAT3tod35g)

---

## ⚠️ Tradeoffs & Notes

- **Backend menggunakan Express (Node.js)**, bukan Python (Django/Flask) atau Go, sesuai dengan pengalaman utama saya. Jika diharuskan menggunakan stack lain, saya siap belajar dan menyesuaikan.
- Validasi backend menggunakan mongoose schema, belum ada validasi lanjutan (misal: custom middleware).
- Unit test hanya untuk endpoint utama (POST, GET, validasi). Belum semua endpoint diuji karena keterbatasan waktu.
- Error handling di frontend sudah menggunakan toast dan inline error, namun belum ada notifikasi global.
- Deployment belum dilakukan, aplikasi hanya diuji secara lokal.

---

## 🙏 Author

- Nama: Muhammad Rai Akmal
- Untuk pertanyaan, silakan kontak via email/LinkedIn.
