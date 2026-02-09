document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('#main-header');
    const logoImg = document.querySelector('#logo-img');
    const navLinks = document.querySelector('#nav-links');
    const menuBtn = document.querySelector('#menu-btn');
    const mobileMenu = document.querySelector('#mobile-menu');
    const menuPath = document.querySelector('#menu-path');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function updateHeader() {
        if (!header) return;
        
        // Verifica se o menu está aberto
        const isOpened = mobileMenu && mobileMenu.classList.contains('translate-x-0');

        if (window.scrollY > 50 || isOpened) {
            header.classList.add('bg-white', 'shadow-md', 'py-4');
            header.classList.remove('bg-transparent', 'py-6');
            if (logoImg) logoImg.src = '/imagens/LOGO.svg';
            
            if (navLinks) {
                navLinks.classList.add('text-torreBlue');
                navLinks.classList.remove('text-white');
            }

            // LÓGICA DO BOTÃO: Se estiver aberto, fica branco. Se fechado e com scroll, azul.
            if (menuBtn) {
                if (isOpened) {
                    menuBtn.classList.add('text-white');
                    menuBtn.classList.remove('text-torreBlue');
                } else {
                    menuBtn.classList.add('text-torreBlue');
                    menuBtn.classList.remove('text-white');
                }
            }
        } else {
            // ESTADO TOPO (Sem scroll e menu fechado)
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
            // Chama o update logo após a mudança de classe
            updateHeader();
        });
    }

    // Fecha ao clicar no link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.replace('translate-x-0', 'translate-x-full');
            document.body.style.overflow = '';
            if (menuPath) menuPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            updateHeader();
        });
    });

    window.addEventListener('scroll', updateHeader);
    updateHeader();

    // ScrollReveal permanece o mesmo
    const sr = ScrollReveal({
        distance: '30px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    sr.reveal('.max-w-5xl h1', { origin: 'bottom', delay: 300 });
    sr.reveal('.max-w-5xl p', { origin: 'left', delay: 500 });
    sr.reveal('.space-y-10 p', { origin: 'bottom', interval: 200 });
    sr.reveal('.bg-slate-50', { origin: 'right', delay: 400, scale: 0.98 });
    sr.reveal('.mt-24', { origin: 'bottom', delay: 500 });
});