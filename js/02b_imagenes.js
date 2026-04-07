gsap.registerPlugin(ScrollTrigger);

        // --- Demo 6: Mask Reveal Color (PINNED & ROBUST) ---
        const tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: ".mask-reveal-sec",
                start: "top top",
                end: "+=120%", // Estancia extra para ver el efecto
                scrub: 1,
                pin: true
            }
        });

        tl6.fromTo(".mask-bg-reveal", 
            { clipPath: "circle(0% at 50% 50%)", webkitClipPath: "circle(0% at 50% 50%)" },
            { clipPath: "circle(120% at 50% 50%)", webkitClipPath: "circle(120% at 50% 50%)", ease: "none" }
        );

        tl6.to(".mask-reveal-sec", {
            backgroundColor: "rgba(0,179,255,0.05)",
            duration: 0.5
        }, 0);

        // --- Demo 7: 3D Flip ---
        gsap.to(".flip-card", {
            rotateY: 0, opacity: 1, ease: "expo.out",
            scrollTrigger: { trigger: ".flip-wrap", start: "top 80%", scrub: 1 }
        });

        // --- Demo 8: Infinite Image Ticker (Faster) ---
        const tl8 = gsap.to(".img-ticker", { xPercent: -50, repeat: -1, duration: 10, ease: "none" });
        ScrollTrigger.create({
            start: 0, end: "max",
            onUpdate: (self) => { gsap.to(tl8, { timeScale: self.direction * 4, duration: 0.5, overwrite: "auto" }); }
        });
        ScrollTrigger.addEventListener("scrollEnd", () => {
             const curDir = tl8.timeScale() > 0 ? 1 : -1;
             gsap.to(tl8, { timeScale: curDir * 1.5, duration: 0.5, overwrite: "auto" });
        });

        // --- Demo 9: Lens Blur Focus ---
        gsap.to(".blur-img", {
            filter: "blur(0px)", scale: 1,
            scrollTrigger: { trigger: ".blur-focus-wrap", start: "top 80%", end: "top 20%", scrub: true }
        });

        // --- Demo 10: Split Reveal ---
        const tl10 = gsap.timeline({
            scrollTrigger: { trigger: ".split-reveal-wrap", start: "top 50%", end: "bottom top", scrub: 1 }
        });
        tl10.to(".left .reveal-img", { xPercent: -25, ease: "none" }, 0)
            .to(".right .reveal-img", { xPercent: 25, ease: "none" }, 0);