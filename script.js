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
// ۱. ابتدا المان دکمه را دریافت کنید
const noBtn = document.getElementById("noBtn");

// ۲. تابع جابجایی را تعریف کنید
const moveButton = () => {
    // محاسبه حداکثر فضای مجاز برای جلوگیری از خروج دکمه از صفحه
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    // تولید مختصات تصادفی
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    // اعمال مختصات جدید به دکمه
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

// ۳. در نهایت، فقط رویداد click را به دکمه متصل کنید (پشتیبانی بی‌نقص از لمس موبایل و کلیک موس)
noBtn.addEventListener('click', moveButton);
