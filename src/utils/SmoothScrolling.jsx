import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1,
    smoothTouch: false,
    smooth: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
