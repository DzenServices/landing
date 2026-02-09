"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const REVEAL_ATTR = "data-reveal";

export const ScrollReveal = () => {
  useEffect(() => {
    let isCanceled = false;
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let idleCallbackId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

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

    const scheduleInit = () => {
      if ("requestIdleCallback" in window) {
        const idleWindow = window as Window & {
          requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
          cancelIdleCallback: (id: number) => void;
        };
        idleCallbackId = idleWindow.requestIdleCallback(init, { timeout: 2000 });
      } else {
        timeoutId = setTimeout(init, 300);
      }
    };

    const onLoad = () => scheduleInit();

    if (document.readyState === "complete") {
      scheduleInit();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      isCanceled = true;
      if (idleCallbackId !== null && "cancelIdleCallback" in window) {
        const idleWindow = window as Window & { cancelIdleCallback: (id: number) => void };
        idleWindow.cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener("load", onLoad);
      observer?.disconnect();
      mutationObserver?.disconnect();
    };
  }, []);

  return null;
};
