import { Outlet } from "react-router-dom";
import Header from "@shared/components/header/Index";
import Footer from "@shared/components/footer/Index";
import styles from "./Index.module.css";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <h2>This is the Main layout</h2>
      </main>
      <Footer />
    </>
  );
}
