import { Routes, Route } from "react-router-dom";
import Home from "../../views/pages/Home";
import Blog from "../../views/pages/Blog";

export const NavBarRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    );
}