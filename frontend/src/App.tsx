import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import About from "./pages/Dashboard/About";
import Services from "./pages/Dashboard/Services";
import Chat from "./pages/Dashboard/Chat";
import Feedback from "./pages/Dashboard/Feedback";
import Contact from "./pages/Dashboard/Contact";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Toaster />
    </div>
  );
}

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
}

export default App;
