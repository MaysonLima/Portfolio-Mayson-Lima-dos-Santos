// =================== WhatsApp ===================
function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5577991508733';

    const texto = `Olá, me chamo ${nome}, ${mensagem}`;
    const msgformatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgformatada}`;
    window.open(url, '_blank');
}

// =================== Digitação do Nome ===================
const texto = "<MAYSON LIMA>";
const elemento = document.querySelector(".nome_mayson");
let index = 0;

function digitar(){
    if(index < texto.length){
        elemento.textContent += texto.charAt(index);
        index++;
        setTimeout(digitar, 200);
    }
}

digitar();

// =================== Carrossel ===================
const track = document.querySelector('.tech-track');
const container = document.querySelector('.tech-container');

let position = 0;
let speed = 0.5;
let targetSpeed = 0.5;

function getHalfWidth(){
    return track.scrollWidth / 2;
}

let halfWidth = getHalfWidth();

window.addEventListener('resize', () => {
    halfWidth = getHalfWidth();
});

container.addEventListener('mouseenter', () => {
    targetSpeed = 0.1;
});

container.addEventListener('mouseleave', () => {
    targetSpeed = 0.5;
});

function animateCarousel(){
    speed += (targetSpeed - speed) * 0.05;
    position -= speed;

    if(position <= -halfWidth){
        position += halfWidth;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateCarousel);
}

setTimeout(() => {
    halfWidth = getHalfWidth();
    animateCarousel();
}, 100);

// =================== Partículas ===================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ajusta número de partículas para mobile
let numParticles = window.innerWidth < 768 ? 30 : 60;
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
        this.x += this.vx;
        this.y += this.vy;

        if(this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if(this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw(){
        ctx.fillStyle = "rgba(70, 107, 229, 0)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

for(let i = 0; i < numParticles; i++){
    particles.push(new Particle());
}

function connectParticles(){
    for(let a = 0; a < particles.length; a++){
        for(let b = a; b < particles.length; b++){
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = dx * dx + dy * dy;

            if(distance < 19000){
                ctx.strokeStyle = "rgba(43, 35, 184, 0.74)";
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

            if(distance < 20000){
                ctx.strokeStyle = "rgba(43, 35, 184, 0.74)";
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

animateParticles();

// Redimensionamento
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Ajusta número de partículas ao mudar tamanho da tela
    const newNum = window.innerWidth < 768 ? 15 : 30;
    if(newNum > particles.length){
        for (let i = particles.length; i < newNum; i++){
            particles.push(new Particle());
        }
    } else if(newNum < particles.length){
        particles = particles.slice(0, newNum);
    }
});