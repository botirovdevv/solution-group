import ProjectsList from "../components/main/ProjectsList";
import UploadProject from "../components/main/UploadProject";

export const AdminRoutes = [
    
    {
        path: "projects",
        element: <ProjectsList />
    },

    {
        path: "upload",
        element: <UploadProject />
    }

]