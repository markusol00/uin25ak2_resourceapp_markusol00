import Nav from "./Nav";
import PageTitle from "./PageTitle";

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
        </>
    );
};

export default Layout;
