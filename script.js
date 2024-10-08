﻿document.addEventListener('DOMContentLoaded', (event) => {
    const ticketBtn = document.getElementById('ticketBtn');
    const donateBtn = document.getElementById('donateBtn');
    const leftCurtain = document.querySelector('.curtain.left');
    const rightCurtain = document.querySelector('.curtain.right');
    const poster = document.querySelector('.poster');
    
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

    // 자동 슬라이드 기능
    let slideInterval = setInterval(() => {
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

    let timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // 초기 실행

    function animatePoster() {
        poster.style.transform = 'rotateY(20deg)';
        setTimeout(() => {
            poster.style.transform = 'rotateY(380deg)';
        }, 3000);
    }

    let posterInterval = setInterval(animatePoster, 4000);

    // 커튼 애니메이션
    leftCurtain.style.transform = 'translateX(0)';
    rightCurtain.style.transform = 'translateX(0)';

    setTimeout(() => {
        leftCurtain.style.transform = 'translateX(-100%)';
        rightCurtain.style.transform = 'translateX(100%)';
    }, 500);

    // History API를 사용한 페이지 상태 관리
    window.addEventListener('popstate', function(event) {
        if(event.state && event.state.page === 'original') {
            document.body.innerHTML = event.state.content;
            // 페이지 복원 후 이벤트 리스너 및 인터벌 재설정
            setupEventListeners();
        }
    });

    function setupEventListeners() {
        ticketBtn.addEventListener('click', handleTicketClick);
        donateBtn.addEventListener('click', handleDonateClick);
    }

    function handleTicketClick() {
        animateCurtain();
        setTimeout(() => {
            history.pushState({page: 'original', content: document.body.innerHTML}, '');
            window.location.href = 'https://uoukangmingu.github.io/precheck/';
        }, 1000);
    }

    function handleDonateClick() {
        animateCurtain();
        setTimeout(() => {
            history.pushState({page: 'original', content: document.body.innerHTML}, '');
            window.location.href = 'https://payapplite.com/l/asfCnZ';
        }, 1000);
    }

    function animateCurtain() {
        leftCurtain.style.transform = 'translateX(0)';
        rightCurtain.style.transform = 'translateX(0)';
    }

    setupEventListeners();
});
