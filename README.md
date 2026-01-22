# Task Manager Web Application

Simple task manager REST API built with Node.js.
This project is part of a technical test and focuses on backend REST API design and documentation.

## Tech stack
- Backend: Node.js (REST API)
- Frontend: Free choice
- Database: Relational (MySQL)

## API Endpoints
Method    Endpoint    Deskripsi
GET        /tasks      Ambil semua task
POST       /tasks      Tambah task
PUT        /tasks/:id  Update task
DELETE     /tasks/:id  Hapus task

Authentication
Method    Endpoint    Deskripsi
POST      /login      Login user

## Database Design
Tabel Users
Field      Type
id          INT (PK)
username    VARCHAR
password    VARCHAR

Tabel tasks
Field        Type
id            INT (PK)
title         VARCHAR
description   TEXT
status        ENUM(todo, in-progress, done)
due_date      DATE
user_id       INT (FK)

Tabel activity_logs
Field        Type
id            INT (PK)
activity      TEXT
created_at    TIMESTAMP

## Notes
Focus on Backend REST API design.
Frontend not implemented yet.
Database schema and authentication are described conceptually.

## 1.Deskripsi Aplikasi
Aplikasi Task Manager adalah aplikasi web sederhana untuk internal tim yang digunakan untuk mengelola daftar pekerjaan (task), mulai dari membuat, mengubah, menghapus, dan melihat status task.

## 2. Desain Arsitektur Aplikasi
Arsitektur aplikasi menggunakan client-server architecture:
Frontend (Web/SPA)
      |
      | HTTP Request (REST API)
      |
Backend (Node.js - Express)
      |
      |
Database (Relational DB)
Penjelasan:
- Frontend mengirim request HTTP ke backend
- Backend menangani logika bisnis, autentikasi, dan validasi data.
- Database menyimpan data user, task, dan log aktivitas

## 3. Desain Model Data (Schema Database)
Model data menggunakan database relasional yang terdiri dari tabel users, tasks, dan activity_logs untuk mendukung fitur autentikasi, manajemen task, dan pencatatan aktivitas.

## 4. Desain Endpoint REST API
Endpoint REST API dirancang menggunakan prinsip RESTful:
- Resource-based URL
- HTTP method sesuai aksi (GET, POST, PUT, DELETE)
- Data dikirim dan diterima dalam format JSON

## 5. Keamanan API
- Menggunakan authentication sederhana berbasis token
- Setiap request ke endpoint task harus menyertakan token
- Aktivitas penting (create, update, delete) dicatat ke tabel activity_logs

## 6. Pembagian penggunaan Node.js dan Go
- Node.js digunakan untuk REST API karena cepat untuk prototyping dan banyak library pendukung
- Go cocok untuk service dengan performa tinggi dan concurrency besar, namun untuk aplikasi sederhana ini Node.js lebih efisien

## 7. Strategi Testing
Testing dilakukan pada endpoint utama:
- Login
- Create task
- Update status task
Testing dapat dilakukan menggunakan:
- Postman
- Curl

## 8. Cara menjalankan aplikasi
npm install
node server.js

Noted:
This implementation focuses on backend REST API design and documentation due to limited environment setup during the test.
