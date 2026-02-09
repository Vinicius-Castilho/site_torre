// 1. Configuração Global do ScrollReveal

const sr = ScrollReveal({
    distance: '40px',
    duration: 1000,
    delay: 200,
    reset: false // Premium: A animação ocorre apenas na primeira vez
});

// 2. Aplicação das Revelações
// Hero: Surge de baixo para cima com um leve atraso
sr.reveal('#hero', { origin: 'bottom', delay: 400 });

// História: Efeito de "encontro" (texto da esquerda, imagem da direita)
sr.reveal('#historia-texto', { origin: 'left', delay: 300 });
sr.reveal('#historia-imagem', { origin: 'right', delay: 500 });

// Atuação: Efeito cascata (stagger) nos cards individuais
// O seletor '#cards > div' garante que cada card entre um por um
sr.reveal('#cards > div', { 
    interval: 200, 
    origin: 'bottom',
    scale: 0.9,
    distance: '50px'
});

// Contato: O formulário surge por último para focar a atenção do usuário
sr.reveal('#form-contato', { origin: 'bottom', delay: 400 });


// 3. Lógica do Header (Efeito Transparente para Branco)
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Se rolar mais de 50px, adiciona sombra e fundo branco
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
        header.classList.remove('shadow-sm'); // Remove a sombra leve inicial
    } else {
        header.classList.remove('shadow-md');
        header.classList.add('shadow-sm');
    }
});

//fim do ScrollReveal------------------------------

// logica do header------------------------------

const header_clean = document.querySelector('#main-header');
const logoImg = document.querySelector('#logo-img');
const navLinks = document.querySelector('#nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        // ESTADO ATIVO (Branco com Sombra)
        header_clean.classList.add('bg-white', 'shadow-sm', 'py-4');
        header_clean.classList.remove('bg-transparent', 'py-6');
        
        navLinks.classList.add('text-torreBlue');
        navLinks.classList.remove('text-white');
        
        logoImg.src = '/imagens/LOGO.svg'; // Sua logo original colorida
    } else {
        // ESTADO INICIAL (Transparente)
        header_clean.classList.add('bg-transparent', 'py-6');
        header_clean.classList.remove('bg-white', 'shadow-sm', 'py-4');
        
        navLinks.classList.add('text-white');
        navLinks.classList.remove('text-torreBlue');
        
        logoImg.src = '/imagens/LOGO_BRANCA.svg'; // Versão negativa da logo
    }
});
// fim logica do header------------------------------

//logica hambueguer menu------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#menu-btn');
    const mobileMenu = document.querySelector('#mobile-menu');
    const menuPath = document.querySelector('#menu-path');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Função para atualizar a cor do botão baseada no scroll
    function updateBtnColor() {
        if (window.scrollY > 100) {
            menuBtn.classList.add('text-torreBlue');
            menuBtn.classList.remove('text-white');
        } else {
            menuBtn.classList.add('text-white');
            menuBtn.classList.remove('text-torreBlue');
        }
    }

    // 1. Abre/Fecha Menu
    menuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('translate-x-0');
        
        if (isOpen) {
            // FECHANDO O MENU
            mobileMenu.classList.replace('translate-x-0', 'translate-x-full');
            document.body.style.overflow = '';
            menuPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            
            // RESOLVE O BUG: Checa a cor assim que fecha
            updateBtnColor(); 
        } else {
            // ABRINDO O MENU
            mobileMenu.classList.replace('translate-x-full', 'translate-x-0');
            document.body.style.overflow = 'hidden';
            menuPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            
            // Garante que o X seja sempre branco sobre o fundo azul
            menuBtn.classList.add('text-white');
            menuBtn.classList.remove('text-torreBlue');
        }
    });

    // 2. Fecha ao clicar nos links (Também corrigido aqui)
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.replace('translate-x-0', 'translate-x-full');
            menuPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            document.body.style.overflow = '';
            updateBtnColor(); // Garante a cor certa após o pulo da âncora
        });
    });

    // 3. Scroll normal
    window.addEventListener('scroll', updateBtnColor);
});
//fim logica hambueguer menu------------------------------

