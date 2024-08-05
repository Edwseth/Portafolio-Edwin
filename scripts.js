document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progreso');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});
// crear función para limpiar los campos en la sección contacto

