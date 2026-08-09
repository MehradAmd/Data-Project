// شروع موسیقی و رفتن به صفحه دوم با کلیک روی نامه
function openEnvelope() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.5;
    music.play().catch(() => console.log("مرورگر اجازه پخش خودکار را نداد."));

    document.getElementById("step1").classList.remove("active");
    document.getElementById("step1").classList.add("hidden");
    
    document.getElementById("step2").classList.remove("hidden");
    document.getElementById("step2").classList.add("active");
}

// رفتن به صفحه سوم (تاییدیه)
function goToStep3() {
    document.getElementById("step2").classList.remove("active");
    document.getElementById("step2").classList.add("hidden");
    
    document.getElementById("step3").classList.remove("hidden");
    document.getElementById("step3").classList.add("active");
}

// رفتن به صفحه چهارم (انتخاب برنامه)
function goToStep4() {
    document.getElementById("step3").classList.remove("active");
    document.getElementById("step3").classList.add("hidden");
    
    document.getElementById("step4").classList.remove("hidden");
    document.getElementById("step4").classList.add("active");
}

// انتخاب برنامه و صدور بلیت (رفتن به صفحه پنجم)
function selectActivity(activityName, icon) {
    // جاگذاری متن و آیکون انتخابی در بلیت
    document.getElementById("ticket-activity").innerText = activityName;
    document.getElementById("ticket-icon").innerText = icon;

    // تغییر صفحه
    document.getElementById("step4").classList.remove("active");
    document.getElementById("step4").classList.add("hidden");
    
    document.getElementById("step5").classList.remove("hidden");
    document.getElementById("step5").classList.add("active");
}

// لاجیک فرار کردن دکمه "نه"
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "fixed";
    
    const maxX = window.innerWidth - noBtn.clientWidth - 20;
    const maxY = window.innerHeight - noBtn.clientHeight - 20;
    
    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));
    
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
