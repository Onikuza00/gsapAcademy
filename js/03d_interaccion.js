// --- CURSOR ---
        const cursor = document.querySelector('.cursor-dot');
        const xTo = gsap.quickTo(cursor, "x", {duration: 0.2});
        const yTo = gsap.quickTo(cursor, "y", {duration: 0.2});
        window.addEventListener("mousemove", e => { xTo(e.clientX); yTo(e.clientY); });

        // --- 16. MULTI BUBBLE ---
        const bubbles = document.querySelectorAll('.bubble');
        const bContainer = document.getElementById('b-container');
        const bubbleX = Array.from(bubbles).map(b => gsap.quickTo(b, "x", {duration: 0.4, ease: "power2"}));
        const bubbleY = Array.from(bubbles).map(b => gsap.quickTo(b, "y", {duration: 0.4, ease: "power2"}));
        
        bContainer.addEventListener("mousemove", e => {
            const rect = bContainer.getBoundingClientRect();
            const x = e.clientX - rect.left - 30;
            const y = e.clientY - rect.top - 30;
            bubbleX.forEach((q, i) => setTimeout(() => q(x), i * 50));
            bubbleY.forEach((q, i) => setTimeout(() => q(y), i * 50));
            gsap.to(bubbles, { opacity: 0.8, scale: 1, duration: 0.3 });
        });
        bContainer.addEventListener("mouseleave", () => {
            gsap.to(bubbles, { opacity: 0, scale: 0, duration: 0.5 });
        });

        // --- 17. ORBIT (WITH DISPERSION) ---
        const orbitItems = document.querySelectorAll('.orbit-item');
        let isDispersed = false;

        function setInitialOrbit() {
            orbitItems.forEach((it, i) => {
                const angle = (i / orbitItems.length) * Math.PI * 2;
                gsap.to(it, { 
                    x: 100 * Math.cos(angle), 
                    y: 100 * Math.sin(angle),
                    duration: 1.5,
                    ease: "elastic.out(1, 0.5)"
                });
            });
        }

        // Animación de rotación base
        orbitItems.forEach((it, i) => {
            gsap.to(it, {
                rotation: 360,
                duration: 10 + i * 2,
                repeat: -1,
                ease: "none"
            });
        });

        function disperseOrbit() {
            isDispersed = true;
            orbitItems.forEach((it, i) => {
                // Posiciones aleatorias alejadas
                const randomX = (Math.random() - 0.5) * 600;
                const randomY = (Math.random() - 0.5) * 600;
                
                gsap.to(it, {
                    x: randomX,
                    y: randomY,
                    duration: 0.8,
                    ease: "expo.out",
                    onComplete: () => {
                        // Después de un breve retraso, vuelven a casa
                        gsap.delayedCall(1, () => {
                            isDispersed = false;
                            setInitialOrbit();
                        });
                    }
                });
            });
        }
        
        // Ejecutar posición inicial al cargar
        setInitialOrbit();
        
        document.getElementById('orbit-area').addEventListener('mousemove', (e) => {
            if (isDispersed) return; // No atraer mientras están dispersos
            const { clientX, clientY } = e;
            orbitItems.forEach((it, i) => {
                const rect = it.getBoundingClientRect();
                const dx = clientX - (rect.left + rect.width / 2);
                const dy = clientY - (rect.top + rect.height / 2);
                gsap.to(it, { x: `+=${dx * 0.1}`, y: `+=${dy * 0.1}`, duration: 0.5 });
            });
        });

        // --- 18. STACK REVEAL ---
        const cards = document.querySelectorAll('.stack-card');
        document.getElementById('stack-area').addEventListener('mousemove', (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const xNormal = (e.clientX - rect.left) / rect.width - 0.5;
            cards.forEach((c, i) => {
                gsap.to(c, {
                    x: xNormal * 100 * (i + 1),
                    z: i * 20,
                    rotateY: xNormal * 45,
                    duration: 0.6
                });
            });
        });
        document.getElementById('stack-area').addEventListener('mouseleave', () => {
            gsap.to(cards, { x: 0, z: 0, rotateY: 0, duration: 1, ease: "back.out(1.7)" });
        });

        // --- 19. KINETIC WEB (ELITE INTERACTION) ---
        const webArea = document.getElementById('web-area');
        const core = document.querySelector('.center-node');
        const stalkers = document.querySelectorAll('.stalker');
        const lines = document.querySelectorAll('.web-line');

        // Posiciones lógicas
        let corePos = { x: 0, y: 0 };
        let stalkerPositions = Array.from(stalkers).map(() => ({ x: 0, y: 0 }));

        // Animación del core (Magnetic)
        webArea.addEventListener('mousemove', (e) => {
            const rect = webArea.getBoundingClientRect();
            const tx = e.clientX - rect.left - rect.width/2;
            const ty = e.clientY - rect.top - rect.height/2;
            gsap.to(corePos, { x: tx, y: ty, duration: 0.6, ease: "power3.out" });
        });
        webArea.addEventListener('mouseleave', () => {
            gsap.to(corePos, { x: 0, y: 0, duration: 1.5, ease: "elastic.out(1, 0.3)" });
        });

        // Loop de física para los stalkers y líneas
        gsap.ticker.add(() => {
            // Mover el core físico
            gsap.set(core, { x: corePos.x, y: corePos.y });

            stalkers.forEach((s, i) => {
                const targetX = corePos.x + Math.cos(Date.now() * 0.002 + i) * 120;
                const targetY = corePos.y + Math.sin(Date.now() * 0.002 + i) * 120;

                // Suavizado individual para efecto orgánico
                stalkerPositions[i].x += (targetX - stalkerPositions[i].x) * (0.1 - i * 0.015);
                stalkerPositions[i].y += (targetY - stalkerPositions[i].y) * (0.1 - i * 0.015);

                gsap.set(s, { x: stalkerPositions[i].x, y: stalkerPositions[i].y });

                // Actualizar líneas SVG (Tendones)
                const line = lines[i];
                if(line) {
                    const rect = webArea.getBoundingClientRect();
                    const cx = rect.width / 2;
                    const cy = rect.height / 2;
                    
                    line.setAttribute("x1", cx + corePos.x);
                    line.setAttribute("y1", cy + corePos.y);
                    line.setAttribute("x2", cx + stalkerPositions[i].x);
                    line.setAttribute("y2", cy + stalkerPositions[i].y);
                }
            });
        });

        // --- 20. VELOCITY STREAK ---
        const streakTxt = document.getElementById('streak-txt');
        let lastX = 0;
        window.addEventListener('mousemove', (e) => {
            const vel = e.clientX - lastX;
            const skew = gsap.utils.clamp(-30, 30, vel * 0.5);
            gsap.to(streakTxt, { skewX: skew, duration: 0.4, ease: "power2.out" });
            lastX = e.clientX;
        });