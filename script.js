document.addEventListener('DOMContentLoaded', (event) => {
    const ticketBtn = document.getElementById('ticketBtn');
    const donateBtn = document.getElementById('donateBtn');
    const leftCurtain = document.querySelector('.curtain.left');
    const rightCurtain = document.querySelector('.curtain.right');
    const poster = document.querySelector('.poster');
    
donateBtn.addEventListener('click', (e) => {
    e.preventDefault(); // 기본 동작 방지
    const popupWidth = 500;
    const popupHeight = 600;
    const left = (window.screen.width - popupWidth) / 2;
    const top = (window.screen.height - popupHeight) / 2;
    
    const popup = window.open('', '후원하기', `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
    popup.document.write('<iframe src="https://payapplite.com/l/asfCnZ" width="100%" height="100%" frameborder="0"></iframe>');
});



let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const container = document.querySelector('.carousel-container');

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

function updateSlide() {
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 자동 슬라이드 기능 (선택적)
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}, 5000);




function updateTimer() {
    const now = new Date();
    const target = new Date("2024-09-19T19:30:00"); // 첫 공연 날짜
    const diff = target - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateTimer, 1000);
updateTimer(); // 초기 실행



    setInterval(() => {
        poster.style.transform = 'rotateY(20deg)';
        setTimeout(() => {
            poster.style.transform = 'rotateY(380deg)';
        }, 3000);
    }, 4000);

    // 커튼 애니메이션
    leftCurtain.style.transform = 'translateX(0)';
    rightCurtain.style.transform = 'translateX(0)';

setTimeout(() => {
    leftCurtain.style.transform = 'translateX(-100%)';
    rightCurtain.style.transform = 'translateX(100%)';
}, 500);


    ticketBtn.addEventListener('click', () => {
        leftCurtain.style.transform = 'translateX(0)';
        rightCurtain.style.transform = 'translateX(0)';
        setTimeout(() => {
            window.location.href = 'https://uoukangmingu.github.io/precheck/';
        }, 1000);
    });

});
