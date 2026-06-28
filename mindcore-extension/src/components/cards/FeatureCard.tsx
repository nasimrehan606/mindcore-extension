import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
}

export default function FeatureCard({
  icon,
  title,
}: FeatureCardProps) {
  return (
    <button
      className="
      rounded-2xl
      border
      h-32
rounded-3xl
      hover:shadow-lg
      hover:scale-105
      transition
      text-left
      "
    >
      <div className="text-red-700">{icon}</div>

      <h3 className="mt-3 font-semibold">
        {title}
      </h3>
    </button>
  );
}