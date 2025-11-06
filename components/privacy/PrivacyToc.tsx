"use client";

import React from "react";
import Link from "next/link";

type TocItem = Readonly<{
  id: string;
  label: string;
}>;

type PrivacyTocProps = {
  items: ReadonlyArray<TocItem>;
};

export const PrivacyToc: React.FC<PrivacyTocProps> = ({ items }) => {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Выбираем самый верхний видимый заголовок
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target) {
          setActiveId((visible[0].target as HTMLElement).id);
          return;
        }

        // Если ни один не виден — найдём ближайший выше
        const topEntry = entries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (topEntry?.target) {
          setActiveId((topEntry.target as HTMLElement).id);
        }
      },
      {
        root: null,
        // Сдвигаем зону пересечения, чтобы учитывать фиксированный хедер/scroll-mt-24
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sticky top-24 rounded-2xl border bg-background/50 backdrop-blur p-5 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">Оглавление</p>
      <nav className="mt-3">
        <ul className="space-y-2 text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className={[
                    "group inline-flex items-center transition-colors",
                    isActive ? "text-primary" : "hover:text-primary",
                  ].join(" ")}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
