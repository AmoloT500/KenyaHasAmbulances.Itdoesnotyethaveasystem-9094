import { useEffect, useRef } from "react";

/**
 * One orchestrated scroll reveal: elements fade and rise 14px once, when they
 * enter the viewport. No repeated animation, no scroll listeners.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/** Wraps children in a revealing container. */
export function Reveal({
  children,
  className,
  style,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Tag ref={ref as never} className={`reveal ${className ?? ""}`} style={style}>
      {children}
    </Tag>
  );
}
