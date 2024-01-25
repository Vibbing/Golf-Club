gsap.to("#navbar", {
  backgroundColor: "#000",
  height: "11%",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#navbar",
    scroller: "body",
    start: "top -10",
    end: "top -8",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: " top -70%",
    scrub: 3,
  },
});
