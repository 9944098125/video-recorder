import React from "react";

import "./styles.css";

const VideoTypes = ({ showVideoTypes }: any) => {
	return (
		<React.Fragment>
			{showVideoTypes && (
				<div
					style={{ listStyleType: "none", cursor: "pointer" }}
					className="bg-white p-2 vtc">
					<li className="text-secondary fw-bold">Slow Motion</li>
					<li className="text-secondary fw-bold">Time Lapse</li>
					<li className="text-secondary fw-bold">Fire</li>
					<li className="text-secondary fw-bold">Water</li>
					<li className="text-secondary fw-bold">Flowers</li>
				</div>
			)}
		</React.Fragment>
	);
};

export default VideoTypes;
