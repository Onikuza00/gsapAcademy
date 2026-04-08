gsap.registerPlugin(SplitText, TextPlugin, ScrambleTextPlugin);

        // --- Demo 1: Cascade ---
        let s1, tl1;
        function playS1() {
            if(tl1) tl1.kill();
            if(s1) s1.revert();
            s1 = new SplitText(".txt-cascade", { type: "chars" });
            tl1 = gsap.timeline();
            tl1.from(s1.chars, { opacity: 0, y: 80, rotationX: -90, transformOrigin: "0% 50% -50px", stagger: 0.05, duration: 1, ease: "back.out(2)" });
        }
        
        // --- Demo 2: Reveal ---
        let s2, tl2;
        function playS2() {
            if(tl2) tl2.kill();
            if(s2) s2.revert();
            s2 = new SplitText(".txt-reveal", { type: "words" });
            tl2 = gsap.timeline();
            tl2.from(s2.words, { yPercent: 120, stagger: 0.1, duration: 1.2, ease: "expo.out" });
        }

        // --- Demo 3: Typewriter ---
        const msgs = ["Frontend Developer.", "UX/UI Designer.", "GSAP Animator."];
        const tl3 = gsap.timeline({ repeat: -1 });
        msgs.forEach(m => {
            tl3.to(".term-target", {text: m, duration: 1.5, ease: "none", delay: 0.5})
               .to(".term-target", {text: "", duration: 0.5, ease: "none", delay: 2});
        });

        // --- Demo 4: Scramble ---
        function playS4() {
            // Revertimos a estado base corto por si se queda la palabra larga
            document.querySelector(".scramble-txt").innerText = "DATOS";
            gsap.to(".scramble-txt", {
                duration: 1.5,
                scrambleText: { text: "INFO DESBLOQUEADA", chars: "01x/{}[]!@#", revealDelay: 0.3, tweenLength: false },
                ease: "none"
            });
        }

        // --- Demo 5: Blur ---
        let s5, tl5;
        function playS5() {
            if(tl5) tl5.kill();
            if(s5) s5.revert();
            s5 = new SplitText(".blur-txt", { type: "chars" });
            tl5 = gsap.timeline();
            tl5.from(s5.chars, { filter: "blur(20px)", opacity: 0, scale: 1.5, stagger: 0.05, duration: 1.2, ease: "power2.out" });
        }

        // --- Init All ---
        window.addEventListener('load', () => {
            playS1(); playS2(); playS4(); playS5();
        });