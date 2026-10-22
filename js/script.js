
const banner = document.querySelector("main > section:first-child");

if (banner) {
    banner.addEventListener("pointermove", (evento) => {
        const area = banner.getBoundingClientRect();

        const x = evento.clientX - area.left;
        const y = evento.clientY - area.top;

        const centroX = x / area.width - 0.5;
        const centroY = y / area.height - 0.5;

        banner.style.setProperty("--mouse-x", `${x}px`);
        banner.style.setProperty("--mouse-y", `${y}px`);

        banner.style.setProperty("--wave-x", `${centroX * 35}px`);
        banner.style.setProperty("--wave-y", `${centroY * 20}px`);

        banner.classList.add("cursor-ativo");
    });

    banner.addEventListener("pointerleave", () => {
        banner.classList.remove("cursor-ativo");
        banner.style.setProperty("--wave-x", "0px");
        banner.style.setProperty("--wave-y", "0px");
    });
}
