import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
    return (
        <div className="app">
            <Header />

            <main className="content">
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;