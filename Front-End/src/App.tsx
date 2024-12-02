import { BrowserRouter as Router } from "react-router-dom";
import { NavBarRoutes } from "./controllers/routes/NavBarRoutes";
import { CardGridRoutes } from "./controllers/routes/CardGridRoutes"
import { NavBar } from "./views/components/NavBar";
import { Footer } from "./views/components/Footer";


function App() {
    return (
        <>
        <Router>
            <NavBar />
            <NavBarRoutes />
            <CardGridRoutes />            
        </Router>
        <Footer />
        </>
    );
}

export default App
