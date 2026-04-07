gsap.registerPlugin(ScrollTrigger);

        // --- 1. COLOR MORPHING GLOBAL ---
        ScrollTrigger.create({
            trigger: "#section-spread",
            start: "top 50%", 
            onEnter: () => gsap.to("body", { backgroundColor: "var(--bg-morph)", color: "var(--txt-morph)" }),
            onLeaveBack: () => gsap.to("body", { backgroundColor: "var(--bg)", color: "var(--txt)" })
        });
        
        // Retorno de color al salir del final de la hoja (Opcional, pero bueno)
        ScrollTrigger.create({
            trigger: "#prozess-sec",
            start: "bottom 50%", 
            onEnter: () => gsap.to("body", { backgroundColor: "var(--bg)", color: "var(--txt)" }),
            onLeaveBack: () => gsap.to("body", { backgroundColor: "var(--bg-morph)", color: "var(--txt-morph)" })
        });

        // --- 2. CARD SPREAD (Formación de Abanico) ---
        gsap.to(".card-1", {
            xPercent: -130, rotation: -12, scale: 0.9,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".spread-wrap",
                start: "top 50%", // Empieza a dispersarse justo cuando entra en la vista
                end: "bottom 80%",
                scrub: 1
            }
        });

        gsap.to(".card-3", {
            xPercent:  130, rotation:  12, scale: 0.9,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".spread-wrap",
                start: "top 50%",
                end: "bottom 80%",
                scrub: 1
            }
        });
        // La tarjeta central (card-2) se queda en su sitio, sólo respira
        gsap.to(".card-2", {
            scale: 1.05,
            scrollTrigger: {
                trigger: ".spread-wrap",
                start: "top 50%", end: "bottom 80%", scrub: 1
            }
        });

        // --- 3. PROZESS (Step by Step Timeline) ---
        // Este contenedor ocupa 300vh. A medida que bajamos, cambia la lógica.
        const tlProzess = gsap.timeline({
            scrollTrigger: {
                trigger: ".pin-sec", // Un contenedor alto que se scrollea
                start: "top top",
                end: "bottom bottom",
                scrub: true
                // No necesitamos 'pin: true' en ScrollTrigger porque lo hemos simulado por CSS:
                // `.pin-layout { position: sticky; top: 15vh; }`. 
                // Esto es más estable en arquitecturas modernas que el pin forzado de GSAP.
            }
        });

        // Primer tercio: Transición al paso 2
        tlProzess.to(".s-1", { opacity: 0.2, x: 0, duration: 1 }, 1)
                 .to(".s-2", { opacity: 1, x: 20, duration: 1 }, 1)
                 .to(".img-1", { opacity: 0, duration: 1 }, 1)
                 .to(".img-2", { opacity: 1, duration: 1 }, 1)
                 
        // Segundo tercio: Transición al paso 3
                 .to(".s-2", { opacity: 0.2, x: 0, duration: 1 }, 3)
                 .to(".s-3", { opacity: 1, x: 20, duration: 1 }, 3)
                 .to(".img-2", { opacity: 0, duration: 1 }, 3)
                 .to(".img-3", { opacity: 1, duration: 1 }, 3)
                 
                 // Padding al final para que respire
                 .to({}, { duration: 1 });