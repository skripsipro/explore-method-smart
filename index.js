// Data kandidat (contoh)
const candidates = [
    { name: "Kandidat A", education: "S1", experience: 3, skills: ["SQL", "Python"], testScore: 85 },
    { name: "Kandidat AB", education: "S4", experience: 3, skills: ["SQL", "Python"], testScore: 85 },
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