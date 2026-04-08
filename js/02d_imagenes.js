gsap.registerPlugin(ScrollTrigger);

        // --- 16. DIVERGENT GRID (WEBIX) ---
        const tl16 = gsap.timeline({
            scrollTrigger: {
                trigger: ".webix-wrap",
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        });
        tl16.to(".row-top", { x: -300, ease: "none" }, 0)
            .to(".row-bot", { x: 300, ease: "none" }, 0);

        // --- 17. PERSPECTIVE TUNNEL ---
        const tunnel = document.querySelector('.tunnel-wrap');
        const tunnelImgs = [
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400",
            "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400",
            "https://images.unsplash.com/photo-1550684848-86a5d8727436?w=400",
            "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400",
            "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=400"
        ];

        for(let i=0; i<15; i++) {
            const item = document.createElement('div');
            item.className = 'tunnel-item';
            item.innerHTML = `<img src="${tunnelImgs[i % tunnelImgs.length]}">`;
            tunnel.appendChild(item);
            
            const startZ = -i * 500;
            gsap.set(item, { 
                z: startZ, 
                x: gsap.utils.random(-400, 400), 
                y: gsap.utils.random(-300, 300),
                opacity: 0 
            });

            gsap.to(item, {
                z: 1500,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: ".tunnel-wrap",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
            // Fade out al acercarse demasiado
            gsap.to(item, {
                opacity: 0,
                z: 1500,
                scrollTrigger: {
                    trigger: ".tunnel-wrap",
                    start: "center top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }

        // --- 18. TEXT MASK ZOOM ---
        gsap.to(".mask-overlay", {
            scale: 50,
            opacity: 0,
            ease: "power2.in",
            scrollTrigger: {
                trigger: ".text-mask-wrap",
                start: "top center",
                end: "bottom top",
                scrub: 1
            }
        });

        // --- 19. FLOATING BUBBLES ---
        const bubbles = document.querySelectorAll('.bubble');
        bubbles.forEach(b => {
            const speed = parseFloat(b.dataset.speed);
            gsap.to(b, {
                y: -1000 * speed,
                scale: 1.3,
                ease: "none",
                scrollTrigger: {
                    trigger: ".bubble-area",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });

        // --- 20. SECTION RESCALE ---
        gsap.to(".layer-box.fg", {
            scale: 0.9,
            borderRadius: "100px",
            scrollTrigger: {
                trigger: ".rescale-scene",
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        });

        // --- GLOBAL INTERACTIONS ---
        document.querySelectorAll('.mag-element, .header a').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - (rect.left + rect.width / 2);
                const y = e.clientY - (rect.top + rect.height / 2);
                gsap.to(el, { x: x * 0.4, y: y * 0.4, duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
            });
        });