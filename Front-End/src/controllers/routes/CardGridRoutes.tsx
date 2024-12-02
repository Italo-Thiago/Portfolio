import { Routes, Route } from "react-router-dom";
import { Complexity_Anallysis } from "../../views/pages/data_structures/Complexity_Analysis";

export const CardGridRoutes = () => {
    return (
        <Routes>
            <Route path="/complexity" element={<Complexity_Anallysis />} />
        </Routes>
    );
}
