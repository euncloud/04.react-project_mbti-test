import { Route, Router } from "react-router-dom";
import Header from "../components/Header";

const SharedRouter = () => (
    <Router>
       <Header />
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/test" element={<Test />} />
       <Route path="/testresult" element={<TestResult />} />
       <Route path="/prifile" element={<Profile />} />
    </Router>

);

export default SharedRouter;