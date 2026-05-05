const torch = document.getElementById("torch-light");

document.addEventListener("mousemove", (e) => {
    torch.style.background = `
        radial-gradient(
            circle 180px at ${e.clientX}px ${e.clientY}px,
            rgba(255, 200, 80, 0.35),
            rgba(255, 140, 40, 0.2) 40%,
            rgba(0, 0, 0, 0.9) 80%
        )
    `;
});