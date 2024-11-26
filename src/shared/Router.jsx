import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";

const SharedRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/testresult" element={<TestResultPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default SharedRouter;