// Função para obter conselho aleatório da Advice Slip API
function getAdvice() {
    // Substitua 'YOUR_API_KEY' pela sua chave de API, se necessário
    const apiUrl = 'https://api.adviceslip.com/advice';

    // Faz uma solicitação AJAX para a API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Verifica se a resposta foi bem-sucedida
            if (data && data.slip) {
                // Exibe o conselho na sua página
                document.getElementById('advice-id').innerHTML =  'ADVICE' + ' #' + data.slip.id;
                document.getElementById('advice').innerHTML = '"' + data.slip.advice + '"';
            } else {
                console.error('Erro ao obter conselho da API.');
            }
        })
        .catch(error => {
            console.error('Erro na solicitação AJAX:', error);
        });
}

// Chamada inicial para carregar um conselho ao carregar a página (opcional)
getAdvice();