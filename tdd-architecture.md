
# Struktur Proyek Express.js dengan Arsitektur TDD

Berikut adalah struktur direktori yang bisa digunakan untuk membuat aplikasi Express.js dengan arsitektur *Test-Driven Development* (TDD). Struktur ini membantu menjaga kode tetap rapi, modular, dan terorganisir untuk mendukung TDD.

```plaintext
my-express-app/
├── src/                   # Folder utama untuk kode aplikasi
│   ├── controllers/       # Logika untuk menangani permintaan dan mengelola respon
│   │   └── userController.js
│   ├── models/            # Model data atau ORM (Object-Relational Mapping)
│   │   └── userModel.js
│   ├── routes/            # Rute aplikasi (memetakan URL ke controller)
│   │   └── userRoutes.js
│   ├── services/          # Logika bisnis yang dapat digunakan kembali
│   │   └── userService.js
│   ├── config/            # Konfigurasi (misalnya koneksi database, pengaturan lingkungan)
│   │   └── dbConfig.js
│   ├── utils/             # Utilitas atau fungsi pembantu
│   │   └── helpers.js
│   ├── app.js             # Menginisialisasi aplikasi Express
│   └── server.js          # Mengatur server untuk aplikasi
│
├── tests/                 # Folder untuk pengujian aplikasi
│   ├── controllers/       # Pengujian untuk controller
│   │   └── userController.test.js
│   ├── models/            # Pengujian untuk model
│   │   └── userModel.test.js
│   ├── routes/            # Pengujian untuk rute
│   │   └── userRoutes.test.js
│   ├── services/          # Pengujian untuk layanan
│   │   └── userService.test.js
│   └── setup.js           # Pengaturan awal untuk pengujian (misalnya, konfigurasi database testing)
│
├── .env                   # Variabel lingkungan (konfigurasi server, database, dll.)
├── .env.test              # Variabel lingkungan untuk lingkungan pengujian
├── .gitignore             # Daftar file dan direktori yang akan diabaikan oleh git
├── jest.config.js         # Konfigurasi Jest untuk pengujian
├── package.json           # Informasi proyek dan dependensi
└── README.md              # Dokumentasi proyek
```

## Penjelasan Struktur

### `src/`
Folder utama yang berisi seluruh kode aplikasi.

- **`controllers/`**: Berisi *controller* yang menangani logika permintaan dan respons.
- **`models/`**: Berisi model yang biasanya menggunakan ORM seperti Sequelize atau Mongoose untuk berinteraksi dengan database.
- **`routes/`**: Berisi pengaturan rute untuk aplikasi, memetakan URL ke *controller* yang tepat.
- **`services/`**: Menampung logika bisnis yang dapat digunakan kembali. Ini memisahkan logika bisnis dari *controller* agar lebih modular.
- **`config/`**: Menyimpan konfigurasi aplikasi, seperti pengaturan koneksi database.
- **`utils/`**: Berisi fungsi pembantu atau utilitas yang dapat digunakan di seluruh aplikasi.
- **`app.js`**: Berfungsi untuk menginisialisasi aplikasi Express, mengatur middleware, dan menghubungkan *routes*.
- **`server.js`**: File utama yang menjalankan server Express. Biasanya berisi kode untuk menjalankan `app.listen`.

### `tests/`
Folder khusus untuk pengujian aplikasi, dengan struktur mirroring dari `src/` agar mudah diakses dan diorganisir.

- **`controllers/`**: Berisi pengujian untuk setiap *controller* di aplikasi.
- **`models/`**: Berisi pengujian untuk setiap model (biasanya melibatkan interaksi dengan database).
- **`routes/`**: Berisi pengujian untuk rute yang menguji endpoint.
- **`services/`**: Berisi pengujian untuk logika di dalam layanan.
- **`setup.js`**: Pengaturan dasar yang mungkin diperlukan sebelum menjalankan tes, seperti koneksi database testing.

### File Konfigurasi

- **`.env`** dan **`.env.test`**: File variabel lingkungan untuk konfigurasi khusus. `.env.test` digunakan dalam pengujian, misalnya untuk database terpisah.
- **`jest.config.js`**: Konfigurasi untuk Jest, alat pengujian yang sering digunakan dalam TDD untuk JavaScript/Node.js.
- **`package.json`**: Berisi metadata proyek serta daftar *dependencies* dan *devDependencies*, termasuk `jest` untuk pengujian.

## Tips Implementasi TDD

- **Buat Pengujian Terlebih Dahulu**: Sebelum mengembangkan fungsionalitas, tulis pengujian unit yang menguji setiap bagian logika utama.
- **Mulai dengan Endpoint Sederhana**: Mulailah dengan endpoint sederhana dan pastikan pengujian lulus, kemudian lanjutkan ke logika yang lebih kompleks.
- **Gunakan Mocks dan Stubs**: Untuk pengujian yang tidak bergantung pada database atau layanan eksternal, gunakan *mocking* agar pengujian lebih cepat dan lebih andal.
- **Jalankan Pengujian Secara Otomatis**: Manfaatkan perintah seperti `npm test` untuk menjalankan pengujian dan lihat hasilnya di setiap perubahan kode.

Struktur ini membantu memastikan bahwa proyek Anda terorganisir, mudah diuji, dan mengikuti praktik terbaik TDD.
