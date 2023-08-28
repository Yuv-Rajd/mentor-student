import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisteScreen from "./screens/RegisterScreen";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisteScreen />} />
      </Routes>
    </>
  );
}

export default App;
