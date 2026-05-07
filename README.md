# Product Management Mini App

Aplikasi fullstack sederhana untuk manajemen produk yang dibuat sebagai technical test Full Stack Developer Intern di TPT Digital.

---

# 🚀 Fitur

- Menampilkan daftar produk
- Menambah produk
- Mengedit produk
- Menghapus produk
- Status produk aktif / nonaktif
- Tampilan modern dan responsif
- REST API menggunakan Express.js
- Integrasi MongoDB Atlas
- Unit testing menggunakan Jest & Supertest
- Loading dan error handling

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS v4
- Axios

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Jest
- Supertest

---

# 📦 Cara Menjalankan Project

## 1. Clone Repository

```bash
git clone https://github.com/raiakmal/fullstack-js-test
cd fullstack-js-test
```

---

# ⚙️ Setup Backend

## Install Dependency

```bash
cd backend
npm install
```

---

## Buat File `.env`

Buat file `.env` di dalam folder `backend`:

```env
MONGODB_URI=mongodb://username:password@host1:27017,host2:27017,host3:27017/productdb?replicaSet=atlas-xxxxx-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority
PORT=5000
```

Contoh:

```env
MONGODB_URI=mongodb://myuser:mypassword@ac-xxxxx-shard-00-00.mongodb.net:27017,ac-xxxxx-shard-00-01.mongodb.net:27017,ac-xxxxx-shard-00-02.mongodb.net:27017/productdb?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin&retryWrites=true&w=majority
PORT=5000
```

> Gunakan format MongoDB connection string (`mongodb://`) dan bukan `mongodb+srv://`.

---

## Menjalankan Backend

```bash
npm run dev
```

Backend akan berjalan di:

```txt
http://localhost:5000
```

---

# 🎨 Setup Frontend

## Install Dependency

```bash
cd frontend
npm install
```

---

## Buat File `.env`

Buat file `.env` di dalam folder `frontend`:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Menjalankan Frontend

```bash
npm run dev
```

Frontend akan berjalan di:

```txt
http://localhost:5173
```

---

# 🧪 Testing

## Backend Unit Test

Buat file `.env.test` di dalam folder `backend`:

```env
MONGODB_URI=mongodb://username:password@host1:27017,host2:27017,host3:27017/product_test?replicaSet=atlas-xxxxx-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority
```

Kemudian jalankan:

```bash
cd backend
npm test
```

---

# 📸 Screenshot

## Dashboard

![Dashboard](frontend/public/screenshots/dashboard.png)

---

## Form Produk

![Form Produk](frontend/public/screenshots/form.png)

---

# 🎥 Demo Video

[![Watch the demo](https://img.youtube.com/vi/ItAT3tod35g/0.jpg)](https://youtu.be/ItAT3tod35g)

---

# ⚠️ Tradeoffs & Catatan

- Backend menggunakan Express.js (Node.js) sesuai pengalaman utama yang saya miliki.
- Validasi backend masih menggunakan validasi bawaan Mongoose Schema.
- Unit test saat ini hanya mencakup endpoint utama seperti GET, POST, dan validasi data.
- Error handling frontend sudah mencakup loading state dan feedback error sederhana.
- Aplikasi saat ini hanya diuji secara lokal dan belum dilakukan deployment.

---

# 🙏 Author

- Muhammad Rai Akmal
- Mahasiswa Informatika Universitas Siliwangi

Untuk pertanyaan atau kerja sama, silakan hubungi melalui LinkedIn atau email.
