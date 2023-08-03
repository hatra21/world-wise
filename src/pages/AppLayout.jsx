import { Map } from "../components/Map";
import { SideBar } from "../components/SideBar";
import styles from "./styles/AppLayout.module.css";

export function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}
