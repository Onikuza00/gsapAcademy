gsap.registerPlugin(SplitText);

        // --- Demo 6: Highlight ---
        let tl6;
        function playS6() {
            if(tl6) tl6.kill();
            gsap.set(".marker", {width: "0%"});
            tl6 = gsap.to(".marker", { width: "110%", ease: "power3.inOut", duration: 1 });
        }

        // --- Demo 7: Wiggle Hover ---
        const split7 = new SplitText(".wiggle-txt", { type: "chars" });
        split7.chars.forEach(char => {
            gsap.set(char, { display: "inline-block" }); // Necesario para transformaciones
            // Aseguramos hitboxes consistentes
            const wrapper = document.createElement("div");
            wrapper.style.display = "inline-block";
            wrapper.style.padding = "0 5px";
            char.parentNode.insertBefore(wrapper, char);
            wrapper.appendChild(char);

            wrapper.addEventListener("mouseenter", () => {
                gsap.fromTo(char, 
                    { y: -20, scale: 1.2, color: "var(--acc)" }, 
                    { y: 0, scale: 1, color: "var(--txt)", ease: "elastic.out(1, 0.2)", duration: 1.5, overwrite: "auto" }
                );
            });
        });

        // --- Demo 8: Clip Path Background Pan ---
        gsap.to(".clip-txt", { backgroundPosition: "100% 50%", ease: "none", duration: 10, repeat: -1, yoyo: true });

        // --- Demo 9: Glitch ---
        function playS9() {
            gsap.to(".glitch-txt", {
                x: () => Math.random() * 30 - 15,
                skewX: () => Math.random() * 40 - 20,
                scale: () => 1 + Math.random() * 0.2,
                opacity: () => Math.random(),
                duration: 0.05,
                repeat: 15,
                ease: "none",
                onComplete: () => {
                    gsap.set(".glitch-txt", { clearProps: "all" });
                }
            });
        }

        // --- Demo 10: Circular Text ---
        const str = "GSAP ACADEMY • GSAP ACADEMY • ";
        const circWrap = document.getElementById("circle-text");
        const radius = 100;
        
        for (let i = 0; i < str.length; i++) {
            let char = document.createElement("div");
            char.className = "circ-txt";
            char.innerText = str[i];
            
            // Calculo de angulo equivalente
            let angle = (i / str.length) * 360;
            
            // GSAP transforma cada letra distribuyendolas por el perimetro
            gsap.set(char, {
                transformOrigin: `0 ${radius}px`,
                rotation: angle,
                y: -radius
            });
            circWrap.appendChild(char);
        }

        // Rotar el conjunto
        gsap.to(".circ-wrap", { rotation: 360, duration: 15, ease: "none", repeat: -1 });

        window.addEventListener('load', () => {
            playS6();
        });