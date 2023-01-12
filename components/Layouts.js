import Navbar from "./Navbar";

const Layout = (props) => (
  <div>
    <main>
      <Navbar />
      {props.children}
    </main>
  </div>
);

export default Layout;
