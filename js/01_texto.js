gsap.registerPlugin(SplitText, TextPlugin, ScrambleTextPlugin);

        // --- S1: Cascade ---
        let s1, tl1;
        function playS1() {
            if(tl1) tl1.kill();
            if(s1) s1.revert();
            s1 = new SplitText(".txt-cascade", { type: "chars" });
            tl1 = gsap.timeline();
            tl1.from(s1.chars, { opacity: 0, y: 80, rotationX: -90, transformOrigin: "0% 50% -50", stagger: 0.05, duration: 1, ease: "back.out(2)" });
        }
        
        // --- S2: Reveal ---
        let s2, tl2;
        function playS2() {
            if(tl2) tl2.kill();
            if(s2) s2.revert();
            s2 = new SplitText(".txt-reveal", { type: "words" });
            tl2 = gsap.timeline();
            tl2.from(s2.words, { yPercent: 120, stagger: 0.05, duration: 0.8, ease: "expo.out" });
        }

        // --- S3: Typewriter (Auto) ---
        function initS3() {
            const msgs = ["Frontend Developer", "GSAP Master", "UX Engineer"];
            const tl = gsap.timeline({ repeat: -1 });
            msgs.forEach(m => {
                tl.to(".term-target", {text: m, duration: 1.5, ease: "none", delay: 0.5})
                  .to(".term-target", {text: "", duration: 0.5, ease: "none", delay: 2});
            });
        }

        // --- S4: Scramble ---
        function playS4() {
            gsap.to(".scramble-txt", {
                duration: 2,
                scrambleText: { text: "GSAP SUPREME", chars: "0123456789!@#$%^&*", revealDelay: 0.5, tweenLength: false },
                ease: "power3.inOut"
            });
        }

        // Init all on load
        window.addEventListener('load', () => {
            playS1(); playS2(); initS3(); playS4();
        });