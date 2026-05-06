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
let split01, tl01;
function initEffect01(mode = 'bottom') {
  const container = document.querySelector('.effect-demo-01');
  flashLabel(container);
  
  const target = document.getElementById('demo-01');
  if (!target) return;

  // 1. Limpieza absoluta
  if (tl01) tl01.kill();
  if (split01) split01.revert();
  gsap.killTweensOf(target);
  gsap.set(target, { clearProps: "all" });
  
  console.log(`Iniciando Efecto 01 en modo: ${mode}...`);
  
  // Configuraciones según el modo
  let config = {
    duration: 0.6,
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
      gsap.set("#demo-01-container", { overflow: "hidden" });
      
      tl01 = gsap.timeline();
      tl01.from(split01.chars, config);
    } catch (e) {
      console.error("Error en Efecto 01:", e);
    }
  }, 20);
}

// Efecto 02: Levantado 3D
let split02, tl02;
function initEffect02(mode = 'left') {
  const container = document.querySelector('.effect-demo-02');
  flashLabel(container);
  
  const target = document.getElementById('demo-02');
  if (!target) return;

  // Limpieza absoluta
  if (tl02) tl02.kill();
  if (split02) split02.revert();
  gsap.killTweensOf(target);
  gsap.set(target, { clearProps: "all" });

  console.log(`Iniciando Efecto 02 en modo: ${mode}...`);

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
      tl02 = gsap.timeline();
      
      gsap.set(split02.chars, { 
        opacity: 0, 
        x: startX, 
        y: startY, 
        rotate: 30, 
        skewX: 40,
        scale: 2
      });
      
      tl02.to(split02.chars, {
        duration: 1.5,
        x: "0%",
        y: "0%",
        rotate: 0,
        skewX: 0,
        scale: 1,
        opacity: 1,
        ease: "elastic.out(1, 0.4)",
        stagger: { each: 0.1, from: staggerFrom }
      });
    } catch (e) {
      console.error("Error en Efecto 02:", e);
    }
  }, 200);
}

// Efecto 03: Despliegue 3D
let tl03;
function initEffect03(mode = 'alternate') {
  const container = document.querySelector('.effect-demo-03');
  flashLabel(container);
  
  const target = document.getElementById('demo-03');
  if (!target) return;

  // Limpieza absoluta
  if (tl03) tl03.kill();
  gsap.killTweensOf(target);
  const spans = target.querySelectorAll('.line span');
  gsap.set(spans, { clearProps: "all" });

  console.log(`Iniciando Efecto 03 en modo: ${mode}...`);
  
  let rotX = 0, rotY = 0, origin = "center center", staggerFrom = "start";
  let isAlternating = false;

  switch(mode) {
    case 'alternate': 
      isAlternating = true; 
      break;
    case 'top': 
      rotX = -90; 
      origin = "top center"; 
      break;
    case 'bottom': 
      rotX = 90; 
      origin = "bottom center"; 
      break;
    case 'left': 
      rotY = -90; 
      origin = "left center"; 
      staggerFrom = "start";
      break;
    case 'right': 
      rotY = 90; 
      origin = "right center"; 
      staggerFrom = "end";
      break;
    case 'center': 
      rotX = -90; 
      origin = "center center"; 
      staggerFrom = "center"; 
      break;
    case 'edges': 
      rotX = 90; 
      origin = "center center"; 
      staggerFrom = "edges"; 
      break;
  }

  // Preparación de estado inicial
  if (isAlternating) {
    // Alternamos por LÍNEA, no por span, para que "con Gsap" gire unido
    const lines = target.querySelectorAll('.line');
    lines.forEach((line, i) => {
      const lineSpans = line.querySelectorAll('span');
      gsap.set(lineSpans, { 
        opacity: 0, 
        rotationY: i % 2 === 0 ? -90 : 90, 
        transformOrigin: i % 2 === 0 ? "left center" : "right center" 
      });
    });
  } else {
    gsap.set(spans, { 
    opacity: 0, 
    rotationX: rotX,
    rotationY: rotY,
    transformOrigin: origin
  });
  }
  
  tl03 = gsap.timeline();

  tl03.to(spans, {
    duration: 1.4,
    opacity: 1,
    rotationX: 0,
    rotationY: 0,
    ease: "power3.out",
    stagger: { each: 0.15, from: staggerFrom }
  });
}

// Efecto 04: Revelado Atmosférico (Blur & Scale)
let tl04;
function initEffect04(mode = 'bottom') {
  const container = document.querySelector('.effect-demo-04');
  flashLabel(container);
  
  const target = document.getElementById('demo-04');
  if (!target) return;

  // Limpieza absoluta
  if (tl04) tl04.kill();
  gsap.killTweensOf(target);
  const spans = target.querySelectorAll('.line span');
  gsap.set(spans, { clearProps: "all" });

  console.log(`Iniciando Efecto 04 en modo: ${mode}...`);

  let rotX = 0, rotY = 0, staggerFrom = "start";

  switch(mode) {
    case 'top': rotX = -90; rotY = 15; break;
    case 'bottom': rotX = 90; rotY = -15; break;
    case 'left': rotY = -90; rotX = 15; staggerFrom = "start"; break;
    case 'right': rotY = 90; rotX = -15; staggerFrom = "end"; break;
    case 'center': rotX = -90; rotY = 45; staggerFrom = "center"; break;
    case 'edges': rotX = 90; rotY = -45; staggerFrom = "edges"; break;
  }

  tl04 = gsap.timeline();

  tl04.from(spans, {
    duration: 1.2,
    opacity: 0,
    rotationX: rotX,
    rotationY: (i) => i % 2 === 0 ? rotY : -rotY, // El toque original de alternancia
    transformOrigin: "center center",
    transformStyle: "preserve-3d",
    ease: "power2.out",
    stagger: {
      each: 0.12,
      from: staggerFrom
    }
  });
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
