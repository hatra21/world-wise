import { Logo } from "./Logo";
import { AppNav } from "./AppNav";
import styles from "./styles/SideBar.module.css";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}
