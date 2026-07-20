import NavBar from "../components/NavBar";

import "../styles/global.css";
import "../styles/layout.css";
import "../styles/navbar.css";

function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
export default MainLayout;
