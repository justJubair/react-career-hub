import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Blog from "./pages/Blog/Blog";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import JobDetails from "./pages/JobDetails/JobDetails";

const MainLayout = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/appliedJobs",
        loader: ()=>fetch('jobs.json'),
        element: <AppliedJobs/>
      },
      {
        path: "/jobDetails/:id",
        loader: ()=> fetch('jobs.json'),
        element: <JobDetails/>
      }
    ],
  },
]);

export default MainLayout;
