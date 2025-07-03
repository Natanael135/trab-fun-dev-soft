document.addEventListener('DOMContentLoaded', () => {

    const btn = document.getElementById('msgBtn');
    const msgDiv = document.getElementById('mensagem');

    btn.addEventListener('click', () => {
        msgDiv.textContent = 'Aproveite as portas abertas, pois você não vai querer pular janelas!';
        msgDiv.style.display = 'block';
    });
});