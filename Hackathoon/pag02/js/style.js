
        // Função para lidar com o envio do formulário
        document.getElementById('ajudaForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const endereco = document.getElementById('endereco').value;
            const ajuda = document.getElementById('ajuda').value;

            if (!ajuda) {
                alert('Por favor, selecione como deseja ajudar.');
                return;
            }

            const mensagem = `Olá, meu nome é ${nome}, meu endereço é ${endereco} e eu gostaria de ajudar com ${ajuda}.`;
            const telefoneWhatsApp = '5598982472054';
            const url = `https://api.whatsapp.com/send?phone=${telefoneWhatsApp}&text=${encodeURIComponent(mensagem)}`;

            window.open(url, '_blank');

            // Mostrar mensagem de sucesso
            document.getElementById('successMessage').style.display = 'block';

            // Limpar o formulário
            document.getElementById('ajudaForm').reset();
        });