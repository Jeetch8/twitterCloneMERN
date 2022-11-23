import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Bookmarks from "./Pages/Bookmarks";
import Messages from "./Pages/Messages";
import Notification from "./Pages/Notifications";
import Profile from "./Pages/Profile";
import NotFoundPage from "./Pages/NotFoundPage";
import LoginRegister from "./Pages/LoginRegister";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/auth" element={<LoginRegister />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
