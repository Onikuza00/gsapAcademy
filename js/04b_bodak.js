gsap.registerPlugin(ScrollToPlugin);

        // --- 06. DM TOGGLE ---
        let isDark = false;
        function toggleDM() {
            isDark = !isDark;
            document.body.classList.toggle("dark-mode");
            gsap.to(".dm-knob", { x: isDark ? 55 : 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
        }

        // --- 07. PRELOADER ---
        function simPreloader() {
            gsap.set(".preloader-wrap", { display: "flex" });
            gsap.set(".p-left", { xPercent: 0 });
            gsap.set(".p-right", { xPercent: 0 });
            gsap.set(".p-txt", { opacity: 0, scale: 3 });
            
            const tl = gsap.timeline();
            tl.to(".pl", { opacity: 1, scale: 1, duration: 1.2, ease: "expo.out" }, 0.2)
              .to(".pr", { opacity: 1, scale: 1, duration: 1.2, ease: "expo.out" }, 0.4)
              .to(".p-left", { xPercent: -100, duration: 1.8, ease: "expo.inOut" }, 1.5)
              .to(".p-right", { xPercent: 100, duration: 1.8, ease: "expo.inOut" }, 1.5)
              .set(".preloader-wrap", { display: "none" });
        }
        window.addEventListener('load', simPreloader);

        // --- 08. SCROLL TO ---
        document.querySelector(".up-btn").addEventListener("click", () => {
            gsap.to(window, { duration: 2, scrollTo: 0, ease: "power4.inOut" });
        });

        // --- 09. FLOAT IMAGE ---
        const links = document.querySelectorAll(".h-link");
        const img = document.getElementById("float-img");
        const qX = gsap.quickTo(img, "x", {duration: 0.3, ease: "power3"});
        const qY = gsap.quickTo(img, "y", {duration: 0.3, ease: "power3"});

        window.addEventListener("mousemove", e => {
            // Posicionamos la imagen a la derecha (+50px) y ligeramente abajo (+20px) del cursor
            qX(e.clientX + 50);
            qY(e.clientY - 90); // Centrada verticalmente respecto al puntero
        });

        links.forEach(l => {
            l.addEventListener("mouseenter", () => {
                img.src = l.dataset.src;
                gsap.fromTo(img, 
                    { opacity: 0, scale: 0.8, rotate: 10 }, 
                    { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: "power2.out", overwrite: "auto" }
                );
            });
            l.addEventListener("mouseleave", () => {
                gsap.to(img, { opacity: 0, scale: 0.6, rotate: -10, duration: 0.6, ease: "power2.in", overwrite: "auto" });
            });
        });

        // --- 10. ACCORDION ---
        const items = document.querySelectorAll(".acc-item");
        items.forEach(i => {
           const head = i.querySelector(".acc-head");
           const body = i.querySelector(".acc-body");
           head.addEventListener("click", () => {
               const open = i.classList.contains("open");
               items.forEach(s => {
                   s.classList.remove("open");
                   gsap.to(s.querySelector(".acc-body"), { height: 0, duration: 0.4 });
               });
               if(!open) {
                   i.classList.add("open");
                   gsap.to(body, { height: body.scrollHeight, duration: 0.6, ease: "power2.out" });
               }
           });
        });