import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Test from "../pages/Test";
import TestResult from "../pages/TestResult";
import Profile from "../pages/Profile";

const SharedRouter = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="/testresult" element={<TestResult />} />
            <Route path="/prifile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
);

export default SharedRouter;