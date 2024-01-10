import { ReactNode } from "react";

export default function Navbar({
  children,
}: {
  children: ReactNode
}) {
  return (
  <div className="w-full h-sm bg-bg-dark border-b-2 border-secondary">
    {children}
  </div>
  )
}