import React from "react";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
	return (
		<React.Fragment>
			<div className="navbar px-5">
				<input
					type="search"
					placeholder="search"
					className="search-input p-2"
				/>
				<RxAvatar fontSize={35} />
			</div>
		</React.Fragment>
	);
};

export default Navbar;
