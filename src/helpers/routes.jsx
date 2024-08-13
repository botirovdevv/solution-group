import Admin from "../pages/admin/Admin";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const routes = [
    {
        path: "/",
        element: <Home/>
    },

    {
        path: "*",
        element: <NotFound/>
    },

    {
        path: "/admin",
        element: <Admin/>
    }

]