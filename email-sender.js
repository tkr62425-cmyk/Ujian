
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzbeZXbX441FyKMhzZRxYCPKGp-UAh4NdgOLk_vTSmYJ3Kk0wRtkczyTBLI21f3M84U-w/exec"; 

function sendResultImageViaEmail(name, studentClass, score, correct, wrong) {
    const dataKirim = {
        name: name,
        student_class: studentClass,
        score: score,
        correct: correct,
        wrong: wrong
    };

    // Kirim data secara asinkronus ke Google Sheets & Gmail via API
    fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors", // Diperlukan agar tidak terkena blokir CORS dari GitHub Pages
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataKirim)
    })
    .then(() => {
        console.log("Data berhasil dikirim ke Google Sheets dan Gmail!");
    })
    .catch(err => {
        console.error("Gagal mengirim data:", err);
    });
}