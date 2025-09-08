// Botão de voltar ao topo
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
});
topBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mantém funcionalidade anterior, se existir
try {
    document.getElementById('demoBtn').addEventListener('click', function() {
        document.getElementById('demoText').textContent = 'Você clicou no botão! Isso é JavaScript em ação 🚀';
    });
} catch {}
document.getElementById('demoBtn').addEventListener('click', function() {
    document.getElementById('demoText').textContent = 'Você clicou no botão! Isso é JavaScript em ação 🚀';
});
