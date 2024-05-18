import React from "react";

const Avatars = ({ src }: any) => {
	return (
		<React.Fragment>
			<div className="py-1 px-2">
				<img
					src={src}
					alt=""
					style={{ height: "70px", width: "70px", borderRadius: "4px" }}
				/>
			</div>
		</React.Fragment>
	);
};

export default Avatars;
