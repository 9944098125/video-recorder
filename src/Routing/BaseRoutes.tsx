import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SideNav from "../Components/SideNav";
import Dashboard from "../Pages/Dashboard";
import VideoEditor from "../Pages/VideoEditor";

const Layout = () => {
	return (
		<SideNav>
			<Outlet />
		</SideNav>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
			{
				path: "/editor",
				element: <VideoEditor />,
			},
		],
	},
]);

export default function BaseRoutes() {
	return <RouterProvider router={router} />;
}
