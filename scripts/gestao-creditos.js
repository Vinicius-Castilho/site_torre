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


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Estilo ao rolar: Header sólido e profissional
        header.classList.add('bg-white', 'shadow-md', 'py-4');
        header.classList.remove('bg-transparent', 'py-6');
        
        // Troca para a versão preta da logo para contraste no fundo branco
        if (logo) logo.src = '/imagens/LOGO.svg'; 

        header.querySelectorAll('nav a').forEach(link => {
            link.classList.add('text-torreBlue');
            link.classList.remove('text-white');
        });
        
    } else {
        // Estilo no topo: Header transparente integrado ao Hero
        header.classList.remove('bg-white', 'shadow-md', 'py-4');
        header.classList.add('bg-transparent', 'py-6');
        
        if (logo) logo.src = '/imagens/LOGO_BRANCA.svg';

        header.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('text-torreBlue');
            link.classList.add('text-white');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('#main-header');
    const logoImg = document.querySelector('#logo-img');
    const menuBtn = document.querySelector('#menu-btn');
    const mobileMenu = document.querySelector('#mobile-menu');
    const menuPath = document.querySelector('#menu-path');
    const navLinks = document.querySelector('#nav-links');

    // 1. Lógica do Header (Transparência e Cores)
    function updateHeader() {
        if (!header) return;
        const isOpened = mobileMenu && mobileMenu.classList.contains('translate-x-0');

        if (window.scrollY > 50 || isOpened) {
            header.classList.add('bg-white', 'shadow-md', 'py-4');
            header.classList.remove('bg-transparent', 'py-6');
            if (logoImg) logoImg.src = '/imagens/LOGO.svg';
            if (menuBtn) {
                if (isOpened) {
                    menuBtn.classList.add('text-white');
                    menuBtn.classList.remove('text-torreBlue');
                } else {
                    menuBtn.classList.add('text-torreBlue');
                    menuBtn.classList.remove('text-white');
                }
            }
            if (navLinks) {
                navLinks.classList.add('text-torreBlue');
                navLinks.classList.remove('text-white');
            }
        } else {
            header.classList.add('bg-transparent', 'py-6');
            header.classList.remove('bg-white', 'shadow-md', 'py-4');
            if (logoImg) logoImg.src = '/imagens/LOGO_BRANCA.svg';
            if (menuBtn) {
                menuBtn.classList.add('text-white');
                menuBtn.classList.remove('text-torreBlue');
            }
            if (navLinks) {
                navLinks.classList.add('text-white');
                navLinks.classList.remove('text-torreBlue');
            }
        }
    }

    // 2. Eventos do Menu Mobile
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('translate-x-0');
            if (isOpen) {
                mobileMenu.classList.replace('translate-x-0', 'translate-x-full');
                document.body.style.overflow = '';
                if (menuPath) menuPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            } else {
                mobileMenu.classList.replace('translate-x-full', 'translate-x-0');
                document.body.style.overflow = 'hidden';
                if (menuPath) menuPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            }
            updateHeader();
        });
    }

    window.addEventListener('scroll', updateHeader);
    updateHeader();

    // 3. Configuração do ScrollReveal (Efeitos de Surgimento)
    const sr = ScrollReveal({
        distance: '40px',
        duration: 1000,
        delay: 200,
        reset: false // Não repete para manter a seriedade
    });

    // Revelação do Hero
    sr.reveal('h1', { origin: 'bottom', delay: 300 });
    sr.reveal('.max-w-2xl', { origin: 'left', delay: 600, distance: '20px' });

    // Conteúdo Institucional (Parágrafos)
    sr.reveal('.space-y-10 p', { 
        origin: 'bottom', 
        interval: 200, 
        distance: '20px' 
    });

    // Box de Destaque (Pragmatismo/Estratégia)
    sr.reveal('.bg-slate-50', { 
        origin: 'right', 
        delay: 400, 
        scale: 0.98,
        distance: '40px' 
    });

    // Botão Voltar
    sr.reveal('.mt-24', { 
        origin: 'bottom', 
        delay: 500,
        distance: '10px' 
    });
});