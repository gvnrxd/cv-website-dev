import { Outlet } from "react-router-dom";
import Header from "@shared/components/header/Index";
import Footer from "@shared/components/footer/Index";
import styles from "./Index.module.css";

export default function LandingLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
