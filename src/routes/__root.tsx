import { createRootRoute, Outlet } from "@tanstack/react-router";
import { HeaderPanel } from "../components/HeaderPanel";

export const Route = createRootRoute({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <HeaderPanel />
      <Outlet />
    </div>
  );
}
