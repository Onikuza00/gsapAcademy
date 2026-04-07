// --- 1. CONFIGURACIÓN DEL CURSOR PERSONALIZADO ---
const cursor = document.querySelector(".custom-cursor");
const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  xToCursor(e.clientX - 10);
  yToCursor(e.clientY - 10);
});

// --- 2. INTERACCIÓN DE PANTALLA (HERO HOVER) ---
const shapes = document.querySelectorAll(".hero-shape");

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Óvalos de fondo
  shapes.forEach((shape) => {
    const speed = parseFloat(shape.getAttribute("data-speed"));
    gsap.to(shape, {
      x: (clientX - centerX) * speed,
      y: (clientY - centerY) * speed,
      duration: 1.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  });
});

// --- 3. EFECTOS DE TEXTO Y HOVER DE TARJETAS ---
const textTitles = new SplitType("h2", { types: "chars" });

document.querySelectorAll(".card").forEach((card) => {
  const chars = card.querySelectorAll(".char");

  card.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
    gsap.to(chars, { y: -10, stagger: 0.02, duration: 0.3, ease: "back.out(2)", color: "white" });
  });

  card.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    gsap.to(chars, { y: 0, stagger: 0.02, duration: 0.3, ease: "power2.in", color: "" });
  });

  card.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    gsap.to(card, { rotationY: x * 15, rotationX: -y * 15, transformPerspective: 1000, duration: 0.6, ease: "power3.out" });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { rotationY: 0, rotationX: 0, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.3)" });
  });
});

// --- 4. BOTONES MAGNÉTICOS ---
document.querySelectorAll(".mag-element").forEach((btn) => {
  const mX = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
  const mY = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });

  btn.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = btn.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    mX(x * 0.4);
    mY(y * 0.4);
  });

  btn.addEventListener("mouseleave", () => {
    mX(0);
    mY(0);
  });
});

// --- 5. ANIMACIÓN DE ENTRADA ---
gsap.from(".card", { opacity: 0, y: 100, duration: 1, stagger: 0.15, ease: "expo.out", delay: 0.4 });
gsap.from(".title", { opacity: 0, y: -30, duration: 1.5, ease: "power4.out" });
