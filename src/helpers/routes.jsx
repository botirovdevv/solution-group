import Admin from "../pages/admin/Admin";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProjectsList from "../components/main/ProjectsList";
import UploadProject from "../components/main/UploadProject";

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
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: 'upload',
                element: <UploadProject />,
            },
            {
                path: 'projects',
                element: <ProjectsList />,
            },
        ],
    },

    {
        path: "/admin/projects",
        element: <ProjectsList />
    },

    {
        path: "/admin/upload",
        element: <UploadProject />
    }

]