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
        header.classList.add('bg-white', 'shadow-md', 'py-4');
        header.classList.remove('bg-transparent', 'py-6');
        
        // Troca para a logo preta caso exista
        if (logo) logo.src = '/imagens/LOGO_PRETA.svg'; 

        header.querySelectorAll('nav a').forEach(link => {
            link.classList.add('text-torreBlue');
            link.classList.remove('text-white');
        });
        
        // Ajuste específico para o ícone do menu no mobile
        const menuBtn = document.getElementById('menu-btn');
        if (menuBtn) menuBtn.classList.replace('text-white', 'text-torreBlue');
        
    } else {
        header.classList.remove('bg-white', 'shadow-md', 'py-4');
        header.classList.add('bg-transparent', 'py-6');
        
        if (logo) logo.src = '/imagens/LOGO_BRANCA.svg';

        header.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('text-torreBlue');
            link.classList.add('text-white');
        });

        const menuBtn = document.getElementById('menu-btn');
        if (menuBtn) menuBtn.classList.replace('text-torreBlue', 'text-white');
    }
});