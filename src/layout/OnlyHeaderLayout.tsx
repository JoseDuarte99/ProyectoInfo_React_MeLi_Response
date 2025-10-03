import "./Layout.css"
import { Outlet } from "react-router";
import SimpleHeader from "../components/SimpleHeader/SimpleHeader";


const OnlyHeaderLayout = () => (
  <div className="layout">
    <SimpleHeader />
      <main className="content">
        <Outlet />
      </main>
  </div>
);

export default OnlyHeaderLayout;
