gsap.registerPlugin(Flip, MorphSVGPlugin, DrawSVGPlugin, Draggable, InertiaPlugin);

        // --- Demo 6: FLIP ---
        let isFull = false;
        function toggleFlip() {
            const stateA = document.getElementById("fa");
            const stateB = document.getElementById("fb");
            const box = document.querySelector(".flip-box");
            
            // 1. Get STATE
            const state = Flip.getState(box);
            // 2. Change DOM
            (isFull ? stateA : stateB).appendChild(box);
            isFull = !isFull;
            // 3. FLIP
            Flip.from(state, { duration: 1, ease: "power3.inOut", absolute: true });
        }

        // --- Demo 7: Morph SVG ---
        let mState = 0;
        const shapes = ["#stop", "#circle", "#play"];
        function morphShape() {
            mState = (mState + 1) % 3;
            gsap.to("#play", {
                duration: 1.5,
                morphSVG: shapes[mState],
                ease: "elastic.out(1, 0.4)"
            });
        }

        // --- Demo 8: Draw SVG ---
        function drawIt() {
            gsap.fromTo(".draw-path", { drawSVG: "0%" }, { drawSVG: "100%", duration: 2, ease: "power2.inOut" });
        }
        window.addEventListener('load', drawIt);

        // --- Demo 9: Rotate Dial ---
        const vol = document.getElementById("vol");
        Draggable.create(".dial-wrap", {
            type: "rotation",
            inertia: true,
            onDrag: function() { setVol(this.rotation); },
            onThrowUpdate: function() { setVol(this.rotation); }
        });
        function setVol(rot) {
            let num = Math.floor((rot % 360) / 3.6);
            if(num < 0) num += 100;
            vol.innerText = num;
        }

        // --- Demo 10: Tooltip Tracker ---
        const zone = document.querySelector(".track-zone");
        const tip = document.querySelector(".tooltip");
        const tX = gsap.quickTo(tip, "x", {duration: 0.2});
        const tY = gsap.quickTo(tip, "y", {duration: 0.2});

        zone.addEventListener("mouseenter", () => {
            gsap.to(tip, { opacity: 1, scale: 1, duration: 0.2 });
        });
        zone.addEventListener("mouseleave", () => {
            gsap.to(tip, { opacity: 0, scale: 0.8, duration: 0.2 });
        });
        zone.addEventListener("mousemove", (e) => {
            const rect = zone.getBoundingClientRect();
            tX(e.clientX - rect.left + 20); // +20 offset for mouse pointer room
            tY(e.clientY - rect.top + 20);
        });