import React from "react";
import { Link } from "react-router-dom";
import { FaScissors } from "react-icons/fa6";

const CreateProjectButton = () => {
	return (
		<React.Fragment>
			<Link to="/editor" style={{ textDecoration: "none", color: "inherit" }}>
				<button className="create-button fw-bold d-flex align-items-center gap-1 btn">
					<span
						style={{ backgroundColor: "#e5d0ff" }}
						className="rounded me-3 py-1 px-2">
						<FaScissors fontSize={20} color="violet" />
					</span>
					Create Project
				</button>
			</Link>
		</React.Fragment>
	);
};

export default CreateProjectButton;
