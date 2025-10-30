import { icons } from "lucide-react";

export const Icon = ({
  name,
  color,
  size,
  className,
}: {
  name: keyof typeof icons | string;
  color: string;
  size: number;
  className?: string;
}) => {
  const map: Record<string, any> = icons as unknown as Record<string, any>;
  const LucideIcon = map[name as string];

  if (!LucideIcon) {
    // Безопасный фолбэк без обращения к несуществующим иконкам
    return (
      <span
        className={className}
        style={{ display: "inline-block", width: size, height: size }}
      />
    );
  }

  return <LucideIcon color={color} size={size} className={className} />;
};
