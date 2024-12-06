import { Routes, Route } from "react-router-dom";
import { Complexity_Anallysis } from "../../views/pages/data_structures/Complexity_Analysis";
import { C_Data_Structure } from "../../views/pages/data_structures/C_Data_Structure";

export const CardGridRoutes = () => {
    return (
        <Routes>
            <Route path="/complexity" element={<Complexity_Anallysis />} />
            <Route path="/c_data_structure" element={<C_Data_Structure />} />
        </Routes>
    );
}
