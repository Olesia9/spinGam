let bg = document.getElementById('chars-scene');
let fog1 = document.getElementById('coins-scene');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    fog1.style.transform = 'translate(-' + x * 80 + 'px, -' + y * 60 + 'px)';
});