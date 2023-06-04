
# Ticket System

 Aplikasi ini bertujuan untuk menyediakan sistem tiket yang memungkinkan pengguna untuk mengajukan permintaan, keluhan, atau masalah teknis terkait dengan aplikasi. Tim teknis dapat mengelola tiket yang masuk dan memantau serta menyelesaikan masalah dengan lebih efisien

## Features

- Pengguna dapat mengajukan tiket untuk permintaan, keluhan, atau masalah teknis melalui aplikasi.
- Setiap tiket akan diberikan nomor unik sebagai identifikasi.
- Tim teknis dapat melihat daftar tiket yang masuk dan mengelola setiap permintaan dengan mengubah status tiket (admin).
- Status tiket dapat berupa "menunggu tindakan", "sedang dalam proses", "sedang direspon", atau "telah selesai".
- Pengguna dapat melacak status permintaan mereka dan mendapatkan pembaruan dari tim teknis melalui aplikasi.
- Prioritas tiket diterapkan untuk memberikan perhatian lebih cepat kepada permintaan mendesak atau masalah kritis dengan prioritas ['Critical', 'High', 'Medium', 'Low']


## Tech Stack

**Backend:** Express.js, NodeJs

**Authentication:** JSON Web Tokens (JWT)

**Database:** MongoDB

**Unit Test:** Jest

**Logger:** Morgan, Winston



## Installation

1. Clone respositori ini:

```bash
  git clone
```
2. Pindah ke direktori proyek:

```bash
  cd ticket-system
```
3. Instal dependencies:

```bash
  npm install
```
4. Konfigurasi
- Salin file .env.example ke .env dan atur konfigurasi yang diperlukan, seperti koneksi database dan kunci rahasia JWT.

5. Jalankan aplikasi:

```bash
  npm run start
```

Secara default aplikasi akan dijalankan di `http://localhost:500`
## Authors

- [@hikio-17](https://hikio-17.github.io/)


## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) [2023] [hikio-17]
