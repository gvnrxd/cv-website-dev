import { Outlet } from "react-router-dom";
import Header from "@shared/components/header/Index";
import styles from "./Index.module.css";

export default function LandingLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <h2>This is the Landing layout</h2>
      </main>
    </>
  );
}
