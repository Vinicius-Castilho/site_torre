document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleção de Elementos (IDs e Classes do seu HTML)
    const header = document.querySelector('#main-header');
    const logoImg = document.querySelector('#logo-img');
    const navLinks = document.querySelector('#nav-links');
    const menuBtn = document.querySelector('#menu-btn');
    const mobileMenu = document.querySelector('#mobile-menu');
    const menuPath = document.querySelector('#menu-path');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // 2. Função de Scroll do Header (Efeito Transparente -> Branco)
    function updateHeader() {
        if (!header) return;

        if (window.scrollY > 50) {
            // ESTADO ATIVO (Branco com Sombra)
            header.classList.add('bg-white', 'shadow-md', 'py-4');
            header.classList.remove('bg-transparent', 'py-6');
            
            // Troca cor dos links e da logo
            if (navLinks) {
                navLinks.classList.add('text-torreBlue');
                navLinks.classList.remove('text-white');
            }
            if (logoImg) logoImg.src = '/imagens/LOGO.svg'; // Caminho da sua logo colorida
            
            // Cor do botão hambúrguer
            if (menuBtn) {
                menuBtn.classList.add('text-torreBlue');
                menuBtn.classList.remove('text-white');
            }
        } else {
            // ESTADO INICIAL (Transparente)
            header.classList.add('bg-transparent', 'py-6');
            header.classList.remove('bg-white', 'shadow-md', 'py-4');
            
            if (navLinks) {
                navLinks.classList.add('text-white');
                navLinks.classList.remove('text-torreBlue');
            }
            if (logoImg) logoImg.src = '/imagens/LOGO_BRANCA.svg'; // Versão negativa da logo
            
            if (menuBtn) {
                menuBtn.classList.add('text-white');
                menuBtn.classList.remove('text-torreBlue');
            }
        }
    }

    // 3. Lógica do Menu Mobile
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('translate-x-0');
            
            if (isOpen) {
                // FECHANDO
                mobileMenu.classList.replace('translate-x-0', 'translate-x-full');
                document.body.style.overflow = '';
                if (menuPath) menuPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
                updateHeader(); 
            } else {
                // ABRINDO
                mobileMenu.classList.replace('translate-x-full', 'translate-x-0');
                document.body.style.overflow = 'hidden';
                if (menuPath) menuPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                
                // No menu aberto, o botão sempre fica branco sobre o azul
                menuBtn.classList.add('text-white');
                menuBtn.classList.remove('text-torreBlue');
            }
        });
    }

    // Fecha menu ao clicar nos links
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.replace('translate-x-0', 'translate-x-full');
            document.body.style.overflow = '';
            if (menuPath) menuPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            updateHeader();
        });
    });

    // 4. Ativação dos Eventos
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Roda uma vez ao carregar caso a página já comece scrollada
});



// Configuração Base
const sr = ScrollReveal({
    distance: '30px',
    duration: 1000,
    delay: 200,
    reset: false // Premium: Animação apenas na primeira vez
});

// 1. Revelação do Hero (Abertura impactante)
sr.reveal('main section:first-child span', { origin: 'bottom', delay: 300 });
sr.reveal('main section:first-child h1', { origin: 'bottom', delay: 500 });
sr.reveal('main section:first-child p', { origin: 'bottom', delay: 700, interval: 200 });

// 2. Revelação dos Blocos da Timeline (Efeito Sequencial)
// Revela o ano primeiro, depois os marcos internos
sr.reveal('article time', { 
    origin: 'top', 
    distance: '20px', 
    delay: 300 
});

// Revela cada marco (H3 e P) com um leve atraso entre eles
sr.reveal('article .group', { 
    origin: 'bottom', 
    interval: 150, 
    distance: '40px',
    scale: 0.95
});

// 3. Revelação do Bloco 2022 (Destaque Final)
sr.reveal('article:last-of-type', { 
    origin: 'bottom', 
    delay: 400,
    scale: 0.9 
});

// 4. Citação Final
sr.reveal('blockquote', { origin: 'bottom', delay: 300, italic: true });
sr.reveal('blockquote + p', { origin: 'bottom', delay: 500 });


