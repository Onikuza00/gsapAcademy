gsap.registerPlugin(ScrollTrigger);

        // --- 11. CYLINDER BARREL ---
        const cylinder = document.querySelector('.cylinder-wrap');
        const cItems = document.querySelectorAll('.cylinder-item');
        const radius = 240;

        cItems.forEach((it, i) => {
            const angle = (i / cItems.length) * Math.PI * 2;
            gsap.set(it, {
                rotationX: (i / cItems.length) * 360,
                z: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius
            });
        });

        gsap.to(cylinder, {
            rotationX: -360,
            ease: "none",
            scrollTrigger: {
                trigger: ".cylinder-wrap",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // --- 12. PARALLAX CURTAIN ---
        const curtainBars = document.querySelectorAll('.curtain-bar');
        const curtainImgs = document.querySelectorAll('.curtain-img');
        
        curtainImgs.forEach((img, i) => {
            img.style.left = `-${i * 100}%`;
            gsap.to(img, {
                y: (i - 4) * 40,
                ease: "none",
                scrollTrigger: {
                    trigger: ".curtain-box",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });

        // --- 13. ORIGAMI UNFOLD ---
        gsap.set(".origami-fold", { rotateX: 90, opacity: 0 });
        gsap.to(".origami-fold", {
            rotateX: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".origami-box",
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // --- 14. MAGNI-LENS REFACTORED ---
        const lZone = document.getElementById('lens-zone');
        const glass = document.getElementById('lens-glass');
        
        // Sincronización de QuickTo para inercia premium
        const gX = gsap.quickTo(glass, "left", {duration: 0.2, ease: "power3"});
        const gY = gsap.quickTo(glass, "top", {duration: 0.2, ease: "power3"});
        const bPX = gsap.quickTo(glass, "backgroundPositionX", {duration: 0.2, ease: "power3"});
        const bPY = gsap.quickTo(glass, "backgroundPositionY", {duration: 0.2, ease: "power3"});

        lZone.addEventListener("mouseenter", () => {
            gsap.set(glass, { display: 'block', scale: 0.5, opacity: 0 });
            gsap.to(glass, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" });
        });

        lZone.addEventListener("mousemove", (e) => {
            const rect = lZone.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Posicionamos el cristal (centrado)
            gX(x - 110); 
            gY(y - 110);

            // Cálculo del background-position para el efecto lupa
            const pX = (x / rect.width) * 100;
            const pY = (y / rect.height) * 100;

            bPX(`${pX}%`);
            bPY(`${pY}%`);
        });

        lZone.addEventListener("mouseleave", () => {
            gsap.to(glass, { scale: 0, opacity: 0, duration: 0.3, onComplete: () => {
                glass.style.display = 'none';
            }});
        });

        // --- 15. PARTICLE SWARM ---
        const sZone = document.getElementById('swarm-zone');
        const dots = document.querySelectorAll('.dot');
        const sImg = document.getElementById('s-img');

        gsap.set(dots, { opacity: 0, scale: 0 });

        sZone.addEventListener("mousemove", (e) => {
            const rect = sZone.getBoundingClientRect();
            const relX = e.clientX - rect.left;
            const relY = e.clientY - rect.top;

            gsap.to(dots, {
                x: relX - rect.width/2,
                y: relY - rect.height/2,
                stagger: { each: 0.02, from: "center" },
                duration: 0.6,
                ease: "power2.out",
                opacity: 1,
                scale: 1
            });
            gsap.to(sImg, { opacity: 0.8, scale: 1, filter: "grayscale(0)", duration: 0.8 });
        });

        sZone.addEventListener("mouseleave", () => {
            gsap.to(dots, { x: 0, y: 0, scale: 0, duration: 1.5, ease: "power2.in", opacity: 0 });
            gsap.to(sImg, { opacity: 0, scale: 0.8, filter: "grayscale(1)", duration: 0.5 });
        });