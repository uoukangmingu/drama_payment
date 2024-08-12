document.addEventListener('DOMContentLoaded', (event) => {
    const ticketBtn = document.getElementById('ticketBtn');
    const donateBtn = document.getElementById('donateBtn');
    const leftCurtain = document.querySelector('.curtain.left');
    const rightCurtain = document.querySelector('.curtain.right');
    const poster = document.querySelector('.poster');
    

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

    donateBtn.addEventListener('click', () => {
        leftCurtain.style.transform = 'translateX(0)';
        rightCurtain.style.transform = 'translateX(0)';
        setTimeout(() => {
            window.location.href = 'https://payapplite.com/l/asfCnZ';
        }, 1000);
    });
});
