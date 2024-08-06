import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/SignUp/Signup.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Profile from "./pages/Profile/Profile.jsx";
const App = () => {
  return (
    <div>
      <AuthProvider>
        {" "}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile></Profile>
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
