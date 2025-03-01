function enterWebsite() {
    let username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Silakan masukkan nama Anda!");
        return;
    }

    // Sembunyikan form input
    document.getElementById("welcome-screen").style.display = "none";

    // Tampilkan notifikasi selamat datang
    let welcomeMessage = document.getElementById("welcome-message");
      welcomeMessage.innerHTML = `ᴡᴇʟᴄᴏᴍᴇ (${username}) 😈
    ᴛᴜɴɢɢᴜ ʙᴇʙᴇʀᴀᴘᴀ sᴀᴀᴛ`;
    welcomeMessage.classList.remove("hidden");

    // Putar musik
    let audio = document.getElementById("bg-music");
    audio.play();

    // Hilangkan notifikasi setelah 3 detik dan tampilkan isi web
    setTimeout(() => {
        welcomeMessage.classList.add("hidden");
        document.getElementById("main-content").classList.remove("hidden");
    }, 2000);
}
