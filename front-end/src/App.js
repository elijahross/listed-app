import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import {AuthProvider} from "./components/AuthContext";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen overflow-hidden mx-4">
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/' index element={<LoginPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<Register />} />
            </Routes>
          </AuthProvider>
      </div>
    </BrowserRouter>
  );
}