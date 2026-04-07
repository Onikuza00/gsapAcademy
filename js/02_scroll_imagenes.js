gsap.registerPlugin(ScrollTrigger);

        // 1. Parallax de la Imagen
        gsap.to(".img-p", {
            yPercent: 30, // Se mueve 30% abajo en relación a sí msima
            ease: "none",
            scrollTrigger: {
                trigger: ".img-mask",
                start: "top bottom", 
                end: "bottom top", 
                scrub: true
            }
        });

        // Título que flota más lento (Parallax Inverso)
        gsap.to("#floater", {
            yPercent: -150, // Sube más rápido
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-sec",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // 2. Container Animation Horizontal
        let panels = gsap.utils.toArray(".h-panel");
        gsap.to(".h-wrap", {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horiz-sec",
                pin: true,
                scrub: 1, // Suavizado de inercia
                end: () => "+=" + document.querySelector(".h-wrap").offsetWidth
            }
        });

        // 3. Efectos dinámicos en Sticky Cards
        // Para que se encojan mínimamente al pasarles la siguiente por encima (Efecto Bodak Premium)
        const cards = gsap.utils.toArray(".card");
        cards.forEach((card, i) => {
            if (i !== cards.length - 1) { // A todas menos la última
                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: cards[i + 1], // Animamos cuando la siguiente tarjeta la empieza a tocar
                        start: "top bottom",
                        end: "top top",
                        scrub: true
                    }
                });
            }
        });