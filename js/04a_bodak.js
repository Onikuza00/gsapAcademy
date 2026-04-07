gsap.registerPlugin(ScrollTrigger);

      // --- 01 SPREAD ---
      gsap.to(".bdk-c1", {
        xPercent: -130,
        rotation: -15,
        scale: 0.85,
        scrollTrigger: { trigger: ".sc-wrap", start: "top 85%", end: "bottom 30%", scrub: 2.5 },
      });
      gsap.to(".bdk-c3", {
        xPercent: 130,
        rotation: 15,
        scale: 0.85,
        scrollTrigger: { trigger: ".sc-wrap", start: "top 85%", end: "bottom 30%", scrub: 2.5 },
      });

      // --- 02 MORPH ---
      ScrollTrigger.create({
        trigger: "#morph-trigger",
        start: "top 35%",
        onEnter: () => {
          gsap.to("body", { backgroundColor: "var(--bg-morph)", color: "#111", duration: 1 });
          gsap.to("#morph-txt", { color: "#111", duration: 1 });
          gsap.to(".morph-target", { backgroundColor: "rgba(0,0,0,0.03)", borderColor: "rgba(0,0,0,0.1)", duration: 1 });
          gsap.to(".header", { backgroundColor: "rgba(215,209,200,0.8)", borderColor: "rgba(0,0,0,0.1)", duration: 1 });
          gsap.to(".header h3, .header a", { color: "#111", duration: 1 });
        },
        onLeaveBack: () => {
          gsap.to("body", { backgroundColor: "var(--bg)", color: "var(--txt)", duration: 1 });
          gsap.to("#morph-txt", { color: "var(--txt)", duration: 1 });
          gsap.to(".morph-target", { backgroundColor: "var(--glass)", borderColor: "var(--border)", duration: 1 });
          gsap.to(".header", { backgroundColor: "rgba(7,7,7,0.8)", borderColor: "var(--border)", duration: 1 });
          gsap.to(".header h3, .header a", { color: "#fff", duration: 1 });
        },
      });

      // --- 03 STACKING ---
      const tlP = gsap.timeline({
        scrollTrigger: { trigger: ".prozess-scroll", start: "top top", end: "bottom bottom", scrub: 0.5 },
      });
      tlP
        .to(".ps-1", { opacity: 0.1, x: 0 }, 1)
        .to(".ps-2", { opacity: 1, x: 15 }, 1)
        .to(".pi-1", { opacity: 0 }, 1)
        .to(".pi-2", { opacity: 1 }, 1)

        .to(".ps-2", { opacity: 0.1, x: 0 }, 3)
        .to(".ps-3", { opacity: 1, x: 15 }, 3)
        .to(".pi-2", { opacity: 0 }, 3)
        .to(".pi-3", { opacity: 1 }, 3)

        .to(".ps-3", { opacity: 0.1, x: 0 }, 5)
        .to(".ps-4", { opacity: 1, x: 15 }, 5)
        .to(".pi-3", { opacity: 0 }, 5)
        .to(".pi-4", { opacity: 1 }, 5)

        .to(".ps-4", { opacity: 0.1, x: 0 }, 7)
        .to(".ps-5", { opacity: 1, x: 15 }, 7)
        .to(".pi-4", { opacity: 0 }, 7)
        .to(".pi-5", { opacity: 1 }, 7);

      // --- 04 SKEW ---
      ScrollTrigger.create({
        onUpdate: (self) => {
          let skew = self.getVelocity() / 100;
          gsap.to(".skew-box", { skewY: skew, duration: 0.5, overwrite: "auto", ease: "power1.out" });
        },
      });