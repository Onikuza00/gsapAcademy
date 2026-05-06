// Menú responsive
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const navOverlay = document.getElementById('navOverlay');

function toggleNav() {
  mainNav.classList.toggle('active');
  navOverlay.classList.toggle('active');
}

if (navToggle) navToggle.addEventListener('click', toggleNav);
if (navOverlay) navOverlay.addEventListener('click', toggleNav);

// Copiar código
function copyCode(btn) {
  const code = btn.parentElement.querySelector('code').innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = '<i class="fas fa-check"></i> Copiado';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = '<i class="fas fa-copy"></i> Copiar';
    }, 2000);
  });
}

// --- Utilidades de Interfaz ---
function flashLabel(container) {
  const label = container.querySelector('.effect-demo-label');
  if (!label) return;
  
  label.classList.add('active');
  // Se apaga después de un tiempo prudencial (2s) o al terminar la animación
  setTimeout(() => label.classList.remove('active'), 2500);
}

// --- Lógica de Efectos ---
gsap.registerPlugin(SplitText, ScrollTrigger);

// Efecto 01: Máscara Horizontal
let split01;
function initEffect01(mode = 'bottom') {
  const container = document.querySelector('.effect-demo-01');
  flashLabel(container);
  
  console.log(`Iniciando Efecto 01 en modo: ${mode}...`);
  const target = document.getElementById('demo-01');
  if (!target) return;

  if (split01) split01.revert();
  
  // Configuraciones según el modo
  let config = {
    duration: 1,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.1
  };

  switch(mode) {
    case 'top':
      config.yPercent = -100;
      config.clipPath = 'inset(100% 0 0 0)'; // Empieza oculto arriba
      break;
    case 'bottom':
      config.yPercent = 100;
      config.clipPath = 'inset(0 0 100% 0)'; // Empieza oculto abajo
      config.ease = "back.out(1.7)";
      break;
    case 'left':
      config.xPercent = -100;
      config.clipPath = 'inset(0 0 0 100%)'; // Empieza oculto a la izquierda
      config.stagger = { each: 0.1, from: "start" };
      break;
    case 'right':
      config.xPercent = 100;
      config.clipPath = 'inset(0 100% 0 0)'; // Empieza oculto a la derecha
      config.stagger = { each: 0.1, from: "end" };
      break;
    case 'center':
      config.yPercent = 20;
      config.scale = 0;
      config.stagger = { each: 0.1, from: "center" };
      break;
    case 'edges':
      config.yPercent = 20;
      config.scale = 2;
      config.stagger = { each: 0.1, from: "edges" };
      break;
  }

  setTimeout(() => {
    try {
      split01 = new SplitText("#demo-01", { type: "chars, lines" });
      
      // Aseguramos que el contenedor tenga overflow hidden para el recorte
      gsap.set("#demo-01-container", { overflow: "hidden" });
      
      gsap.from(split01.chars, config);
    } catch (e) {
      console.error("Error en Efecto 01:", e);
    }
  }, 200);
}

// Efecto 02: Levantado 3D
let split02;
function initEffect02(mode = 'left') {
  const container = document.querySelector('.effect-demo-02');
  flashLabel(container);
  console.log(`Iniciando Efecto 02 en modo: ${mode}...`);
  const target = document.getElementById('demo-02');
  if (!target) return;

  if (split02) split02.revert();

  let startX = "0%", startY = "0%", staggerFrom = "start";

  switch(mode) {
    case 'top': startY = "-200%"; break;
    case 'bottom': startY = "200%"; break;
    case 'left': startX = "-200%"; staggerFrom = "start"; break;
    case 'right': startX = "200%"; staggerFrom = "end"; break;
    case 'center': startY = "100%"; staggerFrom = "center"; break;
    case 'edges': startY = "100%"; staggerFrom = "edges"; break;
  }

  setTimeout(() => {
    try {
      split02 = new SplitText("#demo-02", { type: "chars" });
      const lt = gsap.timeline();
      
      gsap.set(split02.chars, { opacity: 0, x: startX, y: startY, rotate: 10 });
      
      lt.to(split02.chars, {
        duration: 1.2,
        x: "0%",
        y: "0%",
        rotate: 0,
        opacity: 1,
        ease: "elastic.out(1, 0.5)",
        stagger: { each: 0.05, from: staggerFrom }
      });
    } catch (e) {
      console.error("Error en Efecto 02:", e);
    }
  }, 200);
}

// Efecto 03: Despliegue 3D (Eje X)
function initEffect03() {
  const container = document.querySelector('.effect-demo-03');
  flashLabel(container);
  console.log("Iniciando Efecto 03...");
  const target = document.getElementById('demo-03');
  if (!target) return;

  // En esta réplica exacta usamos la estructura HTML manual de .line span
  const lines = target.querySelectorAll('.line span');
  const paragraph = document.querySelector('#demo-03-container p');
  const button = document.querySelector('#demo-03-container button');

  // Limpiamos solo transformaciones y opacidad para no perder el tamaño de fuente
  gsap.set([lines, paragraph, button], { clearProps: "transform,opacity" });

  const tl = gsap.timeline({
    onComplete: () => console.log("Réplica 03 completada")
  });

  lines.forEach((line, i) => {
    tl.from(line, {
      duration: 1,
      rotateY: i % 2 === 0 ? -90 : 90,
      opacity: 0,
      transformOrigin: 'center center',
      transformStyle: 'preserve-3d',
      ease: 'power2.out'
    }, i * 0.15);
  });

  tl.from(paragraph, {
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: 'power2.out'
  }, 0.5);

  tl.from(button, {
    duration: 0.6,
    opacity: 0,
    y: 20,
    ease: 'power2.out'
  }, 0.7);
}

// Efecto 04: Despliegue Lateral (Eje Y)
function initEffect04() {
  const container = document.querySelector('.effect-demo-04');
  flashLabel(container);
  console.log("Iniciando Efecto 04...");
  const target = document.getElementById('demo-04');
  if (!target) return;

  const lines = target.querySelectorAll('.line span');
  const paragraph = document.querySelector('#demo-04-container p');
  const button = document.querySelector('#demo-04-container button');

  gsap.set([lines, paragraph, button], { clearProps: "transform,opacity" });

  const tl = gsap.timeline({
    onComplete: () => console.log("Réplica 04 completada")
  });

  lines.forEach((line, i) => {
    tl.from(line, {
      duration: 1.2,
      rotateX: -90,
      rotateY: i % 2 === 0 ? 45 : -45,
      opacity: 0,
      transformOrigin: 'center center',
      transformStyle: 'preserve-3d',
      ease: 'power2.out'
    }, i * 0.15);
  });

  tl.from(paragraph, {
    duration: 0.8,
    opacity: 0,
    y: 30,
    ease: 'power2.out'
  }, 0.5);

  tl.from(button, {
    duration: 0.6,
    opacity: 0,
    y: 20,
    ease: 'power2.out'
  }, 0.7);
}

// Función genérica para reiniciar demos placeholder
function restartDemo(id) {
  const box = document.getElementById(id);
  if (box) {
    gsap.fromTo(box, { rotation: 0 }, { rotation: 360, duration: 1, ease: "power2.inOut" });
  }
}

// Animación de entrada inicial
document.addEventListener('DOMContentLoaded', () => {
  // Animaciones de entrada de la interfaz
  gsap.from('header', { y: -80, opacity: 0, duration: 0.8, ease: 'power3.out' });
  gsap.from('.effect-card', { y: 40, opacity: 0, duration: 0.6, stagger: 0.08, delay: 0.2, ease: 'power3.out' });
  
  // Inicializamos los efectos
  initEffect01();
  initEffect02();
  initEffect03();
  initEffect04();
});

// Interacción hover para demos placeholder
document.querySelectorAll('.demo-box').forEach((box) => {
  box.addEventListener('mouseenter', () => {
    gsap.to(box, { scale: 1.15, duration: 0.3, ease: 'back.out(2)' });
  });
  box.addEventListener('mouseleave', () => {
    gsap.to(box, { scale: 1, duration: 0.3, ease: 'power3.out' });
  });
});
