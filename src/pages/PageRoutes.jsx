import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import DashboardPage from "./Dashboard";
import AuthForm from "./AuthForm";

const PageRoutes = () => {

    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<AuthForm/>}/>
                    <Route path="/Dashboard" element = {<DashboardPage/>}/>
                </Routes>
            </Router>
        </>
        
    )
}
export default PageRoutes;

