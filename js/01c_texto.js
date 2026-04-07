gsap.registerPlugin(ScrollTrigger);

        // --- 11. CINEMATIC MASK ---
        gsap.to(".mask-txt", {
            scale: 1, opacity: 1,
            backgroundSize: "100%",
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".mask-wrap",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // --- 12. STAIRWAY 3D ---
        const sSplit = new SplitType('.stairway-txt', { types: 'chars' });
        sSplit.chars.forEach(c => c.classList.add('s-char'));
        gsap.to(sSplit.chars, {
            y: 0,
            z: 0,
            rotateX: 0,
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".stairway-wrap",
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1
            }
        });

        // --- 13. COLLISION ---
        const cSplit = new SplitType('.coll-txt', { types: 'chars' });
        cSplit.chars.forEach(c => c.classList.add('c-char'));
        
        function playS13() {
            gsap.fromTo(cSplit.chars, {
                x: () => Math.random() * 2000 - 1000,
                y: () => Math.random() * 1000 - 500,
                rotate: () => Math.random() * 1080,
                opacity: 0,
                scale: 3,
                z: 500
            }, {
                x: 0, y: 0, rotate: 0, opacity: 1, scale: 1, z: 0,
                duration: 2,
                ease: "elastic.out(1, 0.4)",
                stagger: { amount: 0.6, from: "center" }
            });
        }
        window.addEventListener('load', playS13);

        // --- 14. TILE GRID ---
        gsap.to(".tile", {
            rotateY: 0,
            opacity: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
            stagger: { amount: 1.5, from: "start", grid: [2, 7] },
            scrollTrigger: {
                trigger: ".tile-grid",
                start: "top 85%"
            }
        });

        // --- 15. RAINBOW SPIRAL ---
        gsap.to("#m-path", {
            attr: { startOffset: "80%" },
            ease: "none",
            scrollTrigger: {
                trigger: ".p-svg",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
        // Rainbow cycle
        gsap.to(".p-txt", {
            fill: "hsl(360, 100%, 50%)",
            duration: 5,
            repeat: -1,
            ease: "none",
            onUpdate: function() {
                const p = this.progress();
                this.targets()[0].style.fill = `hsl(${p * 360}, 100%, 50%)`;
            }
        });