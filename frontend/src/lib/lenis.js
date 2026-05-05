import Lenis from "@studio-freight/lenis";

let lenis = null;

if (typeof window !== "undefined") {
  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    smoothTouch: false,
  });
}

export default lenis;
