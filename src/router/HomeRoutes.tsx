import Home from "../components/pages/Home";
import UserManagement from "../components/pages/UserManagement";
import Setting from "../components/pages/Setting";

export const homeRoutes = [
  { path: "", element: <Home></Home> },
  { path: "user-management", element: <UserManagement></UserManagement> },
  { path: "setting", element: <Setting></Setting> },
];
