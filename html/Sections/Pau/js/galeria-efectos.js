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

// Efecto 05: Revelado de Distorsión Líquida
let tl05;
function initEffect05(mode = 'liquid') {
  const container = document.querySelector('.effect-demo-05');
  flashLabel(container);
  
  const target = document.getElementById('demo-05');
  const turbulence = document.querySelector('#liquid-filter feTurbulence');
  const distMap = document.querySelector('#liquid-filter feDisplacementMap');
  
  if (!target || !turbulence || !distMap) return;

  // 1. Limpieza absoluta
  if (tl05) tl05.kill();
  gsap.killTweensOf([target, turbulence, distMap]);
  const spans = target.querySelectorAll('.line span');
  gsap.set(spans, { clearProps: "all" });

  console.log(`Iniciando Efecto 05 en modo: ${mode}...`);

  // Configuración sutil y elegante
  let startScale = 60, baseFreq = "0.05", dur = 1.6, ease = "power2.out";

  switch(mode) {
    case 'glitch':
      startScale = 100;
      baseFreq = "0.1 0.01";
      dur = 0.8;
      ease = "steps(8)";
      break;
    case 'smoke':
      startScale = 120;
      baseFreq = "0.01 0.05";
      dur = 2.5;
      break;
    case 'magnetic':
      startScale = 150;
      baseFreq = "0.001 0.05";
      dur = 1.2;
      break;
    case 'waves':
      startScale = 80;
      baseFreq = "0 0.3"; // Distorsión solo vertical (crea ondas horizontales)
      dur = 2;
      break;
    case 'crystal':
      startScale = 20;
      baseFreq = "0.6 0.6"; // Frecuencia muy alta para el efecto grano
      dur = 1.5;
      break;
    case 'zoom':
      startScale = 400;
      baseFreq = "0.02 0.02";
      dur = 1;
      ease = "expo.out";
      break;
  }

  // Set inicial del filtro
  gsap.set(turbulence, { attr: { baseFrequency: baseFreq, seed: 0 } });
  gsap.set(distMap, { attr: { scale: startScale } });

  tl05 = gsap.timeline();

  // Entrada de los spans (más suave)
  tl05.from(spans, {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out"
  }, 0);

  // Animación del Filtro
  tl05.to(distMap, {
    attr: { scale: 0 },
    duration: dur,
    ease: ease
  }, 0.1);

  tl05.to(turbulence, {
    attr: { baseFrequency: "0 0" },
    duration: dur,
    ease: "none"
  }, 0.1);
}

// Efecto 06: Persianas Cinéticas (Shutter Slices)
let tl06;
function initEffect06(mode = 'scanner') {
  const container = document.querySelector('.effect-demo-06');
  flashLabel(container);
  
  const slicesContainer = container.querySelector('.shutter-slices-container');
  const source = container.querySelector('.shutter-source');
  
  if (!slicesContainer || !source) return;

  // 1. Limpieza y Creación de Láminas
  if (tl06) tl06.kill();
  slicesContainer.innerHTML = '';
  
  const numSlices = 10;
  for (let i = 0; i < numSlices; i++) {
    const slice = source.cloneNode(true);
    slice.classList.remove('shutter-source');
    slice.classList.add('shutter-slice');
    slice.style.visibility = 'visible';
    
    const top = (i * (100 / numSlices));
    const bottom = (100 - ((i + 1) * (100 / numSlices)));
    slice.style.clipPath = `inset(${top}% 0 ${bottom}% 0)`;
    
    slicesContainer.appendChild(slice);
  }

  const slices = container.querySelectorAll('.shutter-slice');
  tl06 = gsap.timeline();

  switch(mode) {
    case 'scanner':
      // Las láminas entran de arriba a abajo secuencialmente
      tl06.from(slices, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out"
      });
      break;

    case 'alternate':
      // Alternancia de dirección (izquierda/derecha)
      tl06.from(slices, {
        x: (i) => i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power4.out"
      });
      break;

    case 'reveal':
      // Explosión desde el centro (escala y opacidad)
      tl06.from(slices, {
        scaleX: 0,
        opacity: 0,
        duration: 1,
        stagger: {
          each: 0.05,
          from: "center"
        },
        ease: "expo.out"
      });
      break;

    case 'vertical':
      // Re-generamos láminas pero verticales
      slicesContainer.innerHTML = '';
      for (let i = 0; i < numSlices; i++) {
        const slice = source.cloneNode(true);
        slice.classList.remove('shutter-source');
        slice.classList.add('shutter-slice');
        slice.style.visibility = 'visible';
        const left = (i * (100 / numSlices));
        const right = (100 - ((i + 1) * (100 / numSlices)));
        slice.style.clipPath = `inset(0 ${right}% 0 ${left}%)`;
        slicesContainer.appendChild(slice);
      }
      tl06.from(container.querySelectorAll('.shutter-slice'), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out"
      });
      break;

    case 'flip':
      // Rotación 3D (estilo marcador de aeropuerto)
      gsap.set(slicesContainer, { perspective: 1000 });
      tl06.from(slices, {
        rotationX: -90,
        opacity: 0,
        transformOrigin: "top center",
        duration: 1,
        stagger: 0.08,
        ease: "back.out(1.7)"
      });
      break;

    case 'chaos':
      // Direcciones y distancias aleatorias
      tl06.from(slices, {
        x: () => gsap.utils.random(-200, 200),
        y: () => gsap.utils.random(-100, 100),
        rotation: () => gsap.utils.random(-15, 15),
        opacity: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "expo.out"
      });
      break;
  }
}

// Efecto 07: Rastro Cinético (Motion Echo)
let tl07;
function initEffect07(mode = 'trail') {
  const container = document.querySelector('.effect-demo-07');
  flashLabel(container);
  
  const wrapper = container.querySelector('.echo-wrapper');
  const main = container.querySelector('.text-echo.main');
  
  if (!wrapper || !main) return;

  // 1. Limpieza y preparación
  if (tl07) tl07.kill();
  const ghosts = container.querySelectorAll('.text-echo.ghost');
  ghosts.forEach(g => g.remove());
  gsap.set(main, { clearProps: "all" });

  // 2. Creación dinámica de Fantasmas (3 capas de eco)
  const numGhosts = 3;
  for (let i = 0; i < numGhosts; i++) {
    const ghost = main.cloneNode(true);
    ghost.classList.remove('main');
    ghost.classList.add('ghost');
    ghost.style.filter = "blur(1px)";
    wrapper.appendChild(ghost);
  }

  const allGhosts = container.querySelectorAll('.text-echo.ghost');
  tl07 = gsap.timeline();

  switch(mode) {
    case 'trail':
      // Estela clásica lateral (Motion Trail)
      tl07.fromTo(allGhosts, 
        { opacity: 0, x: -100 },
        { 
          opacity: (i) => 0.3 - (i * 0.1), 
          x: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: "power3.out"
        }
      );
      tl07.from(main, { x: -100, opacity: 0, duration: 1.2, ease: "power3.out" }, 0);
      tl07.to(allGhosts, { opacity: 0, duration: 0.5 }, "-=0.4");
      break;

    case 'zoom':
      // Las capas vienen desde la profundidad
      tl07.fromTo(allGhosts,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: (i) => 0.2 - (i * 0.05),
          duration: 1.2,
          stagger: 0.1,
          ease: "expo.out"
        }
      );
      tl07.from(main, { scale: 0.5, opacity: 0, duration: 1.2, ease: "expo.out" }, 0);
      tl07.to(allGhosts, { scale: 1.5, opacity: 0, duration: 0.6 }, "-=0.4");
      break;

    case 'glitch':
      // Vibración errática de ecos
      tl07.from(main, { opacity: 0, y: 30, duration: 0.6 });
      tl07.from(allGhosts, {
        opacity: 0,
        x: (i) => i % 2 === 0 ? -30 : 30,
        duration: 0.1,
        repeat: 6,
        yoyo: true,
        stagger: 0.04
      });
      tl07.to(allGhosts, { opacity: 0, duration: 0.3 });
      break;

    case 'glow':
      // Efecto neón con rastro de brillo
      allGhosts.forEach(g => g.classList.add('glow-effect'));
      tl07.from([main, ...allGhosts], {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)"
      });
      tl07.to(allGhosts, { 
        opacity: 0, 
        filter: "blur(1px)",
        color: "#00FF41",
        duration: 1 
      }, "-=0.5");
      break;

    case 'vertical':
      // Ecos cayendo desde arriba
      tl07.from([main, ...allGhosts], {
        y: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out"
      });
      tl07.to(allGhosts, { opacity: 0, y: 50, duration: 0.5 }, "-=0.3");
      break;

    case 'vortex':
      // Rotación espiral de los ecos
      tl07.from([main, ...allGhosts], {
        rotation: (i) => i * 15,
        scale: 0,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "back.out(1.5)"
      });
      tl07.to(allGhosts, { opacity: 0, rotation: -45, duration: 0.5 }, "-=0.2");
      break;

    case 'wave':
      // Movimiento ondulado con skew
      tl07.from([main, ...allGhosts], {
        x: -150,
        skewX: 30,
        opacity: 0,
        duration: 1.5,
        stagger: 0.12,
        ease: "elastic.out(1, 0.75)"
      });
      tl07.to(allGhosts, { opacity: 0, x: 100, duration: 0.6 }, "-=0.4");
      break;
  }
}

// Función genérica para reiniciar demos placeholder
function initPlaceholder(effectNum) {
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
