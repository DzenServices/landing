"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const REVEAL_ATTR = "data-reveal";

export const ScrollReveal = () => {
  useEffect(() => {
    let isCanceled = false;
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const init = () => {
      if (isCanceled) return;

      const root = document.documentElement;
      const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
      const observed = new Set<HTMLElement>();

      if (elements.length === 0) {
        root.setAttribute(REVEAL_ATTR, "1");
        return;
      }

      const revealNow = (el: HTMLElement) => el.classList.add("is-revealed");
      const viewportThreshold = window.innerHeight * 0.85;
      const shouldReveal = (el: HTMLElement) => el.getBoundingClientRect().top < viewportThreshold;

      elements.forEach((el) => {
        if (shouldReveal(el)) {
          revealNow(el);
        }
      });

      root.setAttribute(REVEAL_ATTR, "1");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealNow(entry.target as HTMLElement);
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
      );

      const observeElement = (el: HTMLElement) => {
        if (observed.has(el)) return;
        observed.add(el);
        if (!el.classList.contains("is-revealed")) {
          if (shouldReveal(el)) {
            revealNow(el);
            return;
          }
          observer?.observe(el);
        }
      };

      elements.forEach(observeElement);

      mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) return;
            if (node.matches(REVEAL_SELECTOR)) {
              observeElement(node);
            }
            node.querySelectorAll?.(REVEAL_SELECTOR).forEach((child) => {
              observeElement(child as HTMLElement);
            });
          });
        });
      });

      mutationObserver.observe(document.body, { childList: true, subtree: true });
    };

    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void })
        .requestIdleCallback(init, { timeout: 2000 });
    } else {
      setTimeout(init, 300);
    }

    return () => {
      isCanceled = true;
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);

  return null;
};
