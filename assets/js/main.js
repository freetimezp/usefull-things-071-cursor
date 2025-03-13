const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");


circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
    circle.style.background = 'linear-gradient(90deg, rgba(24,1,17,1) 0%, rgba(56,4,5,1) 86%, rgba(255,0,0,1) 100%)';
    //circle.style.background = '#000';
});


window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;


});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.x = x;
        circle.y = y;

        circle.style.scale = (circles.length - index) / circles.length;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();
















