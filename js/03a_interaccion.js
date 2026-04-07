gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

        // --- 5. GLOBAL CURSOR QUICKTO ---
        // (Debe estar arriba para dominar la pantalla)
        const curX = gsap.quickTo(".cursor-ring", "x", {duration: 0.15, ease: "power3"});
        const curY = gsap.quickTo(".cursor-ring", "y", {duration: 0.15, ease: "power3"});
        
        window.addEventListener("mousemove", (e) => {
            gsap.set(".cursor-dot", { x: e.clientX, y: e.clientY });
            curX(e.clientX);
            curY(e.clientY);
        });

        // Hover effect for the cursor
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


        // --- 1. MAGNETIC BUTTON ---
        const wrapBtn = document.querySelector(".mag-wrap");
        const magBtn = document.querySelector(".mag-btn");
        const mX = gsap.quickTo(magBtn, "x", {duration: 0.4, ease: "power3", overwrite:"auto"});
        const mY = gsap.quickTo(magBtn, "y", {duration: 0.4, ease: "power3", overwrite:"auto"});

        wrapBtn.addEventListener("mousemove", (e) => {
            const rect = wrapBtn.getBoundingClientRect();
            mX((e.clientX - rect.left - rect.width/2) * 0.4);
            mY((e.clientY - rect.top - rect.height/2) * 0.4);
        });
        wrapBtn.addEventListener("mouseleave", () => {
            gsap.to(magBtn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)", overwrite: "auto"});
        });

        // --- 2. DRAGGABLE ---
        Draggable.create(".drag-slider", {
            type: "x",
            bounds: ".drag-bounds",
            inertia: true,
            edgeResistance: 0.65
        });

        // --- 3. MARQUEE ---
        const inner = document.querySelector(".marquee-inner");
        inner.innerHTML += inner.innerHTML; // Duplicar para loop puro
        const tlMarquee = gsap.to(".marquee-inner", { xPercent: -50, repeat: -1, duration: 15, ease: "none" });

        ScrollTrigger.create({
            start: 0, end: "max",
            onUpdate: (self) => {
                gsap.to(tlMarquee, { timeScale: self.direction * 1.5, duration: 0.5, overwrite: "auto", ease: "power1.inOut" });
            }
        });
        ScrollTrigger.addEventListener("scrollEnd", () => {
             const curDir = tlMarquee.timeScale() > 0 ? 1 : -1;
             gsap.to(tlMarquee, { timeScale: curDir * 1, duration: 0.5, overwrite: "auto", ease: "power1.inOut" });
        });

        // --- 4. RIPPLE LIQUID BTN ---
        const rBtn = document.querySelector(".ripple-btn");
        const rFill = document.querySelector(".fill");
        const rTxt = document.querySelector(".rtxt");
        
        rBtn.addEventListener("mouseenter", (e) => {
            // Posición relativa al padre
            const rect = rBtn.getBoundingClientRect();
            const relX = e.clientX - rect.left;
            const relY = e.clientY - rect.top;
            
            gsap.fromTo(rFill, 
                { x: relX, y: relY, scale: 0 }, 
                { scale: 50, duration: 1.0, ease: "power3.in", overwrite: "auto" }
            );
            gsap.to(rTxt, { color: "var(--bg)", duration: 0.3 });
        });
        
        rBtn.addEventListener("mouseleave", (e) => {
            const rect = rBtn.getBoundingClientRect();
            const relX = e.clientX - rect.left;
            const relY = e.clientY - rect.top;
            
            gsap.to(rFill, { scale: 0, x: relX, y: relY, duration: 0.4, ease: "power3.out", overwrite: "auto" });
            gsap.to(rTxt, { color: "var(--acc)", duration: 0.3 });
        });