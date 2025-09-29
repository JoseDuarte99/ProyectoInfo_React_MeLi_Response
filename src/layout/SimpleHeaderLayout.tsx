import "./Layout.css"
import { Outlet } from "react-router";
import SimpleHeader from "../components/SimpleHeader/SimpleHeader";
import Footer from "../components/Footer/Footer";


const SimpleHeaderLayout = () => (
  <div className="layout">
    <SimpleHeader />
      <main className="content">
        <Outlet />
      </main>
    <Footer />
  </div>
);

export default SimpleHeaderLayout;
