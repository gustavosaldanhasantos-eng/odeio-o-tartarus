// Dados dinâmicos para a mudança de tema (Textos customizados)
const themeData = {
    p3: {
        title: "Memento Mori",
        desc: "Lembre-se de que você é mortal. Desperte seu poder durante a Hora Sombria e enfrente a Tartarus em Persona 3."
    },
    p4: {
        title: "Reach Out To The Truth",
        desc: "Busque a verdade por trás da névoa. Entre no Canal da TV e desvende os assassinatos em série de Inaba em Persona 4."
    },
    p5: {
        title: "Take Your Heart",
        desc: "Dispare seu coração contra a corrupção do mundo. Roube os desejos distorcidos dos adultos no Metaverso com os Phantom Thieves em Persona 5."
    }
};

// Frases aleatórias da Velvet Room
const velvetQuotes = [
    "O seu destino está traçado, mas o futuro ainda pode ser moldado.",
    "Um contrato foi selado. A partir de agora, você é responsável pelas suas escolhas.",
    "As cartas do tarô revelam uma jornada difícil, mas cheia de laços valiosos.",
    "Sua mente é um mar profundo. Que tipo de Persona você despertará hoje?",
    "A forma da Velvet Room muda dependendo do estado do coração do seu convidado.",
    "Não tema o amanhã. O poder dos seus Social Links guiará seus passos na escuridão."
];

// Função para mudar o tema visual e os textos principais
function changeTheme(themeName) {
    // Remove as classes de tema antigas e adiciona a nova
    document.body.className = '';
    document.body.classList.add(`theme-${themeName}`);

    // Altera os textos do Hero de acordo com o jogo selecionado
    document.getElementById('hero-title').innerText = themeData[themeName].title;
    document.getElementById('hero-desc').innerText = themeData[themeName].desc;
}

// Evento para gerar frases aleatórias
document.getElementById('quote-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * velvetQuotes.length);
    const quoteElement = document.getElementById('quote-text');
    
    // Pequeno efeito de piscar antes de mostrar a nova frase
    quoteElement.style.opacity = 0;
    
    setTimeout(() => {
        quoteElement.innerText = `"${velvetQuotes[randomIndex]}"`;
        quoteElement.style.opacity = 1;
    }, 200);
});
