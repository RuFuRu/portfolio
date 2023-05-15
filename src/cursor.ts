function handleCursor() {
    const coords = {x: 0, y: 0}
    const circles = document.querySelectorAll('.cursor-circle') as NodeListOf<HTMLDivElement>;

    circles.forEach((circle: any) => {
        circle.x = 0;
        circle.y = 0;
    })

    window.addEventListener("mousemove", (e) => {
        coords.x = e.pageX;
        coords.y = e.pageY;
    })

    window.addEventListener("click", () => {
        let scale = 3;
        circles[0].setAttribute("style", `transform: scale(${scale});`);
        const interval = setInterval(() => {
            circles[0].setAttribute("style", `transform: scale(${(scale -= 0.2).toFixed(2)})`);
            if(circles[0].getAttribute("style") === "transform: scale(0.20)") {
                clearInterval(interval);
            }
        },30)
    })

    function animateCursor() {
        let x = coords.x;
        let y = coords.y;
        
        circles.forEach((circle: any, index) => {
            circle.style.left = x  - 12 + "px";
            circle.style.top = y - 12 + "px";

            circle.style.scale = (circles.length - index) / circles.length;

            circle.x = x;
            circle.y = y;

            const nextCircle: any = circles[index + 1] || circles[0];
            x += (nextCircle.x  - x) * 0.5;
            y += (nextCircle.y - y) * 0.5;

        });
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

}

export default handleCursor