// Modal İşlemleri
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const closeButtons = document.querySelectorAll(".close");

// Giriş Yap Butonu
loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
});

// Kayıt Ol Butonu
registerBtn.addEventListener("click", () => {
    registerModal.style.display = "block";
});

// Kapatma Butonları
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
    });
});

// Dışarı Tıklayınca Kapatma
window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
    if (e.target === registerModal) {
        registerModal.style.display = "none";
    }
});

// Form Gönderimleri
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Giriş başarılı! Yönlendiriliyorsunuz...");
    loginModal.style.display = "none";
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Kayıt başarılı! Giriş yapabilirsiniz.");
    registerModal.style.display = "none";
});