export function consultarCNPJ(){
    const form = document.getElementById('cnpj-form');
    form.addEventListener('submit', event => {
        event.preventDefault();

        //**Destructuring**
        let { value: cnpj } = document.getElementById('cnpj');
        
        //**map, filter ou reduce**
        cnpj = [...cnpj].filter(char => !isNaN(char) && char !== ' ').join('');
        
        const cnpjUrl = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

        fetch(cnpjUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados do CNPJ: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const cnpjDetalhesDiv = document.getElementById('cnpj-detalhes');
                cnpjDetalhesDiv.innerHTML = `
                    <h2>Detalhes do CNPJ</h2>
                    <p>Nome: ${data.razao_social}</p>
                    <p>Nome Fantasia: ${data.nome_fantasia}</p>
                    <p>UF: ${data.uf}</p>
                    <p>Telefone: ${data.ddd_telefone_1}</p>
                    <p>Email: ${data.email}</p>
                    <p>Atividade Principal: ${data.cnae_fiscal_descricao}</p>
                `;
            })
            .catch(error => {
                console.error('Erro ao buscar os dados do CNPJ:', error);
                const cnpjDetalhesDiv = document.getElementById('cnpj-detalhes');
                cnpjDetalhesDiv.innerHTML = `<p>Erro ao buscar os dados do CNPJ. Verifique se o CNPJ está correto.</p>`;
            });
    });
}