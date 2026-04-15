gsap.registerPlugin(ScrollTrigger, SplitText);

document.addEventListener("DOMContentLoaded", () => {
  // Scroll Suave con Lenis
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const efecto1 = new SplitText("#efecto1", { type: "chars" }); //Ojo con las comillas es importante
  gsap.from(efecto1.chars, {
    scrollTrigger: {
      trigger: "#demo1",
      start: "top 20%", // ✅ S'activa quan el TOP de #demo1 entra al 80% de la pantalla
      end: "bottom 80%",
      scrub: 1,
      markers: true,
    },
    opacity: 0.1,
    stagger: 0.05,
    ease: "power2.out",
  });

  const efecto2 = new SplitText("#efecto2", { type: "chars" }); //Ojo con las comillas es importante
  gsap.from(efecto2.chars, {
    scrollTrigger: {
      trigger: "#demo2",
      start: "top 80%", // ✅ S'activa quan el TOP de #demo1 entra al 80% de la pantalla
      end: "bottom 50%",
      scrub: 1,
      markers: true,
    },
    scaleY: 0, // Inicia colapsado verticalmente
    transformOrigin: "bottom center", // Crece desde abajo (importante para el efecto)
    opacity: 0, // Mantenemos el desvanecimiento opcional
    stagger: 0.05,
    ease: "bounce.out",
    y: -20,
    scale: 0,
  });
});
