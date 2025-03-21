import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="pt-10">
      <Navbar />
      <div className="px-0 py-0">{children}</div>
    </div>
  );
};

export default Layout;
