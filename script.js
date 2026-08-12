// Selecionando os elementos
const modal = document.getElementById('modalContato');
const btnAbrir = document.getElementById('btnAbrirModal');
const btnFechar = document.getElementById('btnFecharModal');
const form = document.getElementById('formOrcamento');

// Abrir o modal
btnAbrir.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que a página role para o topo
    modal.style.display = 'flex';
});

// Fechar o modal pelo 'X'
btnFechar.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Fechar o modal clicando fora da caixa
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Simular o envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue
    
    // Aqui no futuro entrará a integração com o Backend (ex: enviando dados para uma API Java)
    
    alert('Pedido de orçamento enviado com sucesso! A HF Software entrará em contato em breve.');
    modal.style.display = 'none';
    form.reset(); // Limpa os campos
});