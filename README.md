# Task Manager Web Application

Simple task manager web application

## Tech stack
- Backend: Node.js (REST API)
- Frontend: Free choice
- Database: Relational (MySQL)

## API Endpoints
- GET /tasks
- POST /tasks

## Database Design
Table: tasks
- id
- title
- description
- status
- due_date

## Notes
Focus on Backend REST API design.
Frontend not implemented yet.

## How to run (Optional)
1. Install Node.js
2. npm install
3. node server.js

Note: Setup environment belum dijalankan pada test ini

Simple Task Manager REST API built with Node.js.
This project is part of a technical test.

## 1.Deskripsi Aplikasi
Aplikasi Task Manager adalah aplikasi web sederhana untuk internal tim yang digunakan untuk mengelola daftar pekerjaan (task), mulai dari membuat, mengubah, menghapus, dan melihat status task.
Aplikasi ini dibangun menggunakan:
- Backend: Node.js (Express)
- Frontend: SPA sederhana (konsep)
- Database: Relasional (MySQL/SQLite)

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

## 4. Desain Endpoint REST API
Authentication
Method    Endpoint    Deskripsi
POST      /login      Login user

Task
Method    Endpoint    Deskripsi
GET        /tasks      Ambil semua task
POST       /tasks      Tambah task
PUT        /tasks/:id  Update task
DELETE     /tasks/:id  Hapus task

## 5. Keamanan API
- Menggunakan authentication sederhana berbasis token
- Setiap request ke endpoint task harus menyertakan token
- Aktivitas penting (create, update, delete) dicatat ke tabel log

## 6. Pembagian penggunaan Node.js dan Go
- Node.js digunakan untuk REST API karena cepat untuk prototyping dan banyak library pendukung
- Go cocok untuk service dengan performa tinggi, namun untuk aplikasi sederhana ini Node.js lebih efisien,

## 7. Strategi Testing
Testing dilakukan pada endpoint utama:
- Login
- Create task
- Update status task
Testing dapat dilakukan menggunakan:
- Postman
- Curl

## 8. Cara menjalankan aplikasi
node server.js
