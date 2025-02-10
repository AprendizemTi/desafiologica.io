// Array de nomes
let nomes = ['Yusuke', 'Sasuke', 'Ichigo', 'Guts', 'Parker'];

// Função para sortear um nome aleatório
function sortearNome() {
    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * nomes.length);

    // Seleciona o nome correspondente ao índice
    let nomeAleatorio = nomes[indiceAleatorio];

    // Exibe o nome sorteado
    alert(`O nome sorteado é: ${nomeAleatorio}`);
}

// Solicita ao usuário que insira algo (não usado no sorteio, mas mantido conforme seu código)
prompt('Insira o nome');

// Executa o sorteio
sortearNome();

// Função para gerar outro nome aleatório
function gerarOutroNome() {
    sortearNome(); // Chama a função de sorteio novamente
}

// Exemplo de uso: chamada manual para gerar outro nome
gerarOutroNome();