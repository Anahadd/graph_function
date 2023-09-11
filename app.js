window.onload = function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;
    const scale = 20;

    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";

    for (let x = -10; x <= 10; x += 0.1) {
        const y = x * x;
        const pixelX = width / 2 + x * scale;
        const pixelY = height / 2 - y * scale; 
        ctx.lineTo(pixelX, pixelY);
    }

    ctx.stroke();
}
