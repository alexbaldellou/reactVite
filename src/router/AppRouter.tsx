import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { HomePage } from "../pages/home/HomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
