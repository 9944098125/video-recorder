import React from "react";
import CreateProjectButton from "../../Components/Buttons/CreateProjectButton";
import RecordVideoButton from "../../Components/Buttons/RecordVideoButton";

import "./styles.css";
import { FaScissors } from "react-icons/fa6";

const Dashboard = () => {
	return (
		<React.Fragment>
			<div className="p-2">
				<div className="buttons-container d-flex align-items-center gap-5">
					<CreateProjectButton />
					<RecordVideoButton />
				</div>
				<div className="mt-4">
					<h5 className="fs-6 fw-bold text-secondary">Recent Videos</h5>
					<div className="d-flex align-items-center gap-3">
						<div className="">
							<div className="dashboard-video d-flex align-items-center justify-content-center mb-2">
								<button className="hovered-button">
									<FaScissors
										fontSize={10}
										color="white"
										style={{ marginRight: "5px" }}
									/>
									<span>Edit</span>
								</button>
							</div>
							<h4 className="text-secondary fs-6 m-0">Untitled Video 1</h4>
							<p className="fw-bold text-secondary">1 day ago</p>
						</div>
						<div className="">
							<div className="dashboard-video d-flex align-items-center justify-content-center mb-2">
								<button className="hovered-button">
									<FaScissors
										fontSize={10}
										color="white"
										style={{ marginRight: "5px" }}
									/>
									<span>Edit</span>
								</button>
							</div>
							<h4 className="text-secondary fs-6 m-0">Untitled Video 2</h4>
							<p className="fw-bold text-secondary">4 days ago</p>
						</div>
						<div className="">
							<div className="dashboard-video d-flex align-items-center justify-content-center mb-2">
								<button className="hovered-button">
									<FaScissors
										fontSize={10}
										color="white"
										style={{ marginRight: "5px" }}
									/>
									<span>Edit</span>
								</button>
							</div>
							<h4 className="text-secondary fs-6 m-0">Untitled Video 3</h4>
							<p className="fw-bold text-secondary">5 days ago</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Dashboard;
