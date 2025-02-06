alert ('Seja bem vindo ao sorteio dos amigos');
// Função para coletar os nomes e fazer o sorteio
function sortearNome(){}
    // Solicita a lista de nomes separados por virgula
    const listaNomes = prompt ('digite os nomes separados por virgula (ex:Yusuke, Naruto, Ichigo, Guts, Petter):');
// Verifica se a lista foi inserida
if (ListaNomes ===null || listaNomes.trim() == '') {
alert('Por favor, insira os nomes dos amigos!');
return;
}
// Converte a string de nomes em um array
const nomes = listaNomes.split(',').map(nome=> nome!=='');
//Remove os nomes vazios (caso o usuario tenha digitado algo errado como 'numeros')
const nomesValidos = nomes.filter(nome => nome !=='');
//verifica se ha nomes validos
if (nomesValidos.lenght ===0){
    alert('Nenhum nome válido foi inserido!');
    return;
}
