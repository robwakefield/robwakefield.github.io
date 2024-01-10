import { ReactNode } from "react";

export default function Sidebar({
  children,
}: {
  children: ReactNode
}) {
  return (
  <div className="h-full bg-bg-dark w-5/12 border-r-2 border-secondary">
    {children}
  </div>
  )
}