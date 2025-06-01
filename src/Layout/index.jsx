// import { Route, Routes } from "react-router-dom";
// import Home from "../../pages/Home";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;