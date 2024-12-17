document.getElementById('helpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const necessidade = document.getElementById('necessidade').value;
    if (!necessidade) {
        alert('Por favor, selecione sua necessidade.');
        return;
    }
    const mensagem = `Olá, meu nome é ${nome}, meu endereço é ${endereco} e estou precisando urgente de ${necessidade}.`;
    const telefoneWhatsApp = '5598982472054';
    const url = `https://api.whatsapp.com/send?phone=${telefoneWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});