import { Pizza } from "lucide-react";
import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="border-foreground/5 bg-muted text-muted-foreground flex flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 text-lg font-medium">
          <Pizza className="h-6 w-6" />
          <span className="font-semibold">pizza.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  );
}
