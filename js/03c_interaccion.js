gsap.registerPlugin(ScrollTrigger);

        // --- GLOBAL CURSOR ---
        const curX = gsap.quickTo(".cursor-ring", "x", {duration: 0.15, ease: "power3", overwrite: "auto"});
        const curY = gsap.quickTo(".cursor-ring", "y", {duration: 0.15, ease: "power3", overwrite: "auto"});
        
        window.addEventListener("mousemove", (e) => {
            gsap.set(".cursor-dot", { x: e.clientX, y: e.clientY });
            curX(e.clientX);
            curY(e.clientY);
        });

        const hoverTargets = document.querySelectorAll(".hover-target");
        hoverTargets.forEach(target => {
            target.addEventListener("mouseenter", () => {
                gsap.to(".cursor-ring", { width: 60, height: 60, borderColor: "var(--acc-alt)", duration: 0.3 });
                gsap.to(".cursor-dot", { scale: 0, duration: 0.3 });
            });
            target.addEventListener("mouseleave", () => {
                gsap.to(".cursor-ring", { width: 40, height: 40, borderColor: "var(--acc)", duration: 0.3 });
                gsap.to(".cursor-dot", { scale: 1, duration: 0.3 });
            });
        });

        // --- 11. TECH SCAN ---
        const laserAnim = gsap.fromTo(".scan-laser", { top: "0%" }, { top: "100%", duration: 2.5, repeat: -1, ease: "none", paused: true });
        document.querySelector(".tech-card").addEventListener("mouseenter", () => laserAnim.play());
        document.querySelector(".tech-card").addEventListener("mouseleave", () => { laserAnim.pause(); gsap.set(".scan-laser", { top: 0 }); });

        // --- 12. HERO REVEAL BALL (POTENCIADO) ---
        gsap.timeline({
            scrollTrigger: { 
                trigger: ".reveal-ball-container", 
                start: "top 10%", 
                end: "+=100%", 
                scrub: 1, 
                pin: true 
            }
        })
        .to(".reveal-ball", { scale: 50, duration: 1.5, ease: "power2.in" })
        .to(".ball-txt", { opacity: 1, duration: 0.5 }, "-=0.2")
        .to(".reveal-ball-container", { opacity: 0, pointerEvents: "none", duration: 0.5 });

        // --- 13. ATH TOOLTIP ---
        const aTip = document.querySelector(".ath-tooltip");
        const atX = gsap.quickTo(aTip, "x", {duration: 0.5, ease: "power3"});
        const atY = gsap.quickTo(aTip, "y", {duration: 0.5, ease: "power3"});

        document.querySelectorAll(".ath-item").forEach(item => {
            item.addEventListener("mouseenter", () => {
                aTip.style.opacity = 1;
                aTip.querySelector(".ath-name").innerText = item.dataset.ath;
                aTip.querySelector(".ath-role").innerText = item.dataset.role;
                gsap.to(aTip, { scale: 1, duration: 0.3 });
                gsap.to(".cursor-ring", { opacity: 0, duration: 0.2 });
            });
            item.addEventListener("mouseleave", () => {
                aTip.style.opacity = 0;
                gsap.to(aTip, { scale: 0.8, duration: 0.3 });
                gsap.to(".cursor-ring", { opacity: 1, duration: 0.2 });
            });
            item.addEventListener("mousemove", (e) => {
                atX(e.clientX + 20);
                atY(e.clientY + 20);
            });
        });

        // --- 14. BIO-METRIC PULSE SWITCH (MEJORADO) ---
        let bioActive = false;
        const bioTrigger = document.getElementById("bio-trigger");
        
        // Escáner láser persistente
        gsap.to(".bio-scanner", { top: "150%", duration: 2, repeat: -1, ease: "none" });
        // Rotación del anillo
        gsap.to(".bio-ring", { rotation: 360, duration: 10, repeat: -1, ease: "none" });

        bioTrigger.addEventListener("click", () => {
            bioActive = !bioActive;
            bioTrigger.classList.toggle("active");
            
            // Onda de choque (Pulse)
            gsap.fromTo(".bio-pulse", 
                { scale: 1, opacity: 0.8, borderColor: bioActive ? "var(--acc-alt)" : "var(--acc)" }, 
                { scale: 3, opacity: 0, duration: 0.8, ease: "power4.out" }
            );

            // Efecto de Glitch/Scramble en el texto
            gsap.to("#bio-status", {
                duration: 0.5,
                scrambleText: {
                    text: bioActive ? "ACCESS_GRANTED" : "ID_SCAN",
                    chars: "01X*#@",
                    revealDelay: 0.1
                }
            });

            // Animación de escala al pulsar
            gsap.fromTo(bioTrigger, { scale: 0.9 }, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.3)" });
        });

        // --- 15. FAN GALLERY ---
        gsap.from(".fan-card", {
            rotate: 0, x: 0, opacity: 0,
            scrollTrigger: { trigger: ".fan-container", start: "top 80%", toggleActions: "play none none reverse" }
        });
        gsap.to(".fan-card", {
            rotate: (i) => (i - 2) * 15,
            x: (i) => (i - 2) * 40,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: { trigger: ".fan-container", start: "top 80%", toggleActions: "play none none reverse" }
        });