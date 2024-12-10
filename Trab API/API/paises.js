export function carregarPaises() {
    const url = 'https://raw.githubusercontent.com/evelynmartins220/Design-de-Interacao/main/Trab%20API/paises-gentilicos-google-maps.json';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar o arquivo JSON: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const select = document.getElementById('pais-select');
            data.forEach(pais => {
                const option = document.createElement('option');
                option.value = pais.nome_pais;
                option.textContent = pais.nome_pais;
                select.appendChild(option);
            });

            select.addEventListener('change', event => {
                const paisSelecionado = data.find(pais => pais.nome_pais === event.target.value);
                const detalhesDiv = document.getElementById('pais-detalhes');
                if (paisSelecionado) {
                    detalhesDiv.innerHTML = `
                        <h2>${paisSelecionado.nome_pais}</h2>
                        <p>Gentílico: ${paisSelecionado.gentilico}</p>
                        <p>Sigla: ${paisSelecionado.sigla}</p>
                        <p>Nome Internacional: ${paisSelecionado.nome_pais_int}</p>
                    `;
                } else {
                    detalhesDiv.innerHTML = '';
                }
            });
        })
        .catch(error => console.error('Erro ao buscar o arquivo JSON:', error));
}