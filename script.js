// Banco de Dados Temático para a Interface Interativa
const gameData = {
    p3: {
        badge: "S.E.E.S.",
        title: "MEMENTO MORI",
        desc: "Lembre-se de que morrerá. Domine a Hora Sombria, explore a imensa torre da Tartarus e evoque sua Persona disparando um Invocador contra a própria mente.",
        characters: {
            leader: {
                name: "Makoto Yuki",
                sub: "Codinome: Protagonista | Arcana: The Fool",
                text: "O herói melancólico de Persona 3. Capaz de carregar múltiplas Personas, ele lidera o esquadrão S.E.E.S. para impedir o fim do mundo."
            },
            mascot: {
                name: "Koromaru",
                sub: "Aliado Canino | Arcana: Death",
                text: "Um cachorro albino extremamente leal que despertou sua própria Persona. Luta usando uma faca em sua boca e magia de escuridão."
            },
            navigator: {
                name: "Fuuka Yamagishi",
                sub: "Suporte Tático | Arcana: The Priestess",
                text: "A navegadora do time. Sua Persona, Lucia, atua escaneando fraquezas de inimigos e mapeando os andares labirínticos da Tartarus."
            }
        }
    },
    p4: {
        badge: "INVESTIGATION TEAM",
        title: "REACH THE TRUTH",
        desc: "Busque a verdade por trás da névoa. Viaje para o misterioso Mundo da TV através das telas de Inaba e desvende um caso bizarro de assassinatos em série.",
        characters: {
            leader: {
                name: "Yu Narukami",
                sub: "Codinome: Souji Seta | Arcana: The Fool",
                text: "Carismático e determinado, Yu se muda para o interior e descobre o poder de cruzar a tela da TV, invocando a poderosa Persona Izanagi."
            },
            mascot: {
                name: "Teddie (Kuma)",
                sub: "Criatura do Canal de TV | Arcana: Star",
                text: "Uma criatura parecida com uma fantasia de urso vazia que vive no mundo da TV. Serve como guia cômico e guerreiro nas horas vagas."
            },
            navigator: {
                name: "Rise Kujikawa",
                sub: "Ídolo / Suporte | Arcana: Lovers",
                text: "Uma famosa Pop Idol que decide fazer uma pausa na carreira. Ao entrar no time, ela usa suas habilidades de análise para dar suporte em batalha."
            }
        }
    },
    p5: {
        badge: "PHANTOM THIEVES",
        title: "TAKE YOUR HEART",
        desc: "Desperte seu outro eu. Dispare seu coração contra a corrupção do mundo e roube os desejos distorcidos de adultos crueis invadindo seus Palácios no Metaverso.",
        characters: {
            leader: {
                name: "Joker (Ren Amamiya)",
                sub: "Codinome: Joker | Arcana: The Fool",
                text: "Líder dos Phantom Thieves de Copas. Um jovem que esconde sua identidade rebelde atrás de óculos e uma postura calma no dia a dia."
            },
            mascot: {
                name: "Morgana",
                sub: "Codinome: Mona | Arcana: Magician",
                text: "Uma criatura misteriosa parecida com um gato preto que ensina aos Phantom Thieves as regras do Metaverso. Ele jura que já foi humano."
            },
            navigator: {
                name: "Futaba Sakura",
                sub: "Codinome: Oracle | Arcana: Hermit",
                text: "Uma hacker genial e reclusa. Após ter seu coração salvo pelo grupo, assume a navegação tática usando a nave/Persona Necronomicon."
            }
        }
    }
};

// Frases enigmáticas da Velvet Room
const velvetQuotes = [
    "O destino é uma colcha tecida pelos laços que você cria com os outros.",
    "Um contrato foi assinado... nenhuma reviravolta do destino poderá ser desfeita.",
    "A Velvet Room toma a forma do estado atual do seu próprio coração.",
    "Cuidado: as aparências enganam, e a verdade muitas vezes dói mais do que a mentira.",
    "Sua jornada exigirá sacrifícios, mas o poder da sua resolução quebrará qualquer corrente."
];

// Estado global do site
let currentTheme = 'p5';

// 1. FUNÇÃO: Mudar Temas (Altera o estilo visual e todo o conteúdo do site dinamicamente)
function changeTheme(themeName) {
    currentTheme = themeName;
    
    // Altera a classe do body para disparar as variáveis CSS corretas
    document.body.className = '';
    document.body.classList.add(`theme-${themeName}`);

    // Atualiza os textos da seção Hero
    document.getElementById('hero-badge').innerText = gameData[themeName].badge;
    document.getElementById('hero-title').innerText = gameData[themeName].title;
    document.getElementById('hero-desc').innerText = gameData[themeName].desc;

    // Reseta o seletor de personagens para o 'leader' do tema escolhido
    const initialCard = document.querySelector('.char-card');
    selectCharacter('leader', initialCard);
}

// 2. FUNÇÃO: Seletor Interativo de Personagens
function selectCharacter(role, element) {
    // Remove classe ativa de todos os cards
    document.querySelectorAll('.char-card').forEach(card => card.classList.remove('active'));
    // Adiciona ao card clicado
    element.classList.add('active');

    // Busca os dados certos baseados no tema e na função do personagem
    const charInfo = gameData[currentTheme].characters[role];

    // Aplica um pequeno efeito de flash ao atualizar as informações
    const displayBox = document.getElementById('info-display');
    displayBox.style.transform = 'scale(0.98) rotate(0.5deg)';
    
    setTimeout(() => {
        document.getElementById('display-name').innerText = charInfo.name;
        document.getElementById('display-sub').innerText = charInfo.sub;
        document.getElementById('display-text').innerText = charInfo.text;
        displayBox.style.transform = 'none';
    }, 150);
}

// 3. EVENTO: Gerador de Frases da Velvet Room com Efeito Fade
document.getElementById('quote-btn').addEventListener('click', () => {
    const quoteText = document.getElementById('quote-text');
    const randomQuote = velvetQuotes[Math.floor(Math.random() * velvetQuotes.length)];
    
    quoteText.style.opacity = 0;
    setTimeout(() => {
        quoteText.innerText = `"${randomQuote}"`;
        quoteText.style.opacity = 1;
    }, 300);
});

// 4. EVENTO: All-Out Attack! (Interação Dinâmica Estilo "Finalizador")
document.getElementById('aoa-trigger').addEventListener('click', () => {
    const overlay = document.getElementById('all-out-overlay');
    
    // Exibe a tela de ataque
    overlay.style.display = 'flex';
    
    // Executa o "corte" de fechamento após 1.5 segundos
    setTimeout(() => {
        overlay.style.background = '#000';
        document.querySelector('.aoa-text').innerText = 'JUSTICE PREVAILS!';
    }, 1000);

    // Esconde a tela e volta ao normal
    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.style.background = '#dc000c'; // reseta cor original do P5
        document.querySelector('.aoa-text').innerText = "THE SHOW'S OVER!";
    }, 2500);
});
