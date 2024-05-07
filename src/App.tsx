import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import TodoPage from "./pages/TodoPage";
import { Link } from "react-router-dom";
import UserItemPage from "./pages/UserItemPage";

const App = () => {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/users">Список пользователей</Link>
      <Link to="/todos">Список дел</Link>
    </nav>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
