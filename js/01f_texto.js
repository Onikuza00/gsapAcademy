/**
 * GSAP ACADEMY: EFECTOS DE TIPOGRAFÍA DESDE JSON
 * Replicación de efectos de Animation Addons (Scale Down)
 */

document.addEventListener("DOMContentLoaded", () => {
    // Registro de plugin (fundamental para efectos vinculados al scroll si se añaden después)
    gsap.registerPlugin(ScrollTrigger);

    // Inicializamos SplitType para los textos (fragmentación por caracteres y palabras)
    const splitChars = new SplitType('.txt-chars', { types: 'chars' });
    const splitWords = new SplitType('.txt-words', { types: 'words' });

    /**
     * EFECTO 25: Scale Down (Chars)
     * Basado en JSON 21-34-17
     */
    window.playS25 = () => {
        // Matamos animaciones previas en estos elementos para evitar acumulamiento de estados
        gsap.killTweensOf(splitChars.chars);
        
        gsap.from(splitChars.chars, {
            scale: 1.5,
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.05,
            ease: "power3.out",
            transformOrigin: "top center -50",
            overwrite: true
        });
    }

    /**
     * EFECTO 26: Scale Down (Words)
     * Basado en JSON 21-34-21
     */
    window.playS26 = () => {
        gsap.killTweensOf(splitWords.words);

        gsap.from(splitWords.words, {
            scale: 1.2,
            y: 20,
            opacity: 0,
            duration: 1.2,
            stagger: 0.04,
            ease: "power3.out",
            overwrite: true
        });
    }

    /**
     * EFECTO 27: 3D Scroll Ghosting (Multicapa)
     * Vinculado al Scroll (Scrub) para replicar el rastro dinámico de las imágenes
     */
    const initS27Scroll = () => {
        const config = [
            { selector: '.txt-spin.back-2', opacity: 0.15, z: -150, rot: 110 },
            { selector: '.txt-spin.back-1', opacity: 0.3, z: -75, rot: 55 },
            { selector: '.txt-spin.front', opacity: 1, z: 0, rot: 0 }
        ];

        config.forEach((layer) => {
            const el = document.querySelector(layer.selector);
            if (!el) return;

            const split = new SplitType(el, { types: 'chars' });
            
            // Animación ligada al Scroll
            gsap.fromTo(split.chars, 
                { 
                    rotateX: layer.rot,
                    z: layer.z - 50,
                    opacity: 0
                },
                {
                    rotateX: -layer.rot, // Giran de un lado a otro según el scroll
                    z: layer.z,
                    opacity: layer.opacity,
                    stagger: {
                        amount: 0.8,
                        from: "center"
                    },
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".stack-wrap",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                }
            );
        });
    }

    // Función manual para el botón Reiniciar
    window.playS27 = () => {
        ScrollTrigger.refresh();
        gsap.to(window, { scrollTo: { y: ".stack-wrap", autoKill: false }, duration: 1 });
    }

    // Disparo automático inicial
    gsap.delayedCall(0.8, () => {
        playS25();
        playS26();
        initS27Scroll();
    });

    // Aseguramos que el contenido se re-fragmente si la ventana cambia de tamaño
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            splitChars.split();
            splitWords.split();
        }, 250);
    });
});
