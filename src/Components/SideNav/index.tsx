import React from "react";
import Sidebar from "./Sidebar";

import "./styles.css";
import Navbar from "./Navbar";

const SideNav = ({ children }: any) => {
	return (
		<React.Fragment>
			<div className="w-100 d-flex">
				<Sidebar />
				<div className="navbar-outlet">
					<Navbar />
					{children}
				</div>
			</div>
		</React.Fragment>
	);
};

export default SideNav;
