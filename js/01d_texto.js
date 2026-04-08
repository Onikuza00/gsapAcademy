/* 
  ---------------------------------------------------------
  GSAP ACADEMY: TIPOGRAFÍA MASTER (PARTE 4)
  ---------------------------------------------------------
*/

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText);

document.addEventListener("DOMContentLoaded", () => {
    // --- EFECTO 16: VORA INTRO ---
    let tl16;
    function playS16() {
        if(tl16) tl16.kill();
        const vHead = document.querySelector(".vora-fixed");
        const typeT = document.querySelector(".type-target-demo");
        
        gsap.set(vHead, { opacity: 1, visibility: "visible", x: 0 });
        tl16 = gsap.timeline();
        tl16.from(vHead, { 
            duration: 1.8, 
            letterSpacing: "-40px", 
            opacity: 0, 
            scale: 0.8, 
            ease: "expo.out" 
        });
        tl16.to(typeT, { duration: 0.5, text: " STUDIO", color: "#00ff88", ease: "none" }, "-=0.5");
        tl16.to(typeT, { duration: 0.3, text: "", ease: "none", delay: 1 });
        tl16.to(typeT, { duration: 0.5, text: " ACADEMY", color: "#f1c40f", ease: "none" });
    }

    // --- EFECTO 17: CINEMATIC SCALE REVEAL (DUO) ---
    let tl17;
    function playS17() {
        const lines = document.querySelectorAll(".mega.reveal-line-demo");
        if(tl17) tl17.kill();
        tl17 = gsap.timeline();
        tl17.fromTo(lines, 
            { opacity: 0, scale: 2, rotateX: 45 }, 
            { duration: 1.5, scale: 1, rotateX: 0, opacity: 1, ease: "expo.out" }
        );
    }

    // --- EFECTO 18: X-VALUE DEPTH (Play with Scroll) ---
    let s18, tl18;
    function playS18() {
        if(s18) s18.revert();
        if(tl18) tl18.kill();
        s18 = new SplitText(".scrub-line-demo.mega", { type: "chars" });
        tl18 = gsap.timeline();
        tl18.from(s18.chars, {
            x: 100,
            z: -150,
            rotateX: -90,
            opacity: 0,
            duration: 1.5,
            stagger: 0.04,
            ease: "power4.out",
            transformOrigin: "50% 0% -50px",
        });
    }

    // Activación automática al hacer scroll para el efecto 18
    const s18_init = new SplitText(".scrub-line-demo.mega", { type: "chars" });
    gsap.from(s18_init.chars, {
        x: 100, z: -150, rotateX: -90, opacity: 0,
        stagger: 0.03, duration: 1.2, ease: "power2.out",
        scrollTrigger: {
            trigger: ".scrub-line-demo.mega",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });

    // --- EFECTO 19: 3D CHARACTER SPIN PRO (Play with Scroll) ---
    let s19, tl19;
    function playS19() {
        if(s19) s19.revert();
        if(tl19) tl19.kill();
        s19 = new SplitText(".spin-line-demo.mega", { type: "chars" });
        tl19 = gsap.timeline();
        tl19.from(s19.chars, {
            rotateX: -360,
            opacity: 0,
            duration: 2,
            stagger: 0.08,
            ease: "expo.out",
            transformOrigin: "50% 0% -50px",
        });
    }

    // Activación por scroll para el efecto 19
    const s19_init = new SplitText(".spin-line-demo.mega", { type: "chars" });
    gsap.from(s19_init.chars, {
        rotateX: -360, opacity: 0,
        stagger: 0.05, duration: 1.8, ease: "expo.out",
        scrollTrigger: {
            trigger: ".spin-line-demo.mega",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });

    // --- EFECTO 20: MANIFESTO V2 ---
    let s20, tl20;
    function playS20() {
        if(s20) s20.revert();
        if(tl20) tl20.kill();
        s20 = new SplitText(".reveal-text-demo.manifesto-mega", { type: "words,lines" });
        tl20 = gsap.timeline();
        tl20.from(s20.words, {
            duration: 1.5,
            opacity: 0,
            y: 50,
            stagger: 0.04,
            ease: "power4.out"
        });
    }

    // --- ASIGNAR PLAYERS A BOTONES ---
    window.playS16 = playS16;
    window.playS17 = playS17;
    window.playS18 = playS18;
    window.playS19 = playS19;
    window.playS20 = playS20;

    // --- INIT ALL ---
    window.addEventListener('load', () => {
        playS16(); playS17(); playS18(); playS19(); playS20();
    });
});
