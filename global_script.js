// =================== WhatsApp ===================
function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email')?.value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5577991508733';

    const texto = `Olá! Me chamo ${nome}${email ?`, email: ${email}` : ''}, ${mensagem}`;
    const msgformatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgformatada}`;
    window.open(url, '_blank');
}

// =================== Digitação do Nome ===================
const texto = "MAYSON LIMA";
const elemento = document.querySelector(".nome_mayson");
let index = 0;

function digitar(){
    if(elemento && index < texto.length){
        elemento.textContent += texto.charAt(index);
        index++;
        setTimeout(digitar, 110);
    }
}

if(elemento){
    digitar();
}

// =================== Custom cursor ===================
const customCursor = document.createElement('div');
customCursor.className = 'custom-cursor';
customCursor.innerHTML = '<div class="cursor-ring"></div><div class="cursor-dot"></div>';
document.body.appendChild(customCursor);

let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
let displayX = cursorX;
let displayY = cursorY;
let isHoveringButton = false;
let lastMouseTime = performance.now();
let isMouseMoving = true;

window.addEventListener('mousemove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;
    lastMouseTime = performance.now();
    isMouseMoving = true;
    customCursor.classList.remove('hidden');
});

window.addEventListener('mouseleave', () => {
    customCursor.classList.add('hidden');
});

window.addEventListener('mouseenter', () => {
    customCursor.classList.remove('hidden');
});

// Nav shrink on scroll
const nav = document.querySelector('.navegacao');
function handleNavScroll(){
    if(!nav) return;
    if(window.matchMedia('(max-width: 760px)').matches){
        nav.classList.remove('small');
        return;
    }
    if(window.scrollY > 48){
        nav.classList.add('small');
    } else {
        nav.classList.remove('small');
    }
}
window.addEventListener('scroll', handleNavScroll);
window.addEventListener('resize', handleNavScroll);
handleNavScroll();

// Language toggle (simple client-side swap)
const langToggleBtn = document.getElementById('langToggle');
const langOptionBtns = document.querySelectorAll('.lang-option[data-lang-target]');
const translations = {
    pt: {
        menu: ['Início','Sobre','Projetos','Resumo','Contato'],
        brandRole: 'Desenvolvedor Full-Stack',
        heroGreeting: 'OLÁ, EU SOU',
        heroRole: 'DESENVOLVEDOR FULL-STACK EM FORMAÇÃO',
        heroProjects: 'Ver Projetos',
        heroDownload: 'Baixar Currículo',
        scrollHint: 'Role para explorar',
        aboutP1: '• Estudante de Análise e Desenvolvimento de Sistemas na PUC Minas.',
        aboutP2: '• Construo projetos para aplicar na prática o que estudo e evoluir constantemente.',
        aboutP3: '• Vivência com atendimento ao público, desenvolvendo responsabilidade, comunicação e resolução de problemas.',
        aboutP4: '• Busco minha primeira oportunidade como desenvolvedor para crescer na área e contribuir com soluções reais.',
        seeMore: 'Ver Mais',
        projectsTitle: 'Meus Projetos',
        projectAiDesc: 'Projeto full stack com React, Node.js, Express e OpenAI para simular a qualificação inteligente de leads comerciais.',
        projectSermoTitle: 'Sermo - Em desenvolvimento',
        projectSermoDesc: 'Projeto sendo elaborado utilizando React, Node.js, Tailwind e PostgreSQL.',
        projectConnectTitle: 'Connecta Easy - Em desenvolvimento',
        projectConnectDesc: 'Projeto acadêmico sendo elaborado em equipe para a disciplina de projetos no curso de Análise e Desenvolvimento de Sistemas da PUC Minas.',
        projectDetails: 'Ver detalhes do projeto',
        heroProj: 'Ver Projetos',
        contactTitle: 'Contato',
        contactSubtitle: 'Aberto a oportunidades como desenvolvedor estagiário ou júnior, projetos web e conversas sobre tecnologia. O jeito mais rápido de falar comigo é por aqui.',
        contactHeading: 'Vamos criar algo juntos.',
        formName: 'Nome',
        formNamePlaceholder: 'Seu nome',
        formEmail: 'E-mail',
        formEmailPlaceholder: 'seu@email.com',
        formMessage: 'Mensagem',
        formMessagePlaceholder: 'Me conte sobre a oportunidade, projeto ou ideia...',
        sendBtn: 'Enviar mensagem',
        contactProtected: 'Mensagem enviada pelo WhatsApp.',
        resumeEyebrow: 'RESUMO',
        resumeIntro: 'Confira meu currículo completo nas imagens abaixo. Use o seletor PT/EN no menu para alternar entre português e inglês. ;]',
        resumeDownload: 'Download PDF',
        resumeOpen: 'Abrir em nova aba',
        resumeImages: [
            { src: '1 pt-br.jpg', alt: 'Currículo de Mayson Lima em português, página 1' },
            { src: '2 pt-br.jpg', alt: 'Currículo de Mayson Lima em português, página 2' }
        ],
        moreEyebrow: 'Mais sobre mim',
        moreTitle: 'Desenvolvedor em formação, construindo com intenção.',
        moreIntro: 'Sou estudante de Análise e Desenvolvimento de Sistemas na PUC Minas e venho transformando estudo em projetos práticos. Meu foco é crescer como desenvolvedor full-stack, criando interfaces claras, APIs úteis e soluções que resolvem problemas reais.',
        moreStat1: 'ADS em andamento',
        moreStat2: 'Residente no interior da Bahia',
        moreStat3: 'React, Node, Java, Python e SQL',
        moreBlock1Title: 'Como eu trabalho',
        moreBlock1Text: 'Gosto de entender o problema antes de escrever a solução. Minha experiência com atendimento ao público fortaleceu comunicação, responsabilidade e escuta, pontos que levo para o desenvolvimento.',
        moreBlock2Title: 'O que venho construindo',
        moreBlock2Text: 'Tenho projetos com React, Node.js, Express, OpenAI API, C#, PostgreSQL e interfaces responsivas. Cada entrega é uma forma de praticar arquitetura, experiência do usuário e integração entre front-end e back-end.',
        moreBlock3Title: 'Próximo passo',
        moreBlock3Text: 'Busco minha primeira oportunidade como desenvolvedor para aprender com um time, contribuir em produtos reais e evoluir com consistência.',
        moreProfileKicker: 'Perfil',
        moreProfileTitle: 'Desenvolvimento com clareza, curiosidade e consistência.',
        moreProfile1Label: 'Base',
        moreProfile1Text: 'Estudando remotamente, criando projetos reais e buscando minha primeira oportunidade em desenvolvimento.',
        moreProfile2Label: 'Foco',
        moreProfile2Text: 'Interfaces responsivas, APIs úteis, integração com dados e soluções pensadas para pessoas.',
        moreProfile3Label: 'Stack',
        moreProfile3Text: 'Tecnologias que venho praticando em projetos acadêmicos e pessoais.',
        footerSub: 'Desenvolvedor de software, Jacaraci, BA',
        footerProjects: 'Projetos',
        footerResume: 'Resumo',
        footerAbout: 'Sobre',
        footerEmail: 'Contato',
        footerBuilt: 'Do conceito ao código.',
    },
    en: {
        menu: ['Home','About','Projects','Resume','Contact'],
        brandRole: 'Full-Stack Developer',
        heroGreeting: 'HELLO THERE, I AM',
        heroRole: 'FULL-STACK DEVELOPER IN TRAINING',
        heroProjects: 'View Projects',
        heroDownload: 'Download Resume',
        scrollHint: 'Scroll to explore',
        aboutP1: '• Systems Analysis and Development student at PUC Minas.',
        aboutP2: '• I build projects to turn what I study into practice and keep improving.',
        aboutP3: '• Experience with customer service, developing responsibility, communication, and problem solving.',
        aboutP4: '• I am looking for my first developer opportunity to grow in the field and contribute to real solutions.',
        seeMore: 'See More',
        projectsTitle: 'My Projects',
        projectAiDesc: 'Full-stack project with React, Node.js, Express, and OpenAI to simulate intelligent commercial lead qualification.',
        projectSermoTitle: 'Sermo - In development',
        projectSermoDesc: 'Project being built with React, Node.js, Tailwind, and PostgreSQL.',
        projectConnectTitle: 'Connecta Easy - In development',
        projectConnectDesc: 'Academic team project for the Systems Analysis and Development course at PUC Minas.',
        projectDetails: 'View project details',
        heroProj: 'View Projects',
        contactTitle: 'Contact',
        contactSubtitle: "Open to intern or junior developer roles, web projects, and conversations about technology. The fastest way to reach me is right here.",
        contactHeading: "Let's build something.",
        formName: 'Name',
        formNamePlaceholder: 'Your name',
        formEmail: 'Email',
        formEmailPlaceholder: 'you@email.com',
        formMessage: 'Message',
        formMessagePlaceholder: 'Tell me about the opportunity, project, or idea...',
        sendBtn: 'Send message',
        contactProtected: 'Message sent through WhatsApp.',
        resumeEyebrow: 'RESUME',
        resumeIntro: 'See my full resume in the images below. Use the PT/EN switch in the nav to change languages. ;] ',
        resumeDownload: 'Download PDF',
        resumeOpen: 'Open in new tab',
        resumeImages: [
            { src: '1 en (1).jpg', alt: 'Mayson Lima resume in English, page 1' },
            { src: '2 en (1).jpg', alt: 'Mayson Lima resume in English, page 2' }
        ],
        moreEyebrow: 'More about me',
        moreTitle: 'A developer in progress, building with intention.',
        moreIntro: 'I study Systems Analysis and Development at PUC Minas and turn study into practical projects. My focus is growing as a full-stack developer, creating clear interfaces, useful APIs, and solutions for real problems.',
        moreStat1: 'Systems Analysis in progress',
        moreStat2: 'based in inland Bahia',
        moreStat3: 'React, Node, Java, Python, and SQL',
        moreBlock1Title: 'How I work',
        moreBlock1Text: 'I like understanding the problem before writing the solution. My customer service experience strengthened communication, responsibility, and active listening, which I bring into development.',
        moreBlock2Title: 'What I have been building',
        moreBlock2Text: 'I have projects with React, Node.js, Express, OpenAI API, C#, PostgreSQL, and responsive interfaces. Each delivery helps me practice architecture, user experience, and front-end/back-end integration.',
        moreBlock3Title: 'Next step',
        moreBlock3Text: 'I am looking for my first developer opportunity to learn with a team, contribute to real products, and grow consistently.',
        moreProfileKicker: 'Profile',
        moreProfileTitle: 'Development with clarity, curiosity, and consistency.',
        moreProfile1Label: 'Base',
        moreProfile1Text: 'Studying remotely, building real projects, and looking for my first opportunity in development.',
        moreProfile2Label: 'Focus',
        moreProfile2Text: 'Responsive interfaces, useful APIs, data integration, and solutions designed for people.',
        moreProfile3Label: 'Stack',
        moreProfile3Text: 'Technologies I have been practicing in academic and personal projects.',
        footerSub: 'Software developer, Jacaraci, BA',
        footerProjects: 'Projects',
        footerResume: 'Resume',
        footerAbout: 'About',
        footerEmail: 'Email',
        footerBuilt: 'From concept to code.',
    }
};

window.portfolioTranslations = translations;

function saveLanguagePreference(lang){
    try {
        localStorage.setItem('portfolioLang', lang);
    } catch (error) {
        document.body.dataset.savedLang = lang;
    }
}

function getLanguagePreference(){
    try {
        return localStorage.getItem('portfolioLang');
    } catch (error) {
        return document.body.dataset.savedLang;
    }
}

function syncLanguageControls(lang){
    langOptionBtns.forEach((button) => {
        const isActive = button.dataset.langTarget === lang;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    if(langToggleBtn){
        langToggleBtn.textContent = lang === 'en' ?'PT' : 'EN';
    }
}

function setLanguage(lang){
    document.documentElement.lang = (lang === 'en') ?'en' : 'pt-br';
    document.body.dataset.lang = lang;
    saveLanguagePreference(lang);
    syncLanguageControls(lang);
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        if(translations[lang][key]){
            const value = translations[lang][key];
            if(value.includes('<br>')){
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        if(translations[lang][key]){
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
    document.querySelectorAll('.brand-role').forEach((element) => {
        element.textContent = translations[lang].brandRole;
    });
    // menu
    const menuLinks = document.querySelectorAll('.menu .menu_link');
    if(menuLinks && menuLinks.length >= translations[lang].menu.length){
        menuLinks.forEach((a,i)=>{ a.textContent = translations[lang].menu[i]; });
    }
    // hero projects button
    const heroBtn = document.querySelector('.cabecalho .botao_cv');
    if(heroBtn) heroBtn.textContent = translations[lang].heroProj;
    // contact page
    const ct = document.getElementById('contactTitle');
    const cs = document.getElementById('contactSubtitle');
    const send = document.getElementById('sendBtn');
    if(ct) ct.textContent = translations[lang].contactTitle;
    if(cs) cs.textContent = translations[lang].contactSubtitle;
    if(send){
        const sendLabel = send.querySelector('span') || send;
        sendLabel.textContent = translations[lang].sendBtn;
    }
    window.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { lang, translations: translations[lang] } }));
}

function syncHeroRoleBreak(){
    const heroRole = document.querySelector('[data-i18n="heroRole"]');
    const lang = document.body.dataset.lang === 'en' ? 'en' : 'pt';

    if(!heroRole){
        return;
    }

    if(window.matchMedia('(max-width: 760px)').matches){
        heroRole.innerHTML = lang === 'pt'
            ? 'DESENVOLVEDOR FULL-STACK<br>EM FORMAÇÃO'
            : 'FULL-STACK DEVELOPER<br>IN TRAINING';
        return;
    }

    heroRole.textContent = translations[lang].heroRole;
}

window.addEventListener('resize', syncHeroRoleBreak);
window.addEventListener('portfolio:languagechange', syncHeroRoleBreak);

if(langOptionBtns.length){
    langOptionBtns.forEach((button) => {
        button.addEventListener('click', () => {
            const target = button.dataset.langTarget === 'en' ? 'en' : 'pt';
            setLanguage(target);
        });
    });
}

if(langToggleBtn){
    langToggleBtn.addEventListener('click', () =>{
        const current = document.body.dataset.lang === 'en' ?'en' : 'pt';
        const next = current === 'en' ?'pt' : 'en';
        setLanguage(next);
    });
}

setLanguage(getLanguagePreference() === 'en' ?'en' : 'pt');

// Add hover-ring to interactive elements (links, buttons, CTAs)
const interactiveEls = Array.from(document.querySelectorAll('.botao_cv, .botao_form, a, button, .menu_link, .projeto_cta'))
    .filter(el => !el.matches('input, textarea, select'));

interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
        customCursor.classList.add('hover-ring');
        isHoveringButton = true;
    });
    el.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hover-ring');
        isHoveringButton = false;
        if (el.classList.contains('botao_cv') || el.classList.contains('botao_form')) {
            el.style.transform = '';
        }
    });

    // Only add the micro-parallax on the CV/button-like elements
    if (el.classList.contains('botao_cv') || el.classList.contains('botao_form')) {
        el.addEventListener('mousemove', (event) => {
            const rect = el.getBoundingClientRect();
            const offsetX = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
            const offsetY = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
            el.style.transform = `translate(${offsetX * 8}px, ${offsetY * 8}px)`;
        });
    }

    // Touch support: briefly show ring on touchstart
    el.addEventListener('touchstart', () => {
        customCursor.classList.add('hover-ring');
        setTimeout(() => customCursor.classList.remove('hover-ring'), 450);
    }, {passive: true});
});

function updateCursor(){
    const ease = 0.16;
    displayX += (cursorX - displayX) * ease;
    displayY += (cursorY - displayY) * ease;

    if (performance.now() - lastMouseTime > 1200) {
        isMouseMoving = false;
    }
    customCursor.style.opacity = isMouseMoving ?'1' : '0.92';

    // Position using left/top and keep CSS translate(-50%,-50%) to center the cursor
    customCursor.style.left = `${displayX}px`;
    customCursor.style.top = `${displayY}px`;

    requestAnimationFrame(updateCursor);
}

updateCursor();

// =================== Carrossel ===================
const track = document.querySelector('.tech-track');
const container = document.querySelector('.tech-container');

let position = 0;
let speed = 0.5;
let targetSpeed = 0.5;

function getHalfWidth(){
    return track.scrollWidth / 2;
}

let halfWidth = track ?getHalfWidth() : 0;

if(track){
    window.addEventListener('resize', () => {
        halfWidth = getHalfWidth();
    });
}

if(container){
    container.addEventListener('mouseenter', () => {
        targetSpeed = 0.1;
    });

    container.addEventListener('mouseleave', () => {
        targetSpeed = 0.5;
    });
}

function animateCarousel(){
    speed += (targetSpeed - speed) * 0.05;
    position -= speed;

    if(position <= -halfWidth){
        position += halfWidth;
    }

    if(track){
        track.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animateCarousel);
    }
}

if(track){
    setTimeout(() => {
        halfWidth = getHalfWidth();
        animateCarousel();
    }, 100);
}

// =================== Foto pressionar e segurar ===================
const fotoSobre = document.getElementById('fotoSobre');
const fotoMessage = document.getElementById('fotoMessage');
let photoHoldActive = false;
let photoHoldCenter = null;
let photoRelease = false;
let photoReleaseStart = 0;

const canvas = document.getElementById("particles");
const ctx = canvas ?canvas.getContext("2d") : null;

if(canvas){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', () => {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    if (track) {
        halfWidth = getHalfWidth();
    }
});

let numParticles;
function getNumParticles() {
    if(window.innerWidth < 480){
        return 20; // mobile pequeno
    } else if(window.innerWidth < 768){
        return 30; // mobile médio
    } else {
        return 75; // desktop
    }
}

numParticles = getNumParticles();
let particles = [];

let mouse = { x: null, y: null };

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener("touchmove", (e) => {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
});

class Particle {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1;
        this.vy = (Math.random() - 0.5) * 1;
    }

    update(){
        if (photoHoldActive || photoRelease) {
            applyPhotoParticleBehavior(this);
        }

        this.x += this.vx;
        this.y += this.vy;

        const padding = 8;

        if(this.x < -padding){
            this.x = canvas.width + padding;
        } else if(this.x > canvas.width + padding){
            this.x = -padding;
        }

        if(this.y < -padding){
            this.y = canvas.height + padding;
        } else if(this.y > canvas.height + padding){
            this.y = -padding;
        }

    }

    draw(){
        ctx.fillStyle = "rgba(255, 255, 255, 0.56)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Inicializa partículas
for(let i = 0; i < numParticles; i++){
    if(canvas){
        particles.push(new Particle());
    }
}

function connectParticles(){
    for(let a = 0; a < particles.length; a++){
        for(let b = a; b < particles.length; b++){
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = dx * dx + dy * dy;

            if(distance < 17000){
                ctx.strokeStyle = "rgba(78, 70, 229, 0.24)";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }

        if(mouse.x && mouse.y){
            let dx = particles[a].x - mouse.x;
            let dy = particles[a].y - mouse.y;
            let distance = dx * dx + dy * dy;

            if(distance < 19000){
                ctx.strokeStyle = "rgba(78, 70, 229, 0.12)";
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    connectParticles();
    requestAnimationFrame(animateParticles);
}

if(canvas && ctx){
    animateParticles();
}

// Redimensionamento
window.addEventListener("resize", () => {
    if(!canvas){
        return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Ajusta número de partículas
    const newNum = getNumParticles();

    if(newNum > particles.length){
        for (let i = particles.length; i < newNum; i++){
            particles.push(new Particle());
        }
    } else if(newNum < particles.length){
        particles = particles.slice(0, newNum);
    }
});

function createImageLightbox(){
    if(document.getElementById('image-lightbox')){
        return;
    }

    const overlay = document.createElement('div');
    overlay.id = 'image-lightbox';
    overlay.innerHTML = `
        <button type="button" class="lightbox-close" aria-label="Fechar">×</button>
        <img src="" alt="" />
    `;
    document.body.appendChild(overlay);

    const img = overlay.querySelector('img');
    const closeButton = overlay.querySelector('.lightbox-close');

    overlay.addEventListener('click', (event) => {
        if(event.target === overlay){
            overlay.classList.remove('open');
            img.src = '';
            img.alt = '';
        }
    });

    closeButton.addEventListener('click', () => {
        overlay.classList.remove('open');
        img.src = '';
        img.alt = '';
    });

    window.addEventListener('keydown', (event) => {
        if(event.key === 'Escape' && overlay.classList.contains('open')){
            overlay.classList.remove('open');
            img.src = '';
            img.alt = '';
        }
    });
}

function openImageLightbox(src, alt){
    createImageLightbox();
    const overlay = document.getElementById('image-lightbox');
    const img = overlay.querySelector('img');
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('open');
}

document.addEventListener('click', (event) => {
    const target = event.target;

    if(target.matches('.projeto_card_visual img, .galeria_item img')){
        event.preventDefault();
        openImageLightbox(target.src, target.alt);
    }
});

function initScrollReveal(){
    const revealSelectors = [
        '.hero-texto',
        '.sobre_imagem',
        '.sobre_texto',
        '.tech-container',
        '.projetos_titulo',
        '.projetos_caixa > *',
        '.contato_intro',
        '.formulario_contato',
        '.more_hero > *',
        '.more_sections > *',
        '.more_stats > *',
        '.projeto_hero',
        '.projeto_grid > *',
        '.projeto_metricas > *',
        '.projeto_split > *'
    ];

    const revealItems = Array.from(document.querySelectorAll(revealSelectors.join(',')))
        .filter((item, index, list) => list.indexOf(item) === index);

    if(!revealItems.length){
        return;
    }

    revealItems.forEach((item, index) => {
        item.classList.add('reveal-item');

        if(item.parentElement?.classList.contains('projetos_caixa')){
            const position = Array.from(item.parentElement.children).indexOf(item);
            item.style.setProperty('--reveal-delay', `${Math.min(position * 90, 220)}ms`);
        } else {
            item.style.setProperty('--reveal-delay', `${Math.min(index % 3 * 70, 140)}ms`);
        }
    });

    document.body.classList.add('reveal-ready');

    if(!('IntersectionObserver' in window)){
        revealItems.forEach((item) => item.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px'
    });

    revealItems.forEach((item) => observer.observe(item));

    window.setTimeout(() => {
        revealItems.forEach((item) => item.classList.add('is-visible'));
    }, 1800);
}

initScrollReveal();
