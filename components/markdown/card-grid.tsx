import { ReactNode } from "react";

export default function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      {children}
    </div>
  );
}
