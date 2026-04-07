gsap.registerPlugin(ScrollTrigger);

        // --- 1. PARALLAX MEJORADO (EFECTO CINE) ---
        // Incrementamos el recorrido y añadimos escala para profundidad 3D
        gsap.to(".img-parallax", {
            yPercent: 80,          // Movimiento extremo (Parallax agresivo)
            scale: 1.15,           // Zoom sutil para efecto 'Inmersivo'
            ease: "none",
            scrollTrigger: {
                trigger: ".img-mask",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // --- Demo 2: Horizontal Scroll Seguro ---
        const hsWrap = document.querySelector(".hs-wrapper");
        if(hsWrap) {
            ScrollTrigger.create({
                trigger: ".horizontal-sec",
                pin: true,
                start: "top top",
                end: () => "+=" + (hsWrap.scrollWidth - hsWrap.parentElement.clientWidth),
                animation: gsap.to(hsWrap, { x: () => -(hsWrap.scrollWidth - hsWrap.parentElement.clientWidth), ease: "none" }),
                scrub: 1
            });
        }

        // --- Demo 3: Stacking Interno (Corregido) ---
        const scards = gsap.utils.toArray(".scard");
        scards.forEach((card, i) => {
            // No animamos la última carta porque no tiene nada que la cubra
            if(i !== scards.length - 1){
                gsap.to(card, {
                    scale: 0.85, 
                    opacity: 0, 
                    y: -50, // Pequeño desplazamiento hacia arriba al ser cubierta
                    ease: "none",
                    scrollTrigger: { 
                        trigger: scards[i+1], // El disparador es la siguiente carta
                        scroller: ".stack-wrap", 
                        start: "top 80%",    // Empieza a encogerse cuando la siguiente está cerca
                        end: "top 15%",      // Termina cuando la siguiente está a punto de pisarla
                        scrub: true 
                    }
                });
            }
        });

        // --- Demo 4: Zoom Out ---
        gsap.to(".zoom-img", {
            scale: 1, ease: "power2.out",
            scrollTrigger: { trigger: ".zoom-mask", start: "top 80%", end: "top 20%", scrub: 1 }
        });

        // --- Demo 5: Clip Wipe (Corregido para cierre completo) ---
        gsap.to(".wipe-img", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "none",
            scrollTrigger: { 
                trigger: ".wipe-mask", 
                start: "top 85%",    // Empieza un poco antes
                end: "top 15%",      // Termina mucho antes de que el elemento salga
                scrub: 1 
            }
        });
        // --- LÓGICA DE INTERACCIÓN        // Efectos magnéticos suaves para elementos interactivos
        document.querySelectorAll('.mag-element, .btn').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = el.getBoundingClientRect();
                const x = e.clientX - (left + width / 2);
                const y = e.clientY - (top + height / 2);
                gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            });
        });