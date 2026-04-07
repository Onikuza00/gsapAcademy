gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

        // --- 1. DRAGGABLE ---
        Draggable.create(".drag-slider", {
            type: "x",
            bounds: ".drag-bounds",
            inertia: true,
            edgeResistance: 0.65
        });

        // --- 2. QUICKTO ---
        const wrap = document.querySelector(".mag-wrap");
        const btn = document.querySelector(".mag-btn");
        const xTo = gsap.quickTo(btn, "x", {duration: 0.4, ease: "power3"});
        const yTo = gsap.quickTo(btn, "y", {duration: 0.4, ease: "power3"});

        wrap.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            // Desplazamiento reactivo de un 40% de atracción
            xTo((e.clientX - rect.left - rect.width/2) * 0.4);
            yTo((e.clientY - rect.top - rect.height/2) * 0.4);
        });
        wrap.addEventListener("mouseleave", () => {
            // Elástico potente al retorno original
            gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)", overwrite:"auto"});
        });

        // --- 3. MARQUEE ---
        // Duplicamos el contenido internamente para el loop
        const inner = document.querySelector(".marquee-inner");
        inner.innerHTML += inner.innerHTML; // Hack veloz para loops

        const tlTicker = gsap.to(".marquee-inner", {
            xPercent: -50, // Como duplicamos, hay 2 partes. 50% es toda la primera parte real.
            ease: "none",
            duration: 15,
            repeat: -1
        });

        // Control dinámico de escala de tiempo en base a la dirección
        ScrollTrigger.create({
            start: 0, 
            end: "max",
            onUpdate: (self) => {
                // Al hacer scroll hacia arriba (direction == -1), timeScale se vuelve negativo y retrocede veloz.
                gsap.to(tlTicker, { timeScale: self.direction * 1.5, duration: 0.5, overwrite: "auto", ease: "power1.inOut" });
            }
        });
        // Control de reposo pasados unos milisegundos tras el scroll...
        // Aquí volvería a timeScale: 1
        ScrollTrigger.addEventListener("scrollEnd", () => {
             // Retomamos la velocidad lenta en la dirección en la que quedó
             const curDir = tlTicker.timeScale() > 0 ? 1 : -1;
             gsap.to(tlTicker, { timeScale: curDir * 1, duration: 0.5, overwrite: "auto", ease: "power1.inOut" });
        });