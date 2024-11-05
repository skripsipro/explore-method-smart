
# Algoritma Seleksi Karyawan Berdasarkan Metode SMART

Berikut adalah algoritma berbasis metode SMART untuk proses seleksi penerimaan karyawan:

### Algoritma Seleksi Karyawan Berdasarkan Metode SMART

1. **Inisialisasi Kriteria Seleksi**
   - Tentukan posisi pekerjaan yang akan diisi.
   - Tentukan kriteria seleksi yang *specific* (misalnya: kualifikasi, pengalaman, keterampilan teknis yang dibutuhkan).

2. **Tentukan Standar Terukur untuk Setiap Kriteria**
   - Untuk setiap kriteria yang ditentukan, tetapkan standar yang terukur, seperti skor minimum untuk tes keterampilan atau pengalaman minimum.
   - Simpan standar ini dalam variabel atau daftar.

3. **Saring Kandidat Berdasarkan Kriteria Spesifik**
   - **Langkah 3.1**: Untuk setiap kandidat yang mendaftar, lakukan pemeriksaan terhadap CV.
   - **Langkah 3.2**: Jika kandidat memenuhi kriteria spesifik (pendidikan, keterampilan utama, pengalaman), lanjutkan ke langkah berikutnya. Jika tidak, tandai sebagai *tidak lolos*.

4. **Lakukan Pengukuran untuk Setiap Kriteria (Measurable)**
   - **Langkah 4.1**: Undang kandidat yang memenuhi kriteria awal untuk tes keterampilan atau wawancara.
   - **Langkah 4.2**: Beri nilai pada setiap kandidat berdasarkan hasil tes keterampilan atau wawancara.
   - **Langkah 4.3**: Bandingkan hasil tes dengan standar terukur yang sudah ditetapkan. Jika kandidat memenuhi atau melebihi standar, lanjutkan ke langkah berikutnya.

5. **Pastikan Kriteria Realistis (Achievable)**
   - **Langkah 5.1**: Periksa kembali apakah kandidat memenuhi syarat yang realistis dalam konteks anggaran dan pasar tenaga kerja.
   - **Langkah 5.2**: Jika kandidat tidak memenuhi kriteria yang realistis, tandai sebagai *tidak lolos*. Jika memenuhi, lanjutkan ke tahap relevansi.

6. **Periksa Kesesuaian Kriteria dengan Posisi (Relevant)**
   - **Langkah 6.1**: Pastikan bahwa keterampilan dan pengalaman kandidat relevan dengan kebutuhan posisi.
   - **Langkah 6.2**: Tandai kandidat yang relevan dan lanjutkan ke tahap waktu.

7. **Tetapkan Waktu untuk Setiap Tahap (Time-bound)**
   - **Langkah 7.1**: Tetapkan batas waktu penyelesaian untuk setiap tahap seleksi (screening, tes keterampilan, wawancara).
   - **Langkah 7.2**: Evaluasi kandidat dalam waktu yang ditentukan untuk memastikan keputusan cepat dan tidak melewati tenggat waktu perekrutan.

8. **Finalisasi Kandidat Terbaik**
   - **Langkah 8.1**: Susun daftar kandidat yang memenuhi seluruh kriteria SMART.
   - **Langkah 8.2**: Urutkan kandidat berdasarkan nilai tes dan relevansi untuk memilih kandidat terbaik.
   - **Langkah 8.3**: Lakukan penawaran kepada kandidat terpilih.

9. **Dokumentasi dan Evaluasi Proses**
   - Simpan seluruh hasil seleksi dan catat evaluasi terhadap efektivitas proses berbasis SMART.

### Pseudocode

```plaintext
1. Initialize job_position, specific_criteria, measurable_standards, achievable_limits, relevant_skills, time_bound

2. For each candidate in applicant_pool:
     a. If candidate meets specific_criteria:
         i. Proceed to next stage
     b. Else:
         i. Mark candidate as "not selected"
   
3. For each candidate who passed specific_criteria:
     a. Evaluate candidate using measurable_standards
     b. If candidate meets measurable_standards:
         i. Proceed to next stage
     c. Else:
         i. Mark candidate as "not selected"

4. For each candidate who passed measurable_standards:
     a. Check if candidate meets achievable_limits
     b. If candidate meets achievable_limits:
         i. Proceed to next stage
     c. Else:
         i. Mark candidate as "not selected"

5. For each candidate who passed achievable_limits:
     a. Check if candidate has relevant_skills
     b. If candidate has relevant_skills:
         i. Proceed to final selection
     c. Else:
         i. Mark candidate as "not selected"

6. Sort candidates by test scores and relevance
7. Select top candidate within time_bound

8. Offer position to selected candidate
```


# Implementasi Algoritma Seleksi Karyawan Berdasarkan Metode SMART dalam JavaScript

Berikut adalah implementasi sederhana dari algoritma seleksi karyawan berbasis metode SMART dalam JavaScript. Implementasi ini menggunakan beberapa kriteria seleksi yang sesuai dengan metode SMART.

```javascript
// Data kandidat (contoh)
const candidates = [
    { name: "Kandidat A", education: "S1", experience: 3, skills: ["SQL", "Python"], testScore: 85 },
    { name: "Kandidat B", education: "S1", experience: 1, skills: ["SQL"], testScore: 78 },
    { name: "Kandidat C", education: "S2", experience: 4, skills: ["SQL", "Python", "Data Visualization"], testScore: 92 },
    { name: "Kandidat D", education: "D3", experience: 2, skills: ["Python"], testScore: 70 }
];

// Kriteria Seleksi SMART
const criteria = {
    specific: { education: "S1", requiredSkills: ["SQL", "Python"] },
    measurable: { minExperience: 2, minTestScore: 80 },
    achievable: { maxBudgetExperience: 5 }, // Maksimum pengalaman yang dapat diakomodasi oleh anggaran
    relevant: ["SQL", "Python"], // Keterampilan relevan untuk posisi ini
    timeBound: 30 // Contoh waktu batas dalam hari (opsional untuk seleksi)
};

// Fungsi Seleksi Kandidat Berdasarkan Kriteria SMART
function selectCandidates(candidates, criteria) {
    return candidates.filter(candidate => {
        // Specific: Cek pendidikan dan keterampilan utama
        if (candidate.education !== criteria.specific.education) return false;
        if (!criteria.specific.requiredSkills.every(skill => candidate.skills.includes(skill))) return false;

        // Measurable: Cek pengalaman dan skor tes minimum
        if (candidate.experience < criteria.measurable.minExperience) return false;
        if (candidate.testScore < criteria.measurable.minTestScore) return false;

        // Achievable: Pastikan pengalaman kandidat realistis dalam anggaran
        if (candidate.experience > criteria.achievable.maxBudgetExperience) return false;

        // Relevant: Pastikan kandidat memiliki keterampilan yang relevan
        if (!criteria.relevant.every(skill => candidate.skills.includes(skill))) return false;

        // Time-bound: Tidak ada implementasi khusus di sini, biasanya untuk batas waktu seleksi

        // Jika memenuhi semua kriteria, kandidat diterima
        return true;
    });
}

// Menjalankan seleksi
const selectedCandidates = selectCandidates(candidates, criteria);

// Hasil Seleksi
console.log("Kandidat yang Lolos Seleksi Berdasarkan Metode SMART:");
selectedCandidates.forEach(candidate => console.log(candidate.name));
```

### Penjelasan Implementasi:

1. **Specific**: Memastikan kandidat memenuhi pendidikan minimum dan memiliki keterampilan spesifik yang diperlukan.
2. **Measurable**: Memastikan kandidat memiliki pengalaman kerja dan skor tes yang memenuhi standar.
3. **Achievable**: Menyaring kandidat dengan pengalaman realistis sesuai anggaran (dalam contoh ini, kandidat yang memiliki pengalaman di bawah 5 tahun).
4. **Relevant**: Memastikan keterampilan kandidat sesuai dengan kebutuhan posisi.
5. **Time-bound**: Dalam contoh ini, batas waktu tidak diaplikasikan dalam seleksi, tetapi batas waktu dapat diterapkan dalam sistem lain untuk mengontrol proses seleksi.

Hasil akhir akan mencetak kandidat yang memenuhi semua kriteria SMART ke konsol.
