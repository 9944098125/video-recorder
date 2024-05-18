import React from "react";
import Sidebar from "./Sidebar";

import "./styles.css";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";
import { useLocation } from "react-router-dom";

import "./styles.css";

const SideNav = ({ children }: any) => {
	const { close } = useSelector((state: RootState) => state.toggle);
	const location = useLocation();
	return (
		<React.Fragment>
			<div className="w-100 d-flex">
				<Sidebar />
				<div
					style={{
						marginLeft:
							location.pathname === "/editor"
								? "70px"
								: close
								? "70px"
								: "250px",
					}}
					className="navbar-outlet">
					<Navbar />
					{children}
				</div>
			</div>
		</React.Fragment>
	);
};

export default SideNav;
