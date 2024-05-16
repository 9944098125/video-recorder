import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";

const Sidebar = () => {
	return (
		<React.Fragment>
			<div className="sidebar px-2">
				<div className="text-center mb-5">
					<h2 className="fw-bold">VIDEO EDITOR</h2>
				</div>
				<NavLink
					className={({ isActive }) => (isActive ? "active mb-3" : "link mb-3")}
					style={{ textDecoration: "none", color: "inherit" }}
					to="/">
					<MdDashboard fontSize={25} />
					<p className="fs-5 m-0">Dashboard</p>
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "active mb-3" : "link mb-3")}
					style={{ textDecoration: "none", color: "inherit" }}
					to="/editor">
					<IoIosVideocam fontSize={25} />
					<p className="fs-5 m-0">Video Editor</p>
				</NavLink>
			</div>
		</React.Fragment>
	);
};

export default Sidebar;
