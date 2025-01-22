import { Outlet } from "react-router";
import { Header } from "../../components/header";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
