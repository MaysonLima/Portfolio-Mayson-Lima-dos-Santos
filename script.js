function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const telefone = '5577991508733';

const texto = `Olá, meu me chamo ${nome}, ${mensagem}`;
const msgformatada = encodeURIComponent(texto);

const url = `https://wa.me/${telefone}?text=${msgformatada}`;

window.open(url, '_blank');



}