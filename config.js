// ==========================================
// KONFIGURASI PORTAL NICODAI.PAY
// ==========================================

const portalConfig = {
    // 1. Link Cloudflare Tunnel (Ganti dengan link Anda)
    // Contoh: "https://abc-def-ghi.trycloudflare.com"
    targetUrl: "https://acids-evans-champion-tulsa.trycloudflare.com/Nicodai.pay", 
    
    // 2. Status Maintenance (true = Tutup, false = Buka)
    isMaintenance: false,
    
    // 3. Pesan Maintenance (Hanya muncul jika isMaintenance = true)
    maintenanceMessage: "Kami sedang melakukan pemeliharaan server rutin untuk meningkatkan kualitas layanan. Silakan kembali dalam beberapa saat.",
    
    // 4. Waktu Loading (dalam milidetik). 3000 = 3 detik
    loadingDuration: 3000,

    // 5. Teks Loading
    loadingTitle: "Menyiapkan Server...",
    loadingText: "Mohon tunggu sebentar, kami sedang mengarahkan Anda ke sistem utama Nicodai.pay."
};
