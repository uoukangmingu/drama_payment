document.addEventListener('DOMContentLoaded', (event) => {
    const ticketBtn = document.getElementById('ticketBtn');
    const donateBtn = document.getElementById('donateBtn');
    const leftCurtain = document.querySelector('.curtain.left');
    const rightCurtain = document.querySelector('.curtain.right');
    const poster = document.querySelector('.poster');
    
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
