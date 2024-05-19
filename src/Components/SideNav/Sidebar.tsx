import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../Redux/Actions/toggle";
import { RootState } from "../../Redux/Reducers";
import { VscThreeBars } from "react-icons/vsc";

const Sidebar = () => {
	const dispatch: any = useDispatch();

	const { close } = useSelector((state: RootState) => state.toggle);

	const toggleSidebar = () => {
		dispatch(toggle());
	};

	return (
		<React.Fragment>
			<div className={`${close ? "sidebar-close px-1" : "sidebar-open px-3"}`}>
				<div className="text-center mb-5 mt-4">
					<h2 className="fw-bold head">{close ? "VE" : "VIDEO EDITOR"}</h2>
					<div className="d-flex justify-content-start">
						{close ? (
							<button onClick={toggleSidebar} className="btn ms-2">
								<VscThreeBars fontSize={25} color="grey" />
							</button>
						) : (
							<button onClick={toggleSidebar} className="btn ms-2">
								<VscThreeBars fontSize={25} color="grey" />
							</button>
						)}
					</div>
				</div>
				<NavLink
					className={({ isActive }) => (isActive ? "active mb-3" : "link mb-3")}
					style={{ textDecoration: "none", color: "inherit" }}
					to="/">
					<MdDashboard fontSize={25} />
					{!close && <p className="fs-5 fw-bold m-0">Dashboard</p>}
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "active mb-3" : "link mb-3")}
					style={{ textDecoration: "none", color: "inherit" }}
					to="/editor">
					<IoIosVideocam fontSize={25} />
					{!close && <p className="fs-5 fw-bold m-0">Video Editor</p>}
				</NavLink>
			</div>
		</React.Fragment>
	);
};

export default Sidebar;
