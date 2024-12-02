import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./controllers/routes/routes";
import { NavBar } from "./views/components/NavBar";


function App() {
    return (
        <Router>
            <NavBar />
            <AppRoutes />
        </Router>
    );
}

export default App
