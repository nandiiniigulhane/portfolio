import { useEffect, useRef } from "react";

export default function DotBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const SPACING = 32;
    const BASE_RADIUS = 1.5;
    const MAX_RADIUS = 4;
    const HOVER_RANGE = 130;
    const LIGHT_DOT_COLOR = [180, 140, 60];
    const DARK_DOT_COLOR = [212, 168, 83];
    const BASE_ALPHA = 0.15;
    const HOVER_ALPHA = 0.6;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function onMouseMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }
    function onMouseLeave() {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains('dark');
      const BASE_COLOR = isDark ? DARK_DOT_COLOR : LIGHT_DOT_COLOR;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const cols = Math.ceil(canvas.width / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;
      const offsetX = (canvas.width - (cols - 1) * SPACING) / 2;
      const offsetY = (canvas.height - (rows - 1) * SPACING) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offsetX + c * SPACING;
          const y = offsetY + r * SPACING;
          const dist = Math.hypot(mx - x, my - y);
          const t = Math.max(0, 1 - dist / HOVER_RANGE);
          const eased = t * t;

          const radius = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * eased;
          const alpha = BASE_ALPHA + (HOVER_ALPHA - BASE_ALPHA) * eased;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${BASE_COLOR[0]}, ${BASE_COLOR[1]}, ${BASE_COLOR[2]}, ${alpha})`;
          ctx.fill();
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    }
    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
