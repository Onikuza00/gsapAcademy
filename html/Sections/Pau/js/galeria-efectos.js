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

// --- Lógica de Efectos ---
gsap.registerPlugin(SplitText, ScrollTrigger);

// Efecto 01: Máscara Horizontal
let split01;
function initEffect01() {
  console.log("Iniciando Efecto 01...");
  const target = document.getElementById('demo-01');
  
  if (!target) {
    console.error("Error: No se encontró el elemento #demo-01");
    return;
  }
  
  if (typeof SplitText === "undefined") {
    console.error("Error: SplitText no está cargado. Revisa el CDN.");
    return;
  }

  if (split01) split01.revert();
  
  // Usamos un pequeño delay para asegurar que las fuentes y estilos estén aplicados
  setTimeout(() => {
    try {
      split01 = new SplitText("#demo-01", { type: "chars, lines", mask: "lines" });
      console.log("SplitText instanciado:", split01);
      
      gsap.from(split01.chars, {
        yPercent: 100,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.7)",
        onComplete: () => console.log("Animación 01 completada")
      });
    } catch (e) {
      console.error("Error al ejecutar SplitText:", e);
    }
  }, 200);
}

// Efecto 02: Levantado 3D
let split02;
function initEffect02() {
  console.log("Iniciando Efecto 02...");
  const target = document.getElementById('demo-02');
  if (!target) return;

  if (split02) split02.revert();

  setTimeout(() => {
    try {
      split02 = new SplitText("#demo-02", { type: "chars" });
      const lt = gsap.timeline();
      gsap.set(split02.chars, { opacity: 0, x: "350%" });
      
      // Sincronizamos las dos fases para que empiecen juntas
      lt.to(split02.chars, {
        duration: 1.5,
        x: "0%",
        ease: "elastic.out(1, 0.25)",
        stagger: 0.1,
      }, 0.45)
      .to(split02.chars, {
        duration: 0.75,
        opacity: 1,
        ease: "power2.out",
        stagger: 0.01,
        onComplete: () => console.log("Efecto Elástico 02 completado")
      },
          0.45);
    } catch (e) {
      console.error("Error en Efecto 02:", e);
    }
  }, 200);
}

// Efecto 03: Despliegue 3D (Eje X)
let split03;
function initEffect03() {
  console.log("Iniciando Efecto 03...");
  const target = document.getElementById('demo-03');
  if (!target) return;

  if (split03) split03.revert();

  setTimeout(() => {
    try {
      split03 = new SplitText("#demo-03", { type: "lines" });
      
      gsap.from(split03.lines, {
        duration: 1,
        rotateX: -90,
        opacity: 0,
        transformOrigin: "center center",
        stagger: 0.15,
        ease: "power2.out",
        onComplete: () => console.log("Animación 03 completada")
      });
    } catch (e) {
      console.error("Error en Efecto 03:", e);
    }
  }, 200);
}

// Efecto 04: Despliegue Lateral (Eje Y)
let split04;
function initEffect04() {
  console.log("Iniciando Efecto 04...");
  const target = document.getElementById('demo-04');
  if (!target) return;

  if (split04) split04.revert();

  setTimeout(() => {
    try {
      split04 = new SplitText("#demo-04", { type: "lines" });
      
      split04.lines.forEach((line, i) => {
        gsap.from(line, {
          duration: 1,
          rotateY: i % 2 === 0 ? -90 : 90,
          opacity: 0,
          transformOrigin: "center center",
          ease: "power2.out",
          delay: i * 0.15
        });
      });
      console.log("Animación 04 configurada");
    } catch (e) {
      console.error("Error en Efecto 04:", e);
    }
  }, 200);
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
