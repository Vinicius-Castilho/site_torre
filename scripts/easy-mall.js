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

// Configuração do ScrollReveal para Desenvolvimento Imobiliário
const sr = ScrollReveal({
    distance: '30px',
    duration: 1000,
    delay: 200,
    reset: false // Mantém a sobriedade (não repete ao subir)
});

// 1. Revelação do Hero (Entrada de impacto)
sr.reveal('.max-w-5xl span', { origin: 'bottom', delay: 300 });
sr.reveal('.max-w-5xl h1', { origin: 'bottom', delay: 500, distance: '40px' });
sr.reveal('.max-w-5xl p', { origin: 'left', delay: 800, distance: '20px' });

// 2. Conteúdo Institucional (Ritmo de leitura)
sr.reveal('.space-y-10 p', { 
    origin: 'bottom', 
    interval: 250, // Um pouco mais lento para valorizar o texto
    distance: '20px' 
});

// 3. Seção de Empreendimentos (Destaque do Easy Mall)
sr.reveal('.mb-16', { origin: 'top', delay: 300 }); // Título "Empreendimentos"
sr.reveal('.group.relative.block', { 
    origin: 'bottom', 
    delay: 500, 
    distance: '40px',
    scale: 0.95 // Efeito de profundidade ao surgir
});

// 4. Botão Voltar
sr.reveal('.py-20', { 
    origin: 'bottom', 
    delay: 600,
    distance: '10px'
});
